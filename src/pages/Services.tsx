import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/i18n/LanguageContext";
import serviceQuant from "@/assets/service-quant.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBlockchain from "@/assets/service-blockchain.jpg";

const techGroups = [
  {
    label: { en: "Languages", zh: "编程语言" },
    icon: "{ }",
    items: ["TypeScript", "Python", "Rust", "Solidity", "Go"],
  },
  {
    label: { en: "Frontend & Web", zh: "前端与网站" },
    icon: "</>",
    items: ["React", "Next.js", "Nuxt / Vue", "Tailwind CSS", "Vite"],
  },
  {
    label: { en: "Backend & APIs", zh: "后端与接口" },
    icon: "⚡",
    items: ["Node.js", "FastAPI", "tRPC", "GraphQL", "WebSockets"],
  },
  {
    label: { en: "Data & Infra", zh: "数据与基础设施" },
    icon: "▣",
    items: ["Postgres", "Redis", "Kafka", "ClickHouse", "TimescaleDB"],
  },
  {
    label: { en: "DevOps & Cloud", zh: "DevOps 与云" },
    icon: "☁",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "GitHub Actions"],
  },
  {
    label: { en: "Exchanges & Web3", zh: "交易所与 Web3" },
    icon: "◈",
    items: ["Binance", "OKX", "Bybit", "Ethereum", "Solana"],
  },
];
const ease = [0.16, 1, 0.3, 1] as const;

