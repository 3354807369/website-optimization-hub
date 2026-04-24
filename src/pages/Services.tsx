import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";
import serviceQuant from "@/assets/service-quant.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBlockchain from "@/assets/service-blockchain.jpg";

const tech = ["Python", "Node.js", "Nuxt/Vue", "Tailwind", "Postgres", "Redis", "Kafka", "ClickHouse", "Docker", "Kubernetes", "AWS/GCP", "Binance", "OKX", "Bybit"];
const ease = [0.16, 1, 0.3, 1] as const;

const Services = () => {
  const { t } = useLang();

  const faqs = [
    { q: t("Do you take custody of funds?", "你们会托管资金吗？"), a: t("No. StarLoop is non-custodial by default. Bots use your exchange API keys with least-privilege.", "不会。StarLoop 默认非托管。机器人使用您的交易所 API 密钥，最小权限。") },
    { q: t("Can you customize strategies?", "可以定制策略吗？"), a: t("Yes. We provide modular building blocks and can implement your logic on top.", "可以。我们提供模块化组件，并可以在此基础上实现您的逻辑。") },
    { q: t("How do you validate performance?", "如何验证绩效？"), a: t("Reproducible backtests with versioned configs, dry-runs, and observable real-time metrics.", "版本化配置的可复现回测、模拟运行和可观测的实时指标。") },
    { q: t("What does a typical timeline look like?", "典型的时间线是怎样的？"), a: t("A prototype sprint takes 2–3 weeks; production builds range from 4–8+ weeks.", "原型冲刺需要 2-3 周；生产构建需要 4-8+ 周。") },
    { q: t("How is pricing structured?", "定价结构是怎样的？"), a: t("We scope by outcome and complexity. Prototype sprints are fixed; production builds are quoted after discovery.", "我们按成果和复杂度定价。原型冲刺固定价格；生产构建在需求调研后报价。") },
  ];

  const catalog = [
    { id: "quant", title: t("Quant Trading Automation", "量化交易自动化"), img: serviceQuant, tag: "Trading", bullets: [t("Non-custodial bots across Binance / OKX / Bybit", "跨 Binance / OKX / Bybit 的非托管机器人"), t("Modular strategies: momentum/CTA, market making, arbitrage", "模块化策略：动量/CTA、做市、套利"), t("Risk controls: drawdown limits, stop-losses, position sizing", "风控:回撤限制、止损、仓位管理"), t("Reproducible backtests, versioned configs", "可复现回测、版本化配置")] },
    { id: "ai", title: t("AI Agents & Automation", "AI 智能代理与自动化"), img: serviceAi, tag: "AI", bullets: [t("Custom AI agents for support, sales, and internal ops", "定制客服、销售、内部运营 AI 代理"), t("LLM-powered assistants & workflow automation", "大模型驱动的助手与流程自动化"), t("Knowledge base integration & RAG pipelines", "知识库集成与 RAG 管道"), t("Observable, governed, and on-brand", "可观测、可治理、契合品牌")] },
    { id: "web", title: t("Website & Landing Pages", "网站与落地页"), img: serviceWeb, tag: "Web", bullets: [t("Modern frontends with clean, accessible design", "现代前端，简洁可访问的设计"), t("Performance, SEO, analytics, A/B testing", "性能、SEO、分析、A/B 测试"), t("Component libraries, CMS integration, CI/CD", "组件库、CMS 集成、CI/CD"), t("Fast iteration to convert visitors", "快速迭代以转化访客")] },
    { id: "blockchain", title: t("Blockchain & Web3", "区块链与 Web3"), img: serviceBlockchain, tag: "Web3", bullets: [t("Smart contracts & wallet integrations", "智能合约与钱包集成"), t("On-chain indexing, data pipelines, dashboards", "链上索引、数据管道、仪表板"), t("Custody/workflow integrations", "托管/工作流集成"), t("Observability & incident response", "可观测性与事件响应")] },
  ];

  const models = [
    { title: t("Prototype Sprint", "原型冲刺"), time: t("2–3 weeks", "2-3 周"), icon: "🚀", items: [t("Discovery & solution outline", "需求发现与方案大纲"), t("Clickable or code prototype", "可点击或代码原型"), t("Backtest or demo environment", "回测或演示环境"), t("Roadmap & estimate", "路线图与估算")] },
    { title: t("Production Build", "生产构建"), time: t("4–8+ weeks", "4-8+ 周"), icon: "🏗️", items: [t("Full implementation & reviews", "完整实现与审查"), t("Risk controls & monitoring", "风控与监控"), t("Documentation & training", "文档与培训"), t("Launch readiness checklist", "上线准备清单")] },
    { title: t("Ongoing Success", "持续成功"), time: t("Monthly", "按月"), icon: "📈", items: [t("Uptime & performance watch", "正常运行与性能监控"), t("Strategy iterations", "策略迭代"), t("Security updates", "安全更新"), t("Priority support", "优先支持")] },
  ];

  const steps = [
    { b: t("Discover", "发现"), s: t("clarify goals, risks, constraints", "明确目标、风险、约束"), num: "01" },
    { b: t("Plan", "规划"), s: t("architecture, milestones, validation", "架构、里程碑、验证"), num: "02" },
    { b: t("Build", "构建"), s: t("modular, testable, observable", "模块化、可测试、可观测"), num: "03" },
    { b: t("Validate", "验证"), s: t("backtests, dry-runs, security reviews", "回测、模拟运行、安全审查"), num: "04" },
    { b: t("Launch", "上线"), s: t("monitoring, alerts, improvements", "监控、告警、优化"), num: "05" },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO title={t("Services", "服务")} description={t("Quant trading automation, website development, and blockchain engineering by StarLoop.", "StarLoop 提供量化交易自动化、网站开发和区块链工程服务。")} path="/services" />

      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4">{t("Services", "服务")}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="font-display font-bold text-primary-foreground mb-4" style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {t("Built for performance,", "为性能而生，")}<br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">{t("designed for scale", "为规模而设计")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease }} className="text-primary-foreground/70 max-w-[60ch] text-lg">
            {t("We engineer reliable trading automation — and build fast, modern web and blockchain products.", "我们构建可靠的交易自动化 — 以及快速、现代的网站和区块链产品。")}
          </motion.p>
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">{t("Our Offerings", "我们的产品")}</p>
          <h2 className="font-display text-foreground mb-10" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>{t("What We Offer", "我们提供什么")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((c, i) => {
              const href = c.id === "quant" ? "/services/quant-trading" : undefined;
              const Inner = (
                <>
                  <div className="aspect-[16/10] bg-secondary overflow-hidden relative">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold border border-border">{c.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold mb-3">{c.title}</h3>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      {c.bullets.map((b) => (<li key={b} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />{b}</li>))}
                    </ul>
                    {href && (
                      <span className="inline-flex items-center gap-1.5 mt-4 text-foreground font-semibold text-sm group-hover:text-primary transition-colors">
                        {t("Learn more", "了解更多")}
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                      </span>
                    )}
                  </div>
                </>
              );
              return (
                <motion.article key={c.id} id={c.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12, ease }} className="group rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/25" style={{ boxShadow: "var(--shadow-card)" }}>
                  {href ? <Link to={href} className="block no-underline text-inherit">{Inner}</Link> : Inner}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 bg-background">
        <div className="section-wrap">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">{t("Flexible Plans", "灵活方案")}</p>
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>{t("Engagement Models", "合作模式")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <motion.article key={m.title} initial={{ opacity: 0, y: 20, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease }} className="group relative p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/25 hover:shadow-lg" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="text-2xl mb-3">{m.icon}</div>
                <h3 className="font-display text-xl font-bold">{m.title}</h3>
                <p className="text-primary text-sm font-semibold mb-4">{m.time}</p>
                <ul className="brand-checklist text-sm">{m.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="section-wrap">
          <h2 className="font-display text-center text-primary-foreground mb-12" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.02em" }}>{t("How We Work", "我们如何工作")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((st, i) => (
              <motion.div key={st.b} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08, ease }} className="p-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 transition-all duration-300 hover:border-primary-foreground/20">
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
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">{t("What You Get", "您将获得")}</p>
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>{t("Deliverables & Guarantees", "交付物与保障")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-display font-bold text-lg mb-4">{t("Deliverables", "交付物")}</h3>
              <ul className="brand-checklist text-sm">
                <li>{t("Versioned code & configuration", "版本化代码与配置")}</li>
                <li>{t("Backtesting reports and runbooks", "回测报告和运行手册")}</li>
                <li>{t("Deployed infra & monitoring dashboard", "已部署的基础设施与监控仪表板")}</li>
                <li>{t("Knowledge transfer & training session", "知识转移与培训")}</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease }} className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-display font-bold text-lg mb-4">{t("Guarantees", "保障")}</h3>
              <ul className="brand-checklist text-sm">
                <li>{t("Least-privilege, non-custodial setup", "最小权限、非托管设置")}</li>
                <li>{t("Encrypted secrets & access audit", "加密密钥与访问审计")}</li>
                <li>{t("Incident response guidelines", "事件响应指南")}</li>
                <li>{t("Post-launch support window", "上线后支持窗口")}</li>
              </ul>
            </motion.div>
          </div>
          <p className="mt-5 text-muted-foreground text-xs text-center">{t("StarLoop provides software and engineering services only. Nothing here is investment advice.", "StarLoop 仅提供软件和工程服务。本站内容不构成投资建议。")}</p>
        </div>
      </section>

      {/* TECH */}
      <section className="py-16 bg-background">
        <div className="section-wrap">
          <h2 className="font-display text-foreground text-center mb-8" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.02em" }}>{t("Tech Stack & Integrations", "技术栈与集成")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tech.map((te, i) => (
              <motion.span key={te} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03 }} className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium transition-all duration-200 hover:border-primary/40 hover:bg-primary/5" style={{ boxShadow: "var(--shadow-sm)" }}>
                {te}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">{t("Common Questions", "常见问题")}</p>
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", letterSpacing: "-0.02em" }}>{t("FAQs", "常见问答")}</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            {faqs.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease }} className="flex flex-col gap-2.5">
                <div className="flex justify-start"><div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-md bg-card border border-border" style={{ boxShadow: "var(--shadow-sm)" }}><p className="font-bold text-sm">{item.q}</p></div></div>
                <div className="flex justify-end"><div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-md bg-primary/5 border border-primary/15"><p className="text-sm text-foreground leading-relaxed">{item.a}</p></div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center relative overflow-hidden bg-background">
        <div className="absolute -top-24 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="font-display font-bold mb-3" style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            {t("Ready to get started?", "准备好开始了吗？")}
          </motion.h2>
          <p className="text-muted-foreground max-w-[55ch] mx-auto mb-6 text-lg">{t("Tell us about your use case — trading automation, web experiences, or blockchain infrastructure.", "告诉我们您的需求 — 交易自动化、网站体验或区块链基础设施。")}</p>
          <Link to="/contact" className="brand-btn-primary text-base h-12 px-8">{t("Contact Us →", "联系我们 →")}</Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
