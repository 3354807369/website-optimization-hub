import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDev from "@/assets/service-dev.jpg";

const tech = [
  "Python", "Node.js", "Nuxt/Vue", "Tailwind", "Postgres", "Redis", "Kafka",
  "ClickHouse", "Docker", "Kubernetes", "AWS/GCP", "Binance", "OKX", "Bybit",
];

const faqs = [
  { q: "Do you take custody of funds?", a: "No. StarLoop is non-custodial by default. Bots use your exchange API keys with least-privilege (no withdrawals)." },
  { q: "Can you customize strategies?", a: "Yes. We provide modular factors/CTA, market-making and arbitrage building blocks, and we can implement your logic on top." },
  { q: "How do you validate performance?", a: "Reproducible backtests with versioned configs, dry-runs on paper/sandbox, and observable real-time metrics after launch." },
  { q: "What does a typical timeline look like?", a: "A prototype sprint usually takes 2–3 weeks; a production build ranges from 4–8+ weeks depending on scope." },
  { q: "How is pricing structured?", a: "We scope by outcome and complexity. Prototype sprints are fixed; production builds and ongoing success are quoted after discovery." },
];

const catalog = [
  { id: "quant", title: "Quant Trading Automation", img: serviceAi, tag: "Trading", bullets: ["Non-custodial bots across Binance / OKX / Bybit", "Modular strategies: momentum/CTA, market making, arbitrage", "Risk controls: drawdown limits, tiered stop-losses, position sizing", "Reproducible backtests, versioned configs, auditable logs"] },
  { id: "web", title: "Website & Landing Pages", img: serviceWeb, tag: "Web", bullets: ["Nuxt/Vue frontends with clean, accessible design", "Performance, SEO, analytics, A/B testing", "Component libraries, CMS integration, CI/CD", "Fast iteration to convert visitors into users"] },
  { id: "blockchain", title: "Blockchain & Web3", img: serviceDev, tag: "Dev", bullets: ["Smart contracts & wallet integrations", "On-chain indexing, data pipelines, dashboards", "Custody/workflow integrations, compliance hooks", "Observability & incident response setup"] },
];

const models = [
  { title: "Prototype Sprint", time: "2–3 weeks", icon: "🚀", items: ["Discovery & solution outline", "Clickable or code prototype", "Backtest or demo environment", "Roadmap & estimate"] },
  { title: "Production Build", time: "4–8+ weeks", icon: "🏗️", items: ["Full implementation & reviews", "Risk controls & monitoring", "Documentation & training", "Launch readiness checklist"] },
  { title: "Ongoing Success", time: "Monthly", icon: "📈", items: ["Uptime & performance watch", "Strategy iterations & experiments", "Security updates & rotation", "Priority support"] },
];

const steps = [
  { b: "Discover", s: "clarify goals, risks, constraints", num: "01" },
  { b: "Plan", s: "architecture, milestones, validation", num: "02" },
  { b: "Build", s: "modular, testable, observable", num: "03" },
  { b: "Validate", s: "backtests, dry-runs, security reviews", num: "04" },
  { b: "Launch", s: "monitoring, alerts, improvements", num: "05" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const Services = () => {
  return (
    <main className="bg-background text-foreground">
      <SEO title="Services" description="Quant trading automation, website development, and blockchain engineering services by StarLoop." path="/services" />

      {/* HERO BANNER */}
      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />

        <div className="section-wrap relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold text-primary-foreground mb-4"
            style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Built for performance,
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              designed for scale
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-primary-foreground/70 max-w-[60ch] text-lg"
          >
            We engineer reliable trading automation for digital assets — and build fast, modern web and blockchain products.
          </motion.p>
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">Our Offerings</p>
          <h2 className="font-display text-foreground mb-10" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((c, i) => (
              <motion.article
                key={c.id}
                id={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/25"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[16/10] bg-secondary overflow-hidden relative">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold border border-border">
                    {c.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold mb-3">{c.title}</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 bg-background">
        <div className="section-wrap">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">Flexible Plans</p>
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Engagement Models
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <motion.article
                key={m.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="group relative p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/25 hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="text-2xl mb-3">{m.icon}</div>
                <h3 className="font-display text-xl font-bold">{m.title}</h3>
                <p className="text-primary text-sm font-semibold mb-4">{m.time}</p>
                <ul className="brand-checklist text-sm">
                  {m.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="section-wrap">
          <h2 className="font-display text-center text-primary-foreground mb-12" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.02em" }}>
            How We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((st, i) => (
              <motion.div
                key={st.b}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
                className="p-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 transition-all duration-300 hover:border-primary-foreground/20"
              >
                <span className="font-display text-xs font-bold text-primary-foreground/40 tracking-wider">{st.num}</span>
                <h3 className="font-display text-lg font-extrabold mt-1">{st.b}</h3>
                <span className="text-primary-foreground/60 text-sm">{st.s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">What You Get</p>
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              Deliverables & Guarantees
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="p-6 rounded-2xl bg-card border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-display font-bold text-lg mb-4">Deliverables</h3>
              <ul className="brand-checklist text-sm">
                <li>Versioned code & configuration</li>
                <li>Backtesting reports and runbooks</li>
                <li>Deployed infra & monitoring dashboard</li>
                <li>Knowledge transfer & training session</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="p-6 rounded-2xl bg-card border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-display font-bold text-lg mb-4">Guarantees</h3>
              <ul className="brand-checklist text-sm">
                <li>Least-privilege, non-custodial setup</li>
                <li>Encrypted secrets & access audit</li>
                <li>Incident response guidelines</li>
                <li>Post-launch support window</li>
              </ul>
            </motion.div>
          </div>
          <p className="mt-5 text-muted-foreground text-xs text-center">
            StarLoop provides software and engineering services only. Nothing here is investment advice.
          </p>
        </div>
      </section>

      {/* TECH */}
      <section className="py-16 bg-background">
        <div className="section-wrap">
          <h2 className="font-display text-foreground text-center mb-8" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.02em" }}>
            Tech Stack & Integrations
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">Common Questions</p>
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>
              FAQs
            </h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="flex flex-col gap-2.5"
              >
                <div className="flex justify-start">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-md bg-card border border-border" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <p className="font-bold text-sm">{item.q}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-md bg-primary/5 border border-primary/15">
                    <p className="text-sm text-foreground leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center relative overflow-hidden bg-background">
        <div className="absolute -top-24 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="font-display font-bold mb-3"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Ready to get started?
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

export default Services;
