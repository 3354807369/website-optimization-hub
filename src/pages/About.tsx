import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDev from "@/assets/service-dev.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const About = () => {
  const { t } = useLang();

  const services = [
    { title: t("Quant Trading Automation", "量化交易自动化"), desc: t("Non-custodial, exchange-agnostic bots with modular strategies.", "非托管、跨交易所的模块化策略机器人。"), img: serviceAi, tag: "Trading" },
    { title: t("Website & Landing Pages", "网站与落地页"), desc: t("Performance-first sites built with modern frameworks. SEO, analytics, continuous iteration.", "性能优先的现代框架网站。SEO、分析、持续迭代。"), img: serviceWeb, tag: "Web" },
    { title: t("Blockchain & Web3", "区块链与 Web3"), desc: t("Smart contracts, wallet integrations, on-chain indexing and dashboards.", "智能合约、钱包集成、链上索引和仪表板。"), img: serviceDev, tag: "Blockchain" },
  ];

  const whyPoints = [
    { title: t("Risk-First by Design", "风控优先设计"), body: t("We prioritize capital protection with guardrails at every layer.", "我们在每一层都优先保护资本。"), icon: "🛡️" },
    { title: t("Reliability Over Novelty", "可靠性优于新颖性"), body: t("Deterministic execution, reproducible backtests, observable systems.", "确定性执行、可复现回测、可观测系统。"), icon: "⚙️" },
    { title: t("Measurable Impact", "可衡量的影响"), body: t("Ship in small increments, measure outcomes, iterate quickly.", "小步迭代、衡量结果、快速优化。"), icon: "📊" },
    { title: t("Open & Modular", "开放与模块化"), body: t("Strategy SDKs, clear interfaces, versioned configs, auditable logs.", "策略 SDK、清晰接口、版本化配置、可审计日志。"), icon: "🧩" },
    { title: t("Transparent Collaboration", "透明协作"), body: t("We work as an extension of your team and share what we learn.", "我们作为您团队的延伸，分享我们的发现。"), icon: "🤝" },
    { title: t("Non-custodial by Default", "默认非托管"), body: t("Your funds stay on your exchange; we never take custody.", "您的资金留在交易所；我们从不托管。"), icon: "🔒" },
  ];

  const stats = [
    { value: "3+", label: t("Integrated Exchanges", "已对接交易所") },
    { value: "<80ms", label: t("Gateway Latency", "网关延迟") },
    { value: "20+", label: t("Strategy Modules", "策略模块") },
    { value: "99.9%", label: t("Uptime Target", "正常运行目标") },
    { value: "$25,000", label: t("Running Capital", "运行资金") },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO title={t("About Us", "关于我们")} description={t("Learn about StarLoop — engineering reliable trading automation.", "了解 StarLoop — 构建可靠的交易自动化。")} path="/about" />

      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4">
            {t("About Us", "关于我们")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="font-display font-bold text-primary-foreground mb-4" style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {t("Engineering reliable", "构建可靠的")}<br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">{t("trading automation", "交易自动化")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease }} className="text-primary-foreground/70 max-w-[60ch] text-lg">
            {t("And building fast, modern web and blockchain products for the next generation.", "同时构建快速、现代的网站和区块链产品。")}
          </motion.p>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">{t("Our Expertise", "专业领域")}</p>
          <h2 className="font-display text-foreground mb-10" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>{t("What We Do", "我们做什么")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.article key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12, ease }} className="group rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/25" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="aspect-[16/10] bg-secondary overflow-hidden relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold border border-border">{s.tag}</span>
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

      <section className="py-20 bg-background">
        <div className="section-wrap">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">{t("Our Values", "我们的价值观")}</p>
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>{t("Why StarLoop", "为什么选择 StarLoop")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease }} className="group relative p-6 border border-border rounded-2xl bg-card transition-all duration-300 hover:border-primary/25 hover:shadow-lg" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-display text-lg font-bold mb-1.5">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground text-primary-foreground">
        <div className="section-wrap">
          <h2 className="font-display text-center text-primary-foreground mb-10" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.02em" }}>{t("By the Numbers", "数据说话")}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07, ease }} className="text-center p-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 transition-all duration-300 hover:border-primary-foreground/20">
                <span className="block text-2xl font-extrabold tracking-tight font-display">{s.value}</span>
                <span className="block mt-1.5 text-primary-foreground/60 text-xs uppercase tracking-wider font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="font-display font-bold mb-3" style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            {t("Ready to work together?", "准备好合作了吗？")}
          </motion.h2>
          <p className="text-muted-foreground max-w-[55ch] mx-auto mb-6 text-lg">{t("Tell us about your use case — trading automation, web experiences, or blockchain infrastructure.", "告诉我们您的需求 — 交易自动化、网站体验或区块链基础设施。")}</p>
          <Link to="/contact" className="brand-btn-primary text-base h-12 px-8">{t("Contact Us →", "联系我们 →")}</Link>
        </div>
      </section>
    </main>
  );
};

export default About;
