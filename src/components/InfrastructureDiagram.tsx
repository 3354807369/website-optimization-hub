import { motion } from "framer-motion";

const layers = [
  {
    label: "Data Layer",
    items: ["Market Feeds", "Historical DB", "On-chain Data"],
    color: "hsl(var(--primary))",
  },
  {
    label: "Strategy Engine",
    items: ["Factor Models", "CTA / Trend", "Arbitrage"],
    color: "hsl(var(--accent-foreground))",
  },
  {
    label: "Risk & Execution",
    items: ["Position Sizing", "Stop-Loss", "Smart Routing"],
    color: "hsl(199 89% 48%)",
  },
  {
    label: "Monitoring",
    items: ["PnL Dashboard", "Alerts", "Logs"],
    color: "hsl(172 66% 50%)",
  },
];

const InfrastructureDiagram = () => (
  <div className="w-full max-w-[520px] mx-auto">
    <div className="flex flex-col gap-2">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <div
            className="rounded-xl border px-4 py-3"
            style={{
              borderColor: `${layer.color}`,
              background: `${layer.color}10`,
            }}
          >
            <div
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: layer.color }}
            >
              {layer.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="text-[13px] px-2.5 py-1 rounded-md text-primary-foreground/90"
                  style={{ background: `${layer.color}25` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Connector arrow */}
          {i < layers.length - 1 && (
            <div className="flex justify-center py-0.5">
              <svg width="2" height="12" className="opacity-40">
                <line x1="1" y1="0" x2="1" y2="12" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

export default InfrastructureDiagram;
