import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDev from "@/assets/service-dev.jpg";

const services = [
  { title: "Quant Trading Automation", desc: "Non-custodial, exchange-agnostic bots with modular strategies (momentum/CTA, market making, arbitrage). Risk-first execution with drawdown limits, position sizing, and circuit breakers.", img: serviceAi },
  { title: "Website & Landing Pages", desc: "Performance-first sites and launch pages built with Nuxt/Vue. Clean design, SEO, analytics, and continuous iteration to convert visitors into users.", img: serviceWeb },
  { title: "Blockchain & Web3", desc: "Smart contracts, wallet integrations, on-chain indexing, dashboards, and data services for crypto-native products.", img: serviceDev },
];

const whyPoints = [
  { title: "Risk-First by Design", body: "We prioritize capital protection with guardrails at every layer." },
  { title: "Reliability Over Novelty", body: "Deterministic execution, reproducible backtests, observable systems." },
  { title: "Measurable Impact", body: "Ship in small increments, measure outcomes, iterate quickly." },
  { title: "Open & Modular", body: "Strategy SDKs, clear interfaces, versioned configs, auditable logs." },
  { title: "Transparent Collaboration", body: "We work as an extension of your team and share what we learn." },
  { title: "Non-custodial by Default", body: "Your funds stay on your exchange; we never take custody." },
];

const stats = [
  { value: "3+", label: "Integrated Exchanges" },
  { value: "<80 ms", label: "Median Gateway Latency" },
  { value: "20+", label: "Strategy Modules" },
  { value: "99.9%", label: "Service Uptime Target" },
  { value: "0", label: "Custody of Funds" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const About = () => {
  return (
    <main className="bg-background text-foreground">
      <SEO title="About Us" description="Learn about StarLoop — engineering reliable trading automation, modern websites, and blockchain products." path="/about" />
      {/* HERO */}
      <section className="py-[72px] text-center">
        <div className="section-wrap">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold mb-2.5"
            style={{ fontSize: "clamp(2.125rem, 6vw, 3rem)" }}
          >
            About StarLoop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-muted-foreground max-w-[70ch] mx-auto"
          >
            Engineering reliable trading automation for digital assets — and building fast, modern web and blockchain products.
          </motion.p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-12">
        <div className="section-wrap">
          <h2 className="section-title">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="brand-card overflow-hidden group"
              >
                <div className="aspect-video bg-secondary rounded-t-2xl overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1.5">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STARLOOP */}
      <section className="py-8">
        <div className="section-wrap">
          <h2 className="section-title">Why StarLoop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group border border-border rounded-xl p-4 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="w-8 h-1 rounded-full bg-primary/50 mb-3 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                <h3 className="font-display text-lg font-bold mb-1.5">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="py-6">
        <div className="section-wrap">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                className="text-center p-4 border border-border rounded-xl bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <span className="block text-xl font-extrabold tracking-wide">{s.value}</span>
                <span className="block mt-1 text-muted-foreground text-sm">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center">
        <div className="section-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="font-display font-bold mb-2"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.25rem)" }}
          >
            Work with StarLoop
          </motion.h2>
          <p className="text-muted-foreground max-w-[60ch] mx-auto mb-4">
            Tell us about your use case — trading automation, web experiences, or blockchain infrastructure.
          </p>
          <Link to="/contact" className="brand-btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  );
};

export default About;
