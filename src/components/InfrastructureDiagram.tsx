import { motion } from "framer-motion";

const layers = [
  {
    label: "Data Layer",
    items: ["Market Feeds", "Historical DB", "On-chain Data"],
    icon: "◈",
  },
  {
    label: "Strategy Engine",
    items: ["Factor Models", "CTA / Trend", "Arbitrage"],
    icon: "◇",
  },
  {
    label: "Risk & Execution",
    items: ["Position Sizing", "Stop-Loss", "Smart Routing"],
    icon: "△",
  },
  {
    label: "Monitoring",
    items: ["PnL Dashboard", "Alerts", "Logs"],
    icon: "○",
  },
];

const InfrastructureDiagram = () => (
  <div className="w-full max-w-[520px] mx-auto relative">
    {/* Glow backdrop */}
    <div
      className="absolute -inset-6 rounded-3xl opacity-20 blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 30%, hsl(199 89% 48% / 0.4), transparent 70%)" }}
    />

    <div className="relative flex flex-col gap-0">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
        >
          <div
            className="group relative rounded-xl border backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:border-[hsl(199_89%_48%_/_0.5)]"
            style={{
              borderColor: "hsl(199 89% 48% / 0.15)",
              background: "linear-gradient(135deg, hsl(199 89% 48% / 0.06) 0%, hsl(199 89% 48% / 0.02) 100%)",
            }}
          >
            {/* Layer number indicator */}
            <div className="absolute -left-px top-1/2 -translate-y-1/2 w-[3px] h-8 rounded-full opacity-60 transition-opacity group-hover:opacity-100" style={{ background: "hsl(199 89% 48%)" }} />

            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-xs opacity-50 text-primary-foreground/60 font-mono">0{i + 1}</span>
              <span className="text-[13px] font-semibold tracking-wide uppercase text-primary-foreground/90">
                {layer.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 pl-7">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="text-[12px] font-medium px-3 py-1.5 rounded-lg border transition-colors"
                  style={{
                    color: "hsl(199 89% 70%)",
                    borderColor: "hsl(199 89% 48% / 0.12)",
                    background: "hsl(199 89% 48% / 0.08)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Connector */}
          {i < layers.length - 1 && (
            <div className="flex justify-center py-1">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-px h-3" style={{ background: "linear-gradient(to bottom, hsl(199 89% 48% / 0.3), hsl(199 89% 48% / 0.1))" }} />
                <svg width="8" height="6" viewBox="0 0 8 6" className="opacity-30">
                  <path d="M4 6L0 0h8z" fill="hsl(199 89% 48%)" />
                </svg>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

export default InfrastructureDiagram;