const Services = () => {
  const { t } = useLang();



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
      <SEO
        title={t("IT Services — Quant, AI, Web & Blockchain Engineering", "IT 服务 — 量化、AI、网站与区块链工程")}
        description={t(
          "Full-stack IT services from StarLoop: quant trading automation, AI agents, modern web development, and blockchain engineering — production-grade, end to end.",
          "StarLoop 提供全栈 IT 服务:量化交易自动化、AI 智能体、现代网站开发、区块链工程 — 端到端生产级交付。"
        )}
        path="/services"
      />

      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4">{t("IT Services", "IT 服务")}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="font-display font-bold text-primary-foreground mb-4" style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {t("End-to-end software,", "端到端软件,")}<br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">{t("engineered to ship", "工程化交付")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease }} className="text-primary-foreground/70 max-w-[62ch] text-lg">
            {t("Four practice areas, one engineering team. From quant trading bots to AI agents, web products, and Web3 infrastructure — production-grade by default.", "四大业务方向、同一支工程团队。从量化交易机器人到 AI 智能体、网站产品与 Web3 基础设施 — 默认生产级。")}
          </motion.p>
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("Our Offerings", "我们的产品")}
            title={t("What We Offer", "我们提供什么")}
            highlight={t("We Offer", "提供什么")}
            description={t("End-to-end engineering across trading, AI, web and Web3 — pick a track or combine them.", "覆盖交易、AI、网站与 Web3 的端到端工程能力 — 单独选用，或自由组合。")}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {catalog.map((c, i) => {
              const href = c.id === "quant" ? "/services/quant-trading" : c.id === "ai" ? "/services/ai-agents" : c.id === "web" ? "/services/web-development" : undefined;
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
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("Flexible Plans", "灵活方案")}
            title={t("Engagement Models", "合作模式")}
            highlight={t("Models", "模式")}
            description={t("Start small, ship fast, and scale with confidence — three ways to work together.", "小步起步、快速交付、稳健扩展 — 三种合作方式任您选择。")}
            align="center"
            className="mb-14"
          />
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

      {/* PROCESS — light, premium, connected timeline */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
        {/* layered backgrounds */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute -top-32 right-1/4 w-[420px] h-[420px] rounded-full opacity-[0.10] blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, hsl(199 89% 55%), transparent 70%)" }} />
        <div className="absolute -bottom-32 left-1/4 w-[420px] h-[420px] rounded-full opacity-[0.08] blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }} />

        <div className="section-wrap relative">
          {/* heading */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span aria-hidden className="h-px w-8 bg-primary/60" />
              <span className="uppercase tracking-[0.22em] text-[11px] font-bold text-primary">{t("Our Process", "工作流程")}</span>
              <span aria-hidden className="h-px w-8 bg-primary/60" />
            </div>
            <h2 className="font-display font-bold text-foreground" style={{ fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              {t("How we", "我们如何")} <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">{t("work", "工作")}</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed max-w-[58ch] mx-auto">
              {t("Five disciplined phases — from discovery to launch — every step versioned, observable, and accountable.", "五个严谨阶段 — 从发现到上线 — 每一步都可版本化、可观测、可追责。")}
            </p>
          </motion.div>

          {/* timeline with connecting line */}
          <div className="relative max-w-6xl mx-auto">
            {/* connecting horizontal line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
              {steps.map((st, i) => (
                <motion.div
                  key={st.b}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="group relative"
                >
                  {/* numbered node circle (sits on the line on desktop) */}
                  <div className="hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                    <div className="relative w-[68px] h-[68px] flex items-center justify-center">
                      {/* outer ring with gradient */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-[1.5px] shadow-[0_8px_24px_-8px_hsl(199_89%_48%_/_0.45)]">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <span className="font-display font-extrabold text-foreground text-lg tabular-nums">{st.num}</span>
                        </div>
                      </div>
                      {/* pulse on hover */}
                      <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 blur-xl" />
                    </div>
                  </div>

                  {/* card */}
                  <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-200/80 via-border to-blue-200/40 transition-all duration-500 group-hover:from-sky-400/70 group-hover:to-blue-500/40 lg:mt-20">
                    <div className="relative rounded-2xl bg-card overflow-hidden p-6 h-full transition-all duration-300" style={{ boxShadow: "var(--shadow-card)" }}>
                      {/* mobile/tablet number badge */}
                      <span className="lg:hidden inline-flex items-center justify-center mb-3 w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white font-display font-extrabold text-sm">
                        {st.num}
                      </span>

                      {/* faint corner number for desktop */}
                      <span
                        aria-hidden
                        className="hidden lg:block absolute -bottom-3 -right-1 font-display font-black text-foreground/[0.04] select-none transition-colors duration-300 group-hover:text-primary/10"
                        style={{ fontSize: "4.5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
                      >
                        {st.num}
                      </span>

                      <h3 className="relative font-display text-base font-bold text-foreground mb-1.5">{st.b}</h3>
                      <p className="relative text-muted-foreground text-[13px] leading-relaxed">{st.s}</p>

                      {/* bottom hover accent line */}
                      <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-sky-400/0 via-primary/0 to-blue-500/0 transition-all duration-500 group-hover:from-sky-400/60 group-hover:via-primary/80 group-hover:to-blue-500/60" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("What You Get", "您将获得")}
            title={t("Deliverables & Guarantees", "交付物与保障")}
            highlight={t("Guarantees", "保障")}
            description={t("Every engagement ships with versioned code, runbooks, monitoring, and a clear support window.", "每一次合作都交付版本化代码、运行手册、监控仪表板与明确的支持周期。")}
            align="center"
            className="mb-12"
          />
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

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden text-primary-foreground"
        style={{ background: "linear-gradient(135deg, hsl(222 47% 8%) 0%, hsl(217 60% 18%) 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 48%), transparent)" }}
        />
        <div className="section-wrap relative text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            {t("Ready to get started?", "准备好开始了吗？")}
          </motion.h2>
          <p className="text-white/70 max-w-[55ch] mx-auto mb-8 text-base md:text-lg">{t("Tell us about your use case — trading automation, web experiences, or blockchain infrastructure.", "告诉我们您的需求 — 交易自动化、网站体验或区块链基础设施。")}</p>
          <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20">
            {t("Contact Us", "联系我们")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
