import { motion } from "framer-motion";
import quantInfra from "@/assets/quant-infra.jpg";

const bullets = [
  {
    title: "Multi-market data ingestion",
    desc: "Unified real-time & historical feeds across venues.",
  },
  {
    title: "Strategy research & backtesting",
    desc: "Reproducible experiments and scenario replay.",
  },
  {
    title: "Risk-first execution layer",
    desc: "Position sizing, drawdown limits, and guardrails.",
  },
  {
    title: "Observable live trading",
    desc: "Monitoring, logs, and performance attribution.",
  },
];

const IntegrationsShowcase = () => {
  return (
    <section className="bg-foreground text-primary-foreground py-[72px] overflow-hidden">
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid place-items-center"
          >
            <img
              src={quantInfra}
              alt="StarLoop quant infrastructure diagram"
              className="w-full max-w-[560px] rounded-2xl"
            />
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-display text-primary-foreground mb-3" style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              A Modular Quant Trading Infrastructure
            </h2>
            <p className="text-primary-foreground/85 leading-relaxed text-[15px] max-w-[60ch] mb-5">
              Designed for research, risk control, execution, and real-time monitoring — all in one system.
            </p>

            <ul className="list-none m-0 p-0 grid gap-3.5">
              {bullets.map((b) => (
                <li key={b.title} className="grid grid-cols-[14px_1fr] gap-3 items-start">
                  <span className="text-primary-foreground/90 mt-1 font-black">•</span>
                  <div>
                    <b className="text-primary-foreground">{b.title}</b>
                    <div className="text-primary-foreground/75 text-[13px] leading-relaxed mt-1">{b.desc}</div>
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
