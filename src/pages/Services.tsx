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
  { id: "quant", title: "Quant Trading Automation", img: serviceAi, bullets: ["Non-custodial bots across Binance / OKX / Bybit", "Modular strategies: momentum/CTA, market making, arbitrage", "Risk controls: drawdown limits, tiered stop-losses, position sizing", "Reproducible backtests, versioned configs, auditable logs"] },
  { id: "web", title: "Website & Landing Pages", img: serviceWeb, bullets: ["Nuxt/Vue frontends with clean, accessible design", "Performance, SEO, analytics, A/B testing", "Component libraries, CMS integration, CI/CD", "Fast iteration to convert visitors into users"] },
  { id: "blockchain", title: "Blockchain & Web3", img: serviceDev, bullets: ["Smart contracts & wallet integrations", "On-chain indexing, data pipelines, dashboards", "Custody/workflow integrations, compliance hooks", "Observability & incident response setup"] },
];

const models = [
  { title: "Prototype Sprint", time: "2–3 weeks", items: ["Discovery & solution outline", "Clickable or code prototype", "Backtest or demo environment", "Roadmap & estimate"] },
  { title: "Production Build", time: "4–8+ weeks", items: ["Full implementation & reviews", "Risk controls & monitoring", "Documentation & training", "Launch readiness checklist"] },
  { title: "Ongoing Success", time: "Monthly", items: ["Uptime & performance watch", "Strategy iterations & experiments", "Security updates & rotation", "Priority support"] },
];

const steps = [
  { b: "Discover", s: "clarify goals, risks, constraints" },
  { b: "Plan", s: "architecture, milestones, validation" },
  { b: "Build", s: "modular, testable, observable" },
  { b: "Validate", s: "backtests, dry-runs, security reviews" },
  { b: "Launch & Iterate", s: "monitoring, alerts, improvements" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const Services = () => {
  return (
    <main className="bg-background text-foreground">
      <SEO title="Services" description="Quant trading automation, website development, and blockchain engineering services by StarLoop." path="/services" />
      {/* HERO */}
      <section className="py-16 text-center">
        <div className="section-wrap">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold mb-2.5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-muted-foreground max-w-[70ch] mx-auto text-lg"
          >
            We engineer reliable trading automation for digital assets — and build fast, modern web and blockchain products for your business.
          </motion.p>
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-9">
        <div className="section-wrap">
          <h2 className="section-title">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {catalog.map((c, i) => (
              <motion.article
                key={c.id}
                id={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="brand-card overflow-hidden group"
              >
                <div className="aspect-video bg-secondary overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold mb-2">{c.title}</h3>
                  <ul className="text-muted-foreground text-sm pl-4 space-y-1.5">
                    {c.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-7">
        <div className="section-wrap">
          <h2 className="section-title">Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {models.map((m, i) => (
              <motion.article
                key={m.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="brand-card p-4 group transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="w-8 h-1 rounded-full bg-primary/50 mb-3 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                <h3 className="font-display text-lg font-bold">{m.title}</h3>
                <p className="text-muted-foreground text-sm -mt-1 mb-2">{m.time}</p>
                <ul className="brand-checklist text-sm">
                  {m.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-7">
        <div className="section-wrap">
          <h2 className="section-title">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {steps.map((st, i) => (
              <motion.div
                key={st.b}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
                className="border border-border rounded-xl p-3.5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <b className="font-display font-extrabold">{st.b}</b>
                <span className="text-muted-foreground text-sm"> — {st.s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-7">
        <div className="section-wrap">
          <h2 className="section-title">Deliverables & Guarantees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.ul
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="brand-checklist text-sm"
            >
              <li>Versioned code & configuration</li>
              <li>Backtesting reports and runbooks</li>
              <li>Deployed infra & monitoring dashboard</li>
              <li>Knowledge transfer & training session</li>
            </motion.ul>
            <motion.ul
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="brand-checklist text-sm"
            >
              <li>Least-privilege, non-custodial setup</li>
              <li>Encrypted secrets & access audit</li>
              <li>Incident response guidelines</li>
              <li>Post-launch support window</li>
            </motion.ul>
          </div>
          <p className="mt-3 text-muted-foreground text-xs">
            StarLoop provides software and engineering services only. Nothing here is investment advice. Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      {/* TECH */}
      <section className="py-6">
        <div className="section-wrap">
          <h2 className="section-title">Tech Stack & Integrations</h2>
          <div className="flex flex-wrap gap-2.5">
            {tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="brand-pill transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-secondary/50">
        <div className="section-wrap">
          <h2 className="section-title text-center mb-5">FAQs</h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="flex flex-col gap-2"
              >
                <div className="flex justify-start">
                  <div className="max-w-[90%] sm:max-w-[760px] px-3.5 py-3 rounded-2xl border border-border bg-card">
                    <p className="font-bold text-sm">{item.q}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[90%] sm:max-w-[760px] px-3.5 py-3 rounded-2xl border border-border bg-primary/5">
                    <p className="text-sm text-foreground">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
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

export default Services;
