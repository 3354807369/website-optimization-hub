import { motion } from "framer-motion";
import { Database, Cpu, ShieldCheck, Activity } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const InfrastructureDiagram = () => {
  const { t } = useLang();

  const layers = [
    {
      label: t("Data Layer", "数据层"),
      icon: Database,
      items: [t("Market Feeds", "行情数据"), t("Historical DB", "历史数据库"), t("On-chain Data", "链上数据")],
    },
    {
      label: t("Strategy Engine", "策略引擎"),
      icon: Cpu,
      items: [t("Factor Models", "因子模型"), t("CTA / Trend", "CTA / 趋势"), t("Arbitrage", "套利")],
    },
    {
      label: t("Risk & Execution", "风控与执行"),
      icon: ShieldCheck,
      items: [t("Position Sizing", "仓位管理"), t("Stop-Loss", "止损"), t("Smart Routing", "智能路由")],
    },
    {
      label: t("Monitoring", "监控"),
      icon: Activity,
      items: [t("PnL Dashboard", "盈亏仪表板"), t("Alerts", "告警"), t("Logs", "日志")],
    },
  ];

  return (
    <div className="w-full max-w-[540px] mx-auto relative">
      {/* ambient glow */}
      <div
        className="absolute -inset-10 rounded-[2rem] opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, hsl(199 89% 60% / 0.25), transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(217 91% 60% / 0.2), transparent 60%)",
        }}
      />

      <div className="relative flex flex-col gap-0">
        {layers.map((layer, i) => {
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl border backdrop-blur-md px-5 py-4 overflow-hidden"
                style={{
                  borderColor: "hsl(0 0% 100% / 0.6)",
                  background: "hsl(0 0% 100%)",
                  boxShadow: "0 10px 30px -12px hsl(199 89% 30% / 0.45), inset 0 1px 0 0 hsl(0 0% 100% / 0.9)",
                }}
              >
                {/* shimmer on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 30%, hsl(199 89% 70% / 0.12) 50%, transparent 70%)",
                  }}
                />

                {/* left accent bar */}
                <div
                  className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, hsl(199 89% 48%), hsl(217 91% 60%))",
                  }}
                />

                <div className="relative flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono text-foreground/40 tracking-widest">
                    0{i + 1}
                  </span>
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(199 89% 48% / 0.15), hsl(217 91% 60% / 0.1))",
                      border: "1px solid hsl(199 89% 48% / 0.2)",
                    }}
                  >
                    <Icon size={14} className="text-primary" strokeWidth={2.2} />
                  </div>
                  <span className="text-[13px] font-bold tracking-[0.08em] uppercase text-foreground">
                    {layer.label}
                  </span>
                </div>

                <div className="relative flex flex-wrap gap-1.5 pl-10">
                  {layer.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.12 + 0.2 + j * 0.05 }}
                      whileHover={{ y: -1 }}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-lg cursor-default transition-all"
                      style={{
                        color: "hsl(199 89% 35%)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "hsl(199 89% 48% / 0.2)",
                        background:
                          "linear-gradient(135deg, hsl(199 89% 95%) 0%, hsl(217 91% 97%) 100%)",
                        boxShadow: "0 1px 2px hsl(199 89% 48% / 0.08)",
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {i < layers.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                      className="w-px h-4 origin-top"
                      style={{
                        background:
                          "linear-gradient(to bottom, hsl(199 89% 48% / 0.5), hsl(199 89% 48% / 0.1))",
                      }}
                    />
                    <motion.div
                      animate={{ y: [0, 3, 0], opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="absolute top-0 w-1 h-1 rounded-full"
                      style={{ background: "hsl(199 89% 55%)", boxShadow: "0 0 6px hsl(199 89% 55%)" }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default InfrastructureDiagram;
