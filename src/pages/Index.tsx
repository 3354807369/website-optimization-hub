import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import IntegrationsShowcase from "@/components/IntegrationsShowcase";
import PerformanceCurve from "@/components/PerformanceCurve";
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
      <SEO path="/" />
      {/* ========== HERO ========== */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background carousel with subtle zoom */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, i) => (
            <motion.img
              key={img}
              src={img}
              alt=""
              animate={{
                opacity: i === current ? 1 : 0,
                scale: i === current ? 1.06 : 1,
              }}
              transition={{ opacity: { duration: 1.2 }, scale: { duration: 6, ease: "linear" } }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: "var(--gradient-hero-overlay)" }} />

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-primary-foreground/90 text-lg md:text-2xl"
            style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}
          >
            Data-driven · Risk control first
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-primary-foreground/90 text-lg md:text-2xl mt-2"
            style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}
          >
            Observable live trading
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 z-[2] flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-primary-foreground/60" />
          </motion.div>
        </motion.div>
      </section>

      <PerformanceCurve />

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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-left group"
              >
                <div className="w-10 h-1 rounded-full bg-primary/60 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
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
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group text-center p-4 border border-border rounded-xl bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
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
