import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import IntegrationsShowcase from "@/components/IntegrationsShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroImages = [hero1, hero2, hero3];

const features = [
  { title: "Multi-Exchange Connectivity", desc: "Stable API channels with a unified asset & portfolio view" },
  { title: "Modular Strategies", desc: "Plug-and-play factors, CTA, market making, and arbitrage" },
  { title: "Risk & Position Control", desc: "Drawdown limits, tiered stop-losses, dynamic position sizing" },
];

const stats = [
  { value: "3+", label: "Integrated Exchanges" },
  { value: "<80 ms", label: "Median Gateway Latency" },
  { value: "20+", label: "Strategy Modules" },
  { value: "99.9%", label: "Service Uptime Target" },
  { value: "0", label: "Custody of Funds" },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <main>
      {/* ========== HERO ========== */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, i) => (
            <img
              key={img}
              src={img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: "var(--gradient-hero-overlay)" }} />

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-[2] text-center px-8 max-w-[1100px]"
        >
          <h1
            className="font-display font-bold text-primary-foreground mb-8"
            style={{
              fontSize: "clamp(2.625rem, 7vw, 5.25rem)",
              lineHeight: 1.15,
              textShadow: "2px 2px 12px rgba(0,0,0,0.6)",
            }}
          >
            Make transactions more rational
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-2xl" style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}>
            Data-driven · Risk control first
          </p>
          <p className="text-primary-foreground/90 text-lg md:text-2xl mt-2" style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}>
            Observable live trading
          </p>
        </motion.div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="py-14 bg-background">
        <div className="section-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-center mb-2"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Trade Smarter with Data-Driven Quant Bots
          </motion.h2>
          <p className="text-center text-muted-foreground text-lg mb-10">
            Multi-exchange connectivity · Risk controls · Backtesting · Real-time monitoring
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-left"
              >
                <h3 className="font-display text-[1.4rem] font-bold text-foreground mb-3 leading-tight">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-10 bg-background">
        <div className="section-wrap">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center p-4 border border-border rounded-xl bg-card"
              >
                <span className="block text-xl font-extrabold tracking-wide text-foreground">{s.value}</span>
                <span className="block mt-1 text-muted-foreground text-sm">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IntegrationsShowcase />
      <ServicesGrid />
    </main>
  );
};

export default Index;
