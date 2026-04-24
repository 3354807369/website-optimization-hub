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
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl border px-5 py-4 overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_45px_-15px_hsl(199_89%_30%/0.55)]"
                style={{
                  borderColor: "hsl(0 0% 100% / 0.7)",
                  background:
                    "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(210 40% 99%) 60%, hsl(199 89% 97%) 100%)",
                  boxShadow:
                    "0 12px 32px -14px hsl(199 89% 30% / 0.45), inset 0 1px 0 0 hsl(0 0% 100% / 0.9)",
                }}
              >
                {/* corner glow */}
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-60 pointer-events-none blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(199 89% 70% / 0.35), transparent 70%)",
                  }}
                />

                {/* shimmer sweep on hover */}
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 35%, hsl(199 89% 80% / 0.25) 50%, transparent 65%)",
                  }}
                />

                {/* left accent bar */}
                <motion.div
                  className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, hsl(199 89% 48%), hsl(217 91% 60%))",
                  }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                />

                <div className="relative flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono text-foreground/35 tracking-widest">
                    0{i + 1}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex items-center justify-center w-8 h-8 rounded-lg relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(199 89% 48% / 0.18), hsl(217 91% 60% / 0.12))",
                      border: "1px solid hsl(199 89% 48% / 0.25)",
                      boxShadow: "inset 0 1px 0 0 hsl(0 0% 100% / 0.6)",
                    }}
                  >
                    <Icon size={15} className="text-primary relative z-10" strokeWidth={2.2} />
                  </motion.div>
                  <span className="text-[13px] font-bold tracking-[0.08em] uppercase text-foreground">
                    {layer.label}
                  </span>
                  <motion.span
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ background: "hsl(142 71% 45%)", boxShadow: "0 0 8px hsl(142 71% 45%)" }}
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
                  />
                </div>

                <div className="relative flex flex-wrap gap-1.5 pl-10">
                  {layer.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.12 + 0.2 + j * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -2 }}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-lg cursor-default transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-[0_6px_14px_-4px_hsl(199_89%_48%/0.45)] hover:bg-gradient-to-br hover:from-[hsl(199_89%_48%)] hover:to-[hsl(217_91%_60%)]"
                      style={{
                        color: "hsl(199 89% 32%)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "hsl(199 89% 48% / 0.22)",
                        background:
                          "linear-gradient(135deg, hsl(199 89% 96%) 0%, hsl(217 91% 98%) 100%)",
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
