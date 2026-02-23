import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDev from "@/assets/service-dev.jpg";

const services = [
  { title: "Quant Trading Automation", desc: "Non-custodial, exchange-agnostic bots with modular strategies (momentum/CTA, market making, arbitrage). Risk-first execution with drawdown limits, position sizing, and circuit breakers.", img: serviceAi, tag: "Trading" },
  { title: "Website & Landing Pages", desc: "Performance-first sites and launch pages built with Nuxt/Vue. Clean design, SEO, analytics, and continuous iteration to convert visitors into users.", img: serviceWeb, tag: "Web" },
  { title: "Blockchain & Web3", desc: "Smart contracts, wallet integrations, on-chain indexing, dashboards, and data services for crypto-native products.", img: serviceDev, tag: "Blockchain" },
];

const whyPoints = [
  { title: "Risk-First by Design", body: "We prioritize capital protection with guardrails at every layer.", icon: "🛡️" },
  { title: "Reliability Over Novelty", body: "Deterministic execution, reproducible backtests, observable systems.", icon: "⚙️" },
  { title: "Measurable Impact", body: "Ship in small increments, measure outcomes, iterate quickly.", icon: "📊" },
  { title: "Open & Modular", body: "Strategy SDKs, clear interfaces, versioned configs, auditable logs.", icon: "🧩" },
  { title: "Transparent Collaboration", body: "We work as an extension of your team and share what we learn.", icon: "🤝" },
  { title: "Non-custodial by Default", body: "Your funds stay on your exchange; we never take custody.", icon: "🔒" },
];

const stats = [
  { value: "3+", label: "Integrated Exchanges" },
  { value: "<80ms", label: "Gateway Latency" },
  { value: "20+", label: "Strategy Modules" },
  { value: "99.9%", label: "Uptime Target" },
  { value: "0", label: "Custody of Funds" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const About = () => {
  return (
    <main className="bg-background text-foreground">
      <SEO title="About Us" description="Learn about StarLoop — engineering reliable trading automation, modern websites, and blockchain products." path="/about" />

      {/* HERO BANNER */}
      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Gradient orb */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />

        <div className="section-wrap relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold text-primary-foreground mb-4"
            style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Engineering reliable
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              trading automation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-primary-foreground/70 max-w-[60ch] text-lg"
          >
            And building fast, modern web and blockchain products for the next generation.
          </motion.p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">Our Expertise</p>
          <h2 className="font-display text-foreground mb-10" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/25"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary overflow-hidden relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold border border-border">
                    {s.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STARLOOP */}
      <section className="py-20 bg-background">
        <div className="section-wrap">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">Our Values</p>
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Why StarLoop
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group relative p-6 border border-border rounded-2xl bg-card transition-all duration-300 hover:border-primary/25 hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-display text-lg font-bold mb-1.5">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="py-16 bg-foreground text-primary-foreground">
        <div className="section-wrap">
          <h2 className="font-display text-center text-primary-foreground mb-10" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.02em" }}>
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                className="text-center p-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 transition-all duration-300 hover:border-primary-foreground/20"
              >
                <span className="block text-2xl font-extrabold tracking-tight font-display">{s.value}</span>
                <span className="block mt-1.5 text-primary-foreground/60 text-xs uppercase tracking-wider font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="font-display font-bold mb-3"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Ready to work together?
          </motion.h2>
          <p className="text-muted-foreground max-w-[55ch] mx-auto mb-6 text-lg">
            Tell us about your use case — trading automation, web experiences, or blockchain infrastructure.
          </p>
          <Link to="/contact" className="brand-btn-primary text-base h-12 px-8">Contact Us →</Link>
        </div>
      </section>
    </main>
  );
};

export default About;
