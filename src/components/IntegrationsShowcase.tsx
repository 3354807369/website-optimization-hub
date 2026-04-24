import { motion } from "framer-motion";
import InfrastructureDiagram from "./InfrastructureDiagram";
import { useLang } from "@/i18n/LanguageContext";

const IntegrationsShowcase = () => {
  const { t } = useLang();

  const bullets = [
    { title: t("Multi-market data ingestion", "多市场数据接入"), desc: t("Unified real-time & historical feeds across venues.", "统一的实时和历史数据源。") },
    { title: t("Strategy research & backtesting", "策略研究与回测"), desc: t("Reproducible experiments and scenario replay.", "可复现的实验和场景回放。") },
    { title: t("Risk-first execution layer", "风控优先执行层"), desc: t("Position sizing, drawdown limits, and guardrails.", "仓位管理、回撤限制和风控保障。") },
    { title: t("Observable live trading", "可观测实盘交易"), desc: t("Monitoring, logs, and performance attribution.", "监控、日志和绩效归因。") },
  ];

  return (
    <section className="bg-foreground text-primary-foreground py-[72px] overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(199 89% 48%), transparent)" }}
      />
      <div className="section-wrap relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid place-items-center">
            <InfrastructureDiagram />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-4">
              {t("Infrastructure", "基础架构")}
            </p>
            <h2 className="font-display font-bold text-primary-foreground mb-3" style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {t("A Modular Quant Trading Infrastructure", "模块化量化交易基础设施")}
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed text-[15px] max-w-[60ch] mb-5">
              {t("Designed for research, risk control, execution, and real-time monitoring — all in one system.", "为研究、风控、执行和实时监控而设计 — 集于一体的系统。")}
            </p>
            <ul className="list-none m-0 p-0 grid gap-3.5">
              {bullets.map((b) => (
                <li key={b.title} className="grid grid-cols-[14px_1fr] gap-3 items-start">
                  <span className="text-sky-300 mt-1 font-black">•</span>
                  <div>
                    <b className="text-primary-foreground">{b.title}</b>
                    <div className="text-primary-foreground/60 text-[13px] leading-relaxed mt-1">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsShowcase;
