import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import AnimatedKPI from "./AnimatedKPI";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format } from "date-fns";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type EquityPoint = { ts: number; equity: number };
type Trade = { ts: number; pnl: number };
type Mode = "equity" | "return";
type Range = "30d" | "90d" | "ytd" | "all";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
interface Props {
  dataUrl?: string;
  tradesUrl?: string;
  title?: string;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function parseEquity(row: any): EquityPoint | null {
  const t = row.time ?? row.date ?? row.timestamp;
  const ts = Date.parse(t);
  const eq = Number(row.equity ?? row.equity_after);
  return Number.isFinite(ts) && Number.isFinite(eq) ? { ts, equity: eq } : null;
}

function parseTrade(row: any): Trade | null {
  const t = row.timestamp ?? row.time ?? row.date;
  const ts = Date.parse(t);
  const pnl = Number(row.pnl);
  return Number.isFinite(ts) && Number.isFinite(pnl) ? { ts, pnl } : null;
}

function fmtPct(v: number | null, digits = 1) {
  if (v == null || Number.isNaN(v)) return "—";
  return `${v.toFixed(digits)}%`;
}
function fmtSignedPct(v: number | null, digits = 1) {
  if (v == null || Number.isNaN(v)) return "—";
  return `${v >= 0 ? "+" : ""}${v.toFixed(digits)}%`;
}
function fmtFreq(v: number | null) {
  if (v == null || Number.isNaN(v)) return "—";
  return `${Math.round(v)} / 30d`;
}
function fmtPL(v: number | null) {
  if (v == null || Number.isNaN(v)) return "—";
  if (!Number.isFinite(v)) return "∞";
  return v.toFixed(2);
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const PerformanceCurve = ({
  dataUrl = "/data/equity_1.json",
  tradesUrl = "/data/trades_1.json",
  title = "Yield Rate Curve",
}: Props) => {
  const [raw, setRaw] = useState<EquityPoint[]>([]);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [mode, setMode] = useState<Mode>("equity");
  const [range, setRange] = useState<Range>("all");
  const [error, setError] = useState("");

  /* ---------- fetch data ---------- */
  useEffect(() => {
    (async () => {
      try {
        setError("");
        const [eqRes, trRes] = await Promise.all([
          fetch(dataUrl, { cache: "no-store" }),
          tradesUrl ? fetch(tradesUrl, { cache: "no-store" }) : Promise.resolve(null),
        ]);
        if (!eqRes.ok) throw new Error(`HTTP ${eqRes.status}`);
        const eqJson = await eqRes.json();
        const pts = (Array.isArray(eqJson) ? eqJson : [])
          .map(parseEquity)
          .filter(Boolean) as EquityPoint[];
        pts.sort((a, b) => a.ts - b.ts);
        if (!pts.length) throw new Error("No valid equity data found");
        setRaw(pts);

        if (trRes && trRes.ok) {
          const trJson = await trRes.json();
          const tds = (Array.isArray(trJson) ? trJson : [])
            .map(parseTrade)
            .filter(Boolean) as Trade[];
          tds.sort((a, b) => a.ts - b.ts);
          setTrades(tds);
        }
      } catch (e: any) {
        setError(e.message);
      }
    })();
  }, [dataUrl, tradesUrl]);

  /* ---------- range filter ---------- */
  const series = useMemo(() => {
    if (!raw.length) return [];
    const now = raw[raw.length - 1].ts;
    let startTs = 0;
    if (range === "30d") startTs = now - 30 * 86400000;
    else if (range === "90d") startTs = now - 90 * 86400000;
    else if (range === "ytd") {
      const d = new Date(now);
      startTs = new Date(d.getFullYear(), 0, 1).getTime();
    }
    const cut = raw.filter((p) => p.ts >= startTs);
    return cut.length ? cut : raw;
  }, [raw, range]);

  /* ---------- chart data ---------- */
  const chartData = useMemo(() => {
    if (!series.length) return [];
    const base = series[0].equity;
    return series.map((p) => ({
      time: p.ts,
      value: mode === "equity" ? p.equity : (p.equity / base - 1) * 100,
    }));
  }, [series, mode]);

  /* ---------- KPI stats ---------- */
  const stats = useMemo(() => {
    const nil = {
      returnPct: null as number | null,
      maxDDPct: null as number | null,
      winDaysPct: null as number | null,
      avgMovePct: null as number | null,
      openFreq30d: null as number | null,
      plRatio: null as number | null,
    };
    if (series.length < 2) return nil;

    const start = series[0].equity;
    const end = series[series.length - 1].equity;
    const ret = (end / start - 1) * 100;

    let peak = series[0].equity;
    let minDD = 0;
    for (const p of series) {
      peak = Math.max(peak, p.equity);
      const dd = p.equity / peak - 1;
      if (dd < minDD) minDD = dd;
    }

    const rets: number[] = [];
    for (let i = 1; i < series.length; i++) {
      const r = series[i].equity / series[i - 1].equity - 1;
      if (Number.isFinite(r)) rets.push(r);
    }
    const n = rets.length;
    const winRatio = n ? (rets.filter((r) => r > 0).length / n) * 100 : null;
    const avgMove = n
      ? (rets.reduce((a, b) => a + Math.abs(b), 0) / n) * 100
      : null;

    const startTs = series[0].ts;
    const endTs = series[series.length - 1].ts;
    const days = Math.max(0, endTs - startTs) / 86400000;
    const tInRange = trades.filter((t) => t.ts >= startTs && t.ts <= endTs);

    let openFreq30d: number | null = null;
    if (trades.length && days > 0) openFreq30d = (tInRange.length / days) * 30;

    let plRatio: number | null = null;
    if (trades.length) {
      const profits = tInRange.filter((t) => t.pnl > 0).reduce((s, t) => s + t.pnl, 0);
      const losses = tInRange.filter((t) => t.pnl < 0).reduce((s, t) => s + t.pnl, 0);
      if (profits === 0 && losses === 0) plRatio = null;
      else if (losses === 0 && profits > 0) plRatio = Infinity;
      else plRatio = profits / Math.abs(losses);
    }

    return { returnPct: ret, maxDDPct: Math.abs(minDD) * 100, winDaysPct: winRatio, avgMovePct: avgMove, openFreq30d, plRatio };
  }, [series, trades]);

  const handleRange = useCallback((r: Range) => setRange(r), []);

  const kpis = [
    { label: "Periodic earnings", value: fmtSignedPct(stats.returnPct), positive: (stats.returnPct ?? 0) >= 0 },
    { label: "Maximum drawdown", value: fmtPct(stats.maxDDPct) },
    { label: "Profitable days", value: fmtPct(stats.winDaysPct) },
    { label: "Daily avg fluctuation", value: fmtPct(stats.avgMovePct) },
    { label: "Open frequency", value: fmtFreq(stats.openFreq30d) },
    { label: "Profit / Loss ratio", value: fmtPL(stats.plRatio) },
  ];

  const ranges: Range[] = ["30d", "90d", "ytd", "all"];
  const modes: { key: Mode; label: string }[] = [
    { key: "equity", label: "Net Worth" },
    { key: "return", label: "Yield Rate" },
  ];

  return (
    <section className="bg-background py-10 sm:py-16">
      <div className="section-wrap">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-0"
            style={{ fontSize: "clamp(1.25rem, 4vw, 2rem)" }}
          >
            {title}
          </motion.h2>

          <div className="flex gap-2 flex-wrap">
            {/* mode toggle */}
            <div className="inline-flex border border-border rounded-full overflow-hidden">
              {modes.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setMode(m.key)}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    mode === m.key
                      ? "bg-foreground text-background"
                      : "bg-card text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
            {/* range toggle */}
            <div className="inline-flex border border-border rounded-full overflow-hidden">
              {ranges.map((r) => (
                <button
                  key={r}
                  onClick={() => handleRange(r)}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    range === r
                      ? "bg-foreground text-background"
                      : "bg-card text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {r.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
          {kpis.map((k, i) => (
            <AnimatedKPI
              key={k.label}
              label={k.label}
              value={k.value}
              positive={k.positive}
              index={i}
            />
          ))}
        </div>

        {/* Chart */}
        <div className="border border-border rounded-2xl bg-card p-2 sm:p-3 relative" style={{ height: "clamp(240px, 50vw, 380px)" }}>
          {error ? (
            <div className="absolute inset-0 grid place-items-center text-muted-foreground text-sm">
              ⚠️ {error}
            </div>
          ) : !chartData.length ? (
            <div className="absolute inset-0 grid place-items-center text-muted-foreground text-sm">
              Loading…
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="hsl(199 89% 48%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 92%)" />
                <XAxis
                  dataKey="time"
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  tickFormatter={(v) => format(new Date(v), "MM/dd")}
                  tick={{ fontSize: 11 }}
                  stroke="hsl(215 16% 47%)"
                  interval="preserveStartEnd"
                />
                <YAxis
                  tickFormatter={(v: number) =>
                    mode === "return" ? `${v.toFixed(1)}%` : v.toLocaleString()
                  }
                  tick={{ fontSize: 11 }}
                  stroke="hsl(215 16% 47%)"
                  width={50}
                />
                <Tooltip
                  labelFormatter={(v) => format(new Date(v as number), "yyyy-MM-dd HH:mm")}
                  formatter={(v: number) =>
                    mode === "return"
                      ? [`${v.toFixed(2)}%`, "Return"]
                      : [v.toLocaleString(), "Equity"]
                  }
                  contentStyle={{
                    background: "hsl(0 0% 100%)",
                    border: "1px solid hsl(214 20% 92%)",
                    borderRadius: 12,
                    fontSize: 13,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(199 89% 48%)"
                  strokeWidth={2}
                  fill="url(#perfGrad)"
                  dot={false}
                  activeDot={{ r: 4, fill: "hsl(199 89% 48%)" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-2">
          * Data updates may be delayed. The displayed results are for reference only.
        </p>
      </div>
    </section>
  );
};

export default PerformanceCurve;
