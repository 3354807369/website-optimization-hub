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
  {
    title: "Multi-Exchange Connectivity",
    desc: "Stable API channels with a unified asset & portfolio view across venues.",
    icon: "🔗",
  },
  {
    title: "Modular Strategies",
    desc: "Plug-and-play factors, CTA, market making, and arbitrage modules.",
    icon: "🧩",
  },
  {
    title: "Risk & Position Control",
    desc: "Drawdown limits, tiered stop-losses, and dynamic position sizing.",
    icon: "🛡️",
  },
];

const stats = [
  { value: "3+", label: "Integrated Exchanges" },
  { value: "<80ms", label: "Gateway Latency" },
  { value: "20+", label: "Strategy Modules" },
  { value: "99.9%", label: "Uptime Target" },
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
              transition={{
                opacity: { duration: 1.2 },
                scale: { duration: 6, ease: "linear" },
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>

        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[2] text-center px-6 max-w-[1100px]"
        >
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              Systems Online
            </span>
          </motion.div>

          <h1
            className="font-display font-bold text-primary-foreground mb-6"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              textShadow: "2px 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            Make transactions
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              more rational
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 text-primary-foreground/80 text-base md:text-lg"
          >
            {["Data-driven", "Risk control first", "Observable live trading"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Carousel dots */}
        <div className="absolute bottom-12 z-[2] flex items-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 z-[2] flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      <PerformanceCurve />

      {/* ========== FEATURES ========== */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "var(--gradient-section)" }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="section-wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">
              Core Capabilities
            </p>
            <h2
              className="font-display text-foreground"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Trade Smarter with
              <br className="hidden sm:block" />
              <span className="text-primary"> Data-Driven Quant Bots</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/25 hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 leading-tight">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {f.desc}
                </p>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-16 bg-background">
        <div className="section-wrap">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group text-center p-5 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/30"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="block text-2xl font-extrabold tracking-tight text-foreground font-display">
                  {s.value}
                </span>
                <span className="block mt-1.5 text-muted-foreground text-xs uppercase tracking-wider font-medium">
                  {s.label}
                </span>
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
