import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import { useLang } from "@/i18n/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import serviceQuant from "@/assets/service-quant.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceIT from "@/assets/service-it.jpg";

const techGroups = [
  {
    label: { en: "Languages", zh: "编程语言" },
    caption: { en: "Typed & systems-grade", zh: "类型安全 · 系统级" },
    icon: "{ }",
    items: ["TypeScript", "Python", "Rust", "Solidity", "Go"],
  },
  {
    label: { en: "Frontend & Web", zh: "前端与网站" },
    caption: { en: "Modern UI frameworks", zh: "现代 UI 框架" },
    icon: "</>",
    items: ["React", "Next.js", "Nuxt / Vue", "Tailwind CSS", "Vite"],
  },
  {
    label: { en: "Backend & APIs", zh: "后端与接口" },
    caption: { en: "Realtime & high-throughput", zh: "实时 · 高吞吐" },
    icon: "⚡",
    items: ["Node.js", "FastAPI", "tRPC", "GraphQL", "WebSockets"],
  },
  {
    label: { en: "Data & Infra", zh: "数据与基础设施" },
    caption: { en: "Storage, streams, time-series", zh: "存储 · 流式 · 时序" },
    icon: "▣",
    items: ["Postgres", "Redis", "Kafka", "ClickHouse", "TimescaleDB"],
  },
  {
    label: { en: "DevOps & Cloud", zh: "DevOps 与云" },
    caption: { en: "Containerized & CI/CD-first", zh: "容器化 · CI/CD 优先" },
    icon: "☁",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "GitHub Actions"],
  },
  {
    label: { en: "Trading & IT Ops", zh: "交易与 IT 运营" },
    caption: { en: "Exchanges & enterprise IT", zh: "交易所 · 企业 IT" },
    icon: "◈",
    items: ["Binance", "OKX", "Bybit", "Okta", "Datadog"],
  },
];
const ease = [0.16, 1, 0.3, 1] as const;

const Services = () => {
  const { t } = useLang();

  const catalog = [
    {
      id: "web",
      title: t("Website & Landing Pages", "网站与落地页"),
      img: serviceWeb,
      tag: "Web",
      bullets: [
        t("Modern frontends with clean, accessible design", "现代前端，简洁可访问的设计"),
        t("Performance, SEO, analytics, A/B testing", "性能、SEO、分析、A/B 测试"),
        t("Component libraries, CMS integration, CI/CD", "组件库、CMS 集成、CI/CD"),
        t("Fast iteration to convert visitors", "快速迭代以转化访客"),
      ],
    },
    {
      id: "ai",
      title: t("AI Agents & Automation", "AI 智能代理与自动化"),
      img: serviceAi,
      tag: "AI",
      bullets: [
        t("Custom AI agents for support, sales, and internal ops", "定制客服、销售、内部运营 AI 代理"),
        t("LLM-powered assistants & workflow automation", "大模型驱动的助手与流程自动化"),
        t("Knowledge base integration & RAG pipelines", "知识库集成与 RAG 管道"),
        t("Observable, governed, and on-brand", "可观测、可治理、契合品牌"),
      ],
    },
    {
      id: "it-services",
      title: t("Enterprise IT Services", "企业 IT 服务"),
      img: serviceIT,
      tag: "IT",
      bullets: [
        t("Cloud infrastructure & migration (AWS / GCP / Azure)", "云基础设施与迁移 (AWS / GCP / Azure)"),
        t("Managed IT, patching, endpoint security", "托管 IT、补丁管理、端点安全"),
        t("Identity & access, SSO, MFA, zero-trust", "身份与访问、SSO、MFA、零信任"),
        t("24/7 monitoring, helpdesk & incident response", "7×24 监控、服务台与事件响应"),
      ],
    },
    {
      id: "quant",
      title: t("Quant Trading Automation", "量化交易自动化"),
      img: serviceQuant,
      tag: "Trading",
      bullets: [
        t("Non-custodial bots across Binance / OKX / Bybit", "跨 Binance / OKX / Bybit 的非托管机器人"),
        t("Modular strategies: momentum/CTA, market making, arbitrage", "模块化策略：动量/CTA、做市、套利"),
        t("Risk controls: drawdown limits, stop-losses, position sizing", "风控:回撤限制、止损、仓位管理"),
        t("Reproducible backtests, versioned configs", "可复现回测、版本化配置"),
      ],
    },
  ];

  const models = [
    {
      title: t("Prototype Sprint", "原型冲刺"),
      time: t("2–3 weeks", "2-3 周"),
      icon: "🚀",
      items: [
        t("Discovery & solution outline", "需求发现与方案大纲"),
        t("Clickable or code prototype", "可点击或代码原型"),
        t("Backtest or demo environment", "回测或演示环境"),
        t("Roadmap & estimate", "路线图与估算"),
      ],
    },
    {
      title: t("Production Build", "生产构建"),
      time: t("4–8+ weeks", "4-8+ 周"),
      icon: "🏗️",
      items: [
        t("Full implementation & reviews", "完整实现与审查"),
        t("Risk controls & monitoring", "风控与监控"),
        t("Documentation & training", "文档与培训"),
        t("Launch readiness checklist", "上线准备清单"),
      ],
    },
    {
      title: t("Ongoing Success", "持续成功"),
      time: t("Monthly", "按月"),
      icon: "📈",
      items: [
        t("Uptime & performance watch", "正常运行与性能监控"),
        t("Strategy iterations", "策略迭代"),
        t("Security updates", "安全更新"),
        t("Priority support", "优先支持"),
      ],
    },
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
        title={t("IT Services — Quant, AI, Web & Enterprise IT", "IT 服务 — 量化、AI、网站与企业 IT")}
        description={t(
          "Full-stack IT services from StarLoop: modern web development, AI agents, quant trading automation and enterprise IT operations — production-grade, end to end.",
          "StarLoop 提供全栈 IT 服务:AI 智能体、现代网站开发、量化交易自动化与企业 IT 运营 — 端到端生产级交付。",
        )}
        path="/services"
      />

      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "var(--gradient-accent)" }}
        />
        <div className="section-wrap relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4"
          >
            {t("IT Services", "IT 服务")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold text-primary-foreground mb-4"
            style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            {t("End-to-end software,", "端到端软件,")}
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              {t("engineered to ship", "工程化交付")}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-primary-foreground/70 max-w-[62ch] text-lg"
          >
            {t(
              "Four practice areas, one engineering team. From quant trading bots to AI agents, web products, and enterprise IT operations — production-grade by default.",
              "四大业务方向、同一支工程团队。从量化交易机器人到 AI 智能体、网站产品与企业 IT 运营 — 默认生产级。",
            )}
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
            description={t(
              "End-to-end engineering across trading, AI, web and enterprise IT — pick a track or combine them.",
              "覆盖交易、AI、网站与企业 IT 的端到端工程能力 — 单独选用，或自由组合。",
            )}
            className="mb-12"
          />
          {/* 4 large feature cards in a 2x2 grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
              {catalog.map((c, i) => {
                const href =
                  c.id === "quant"
                    ? "/services/quant-trading"
                    : c.id === "ai"
                      ? "/services/ai-agents"
                      : c.id === "web"
                        ? "/services/web-development"
                        : c.id === "it-services"
                          ? "/services/it-services"
                          : undefined;
                return (
                  <motion.article
                    key={c.id}
                    id={c.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease }}
                    className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-200/70 via-border to-blue-200/40 transition-all duration-500 hover:from-sky-400/70 hover:to-blue-500/50"
                  >
                    <div
                      className="relative h-full rounded-2xl bg-card overflow-hidden flex flex-col"
                      style={{ boxShadow: "var(--shadow-card)" }}
                    >
                      {href && <Link to={href} className="absolute inset-0 z-10" aria-label={c.title} />}
                      <div className="aspect-[16/10] bg-secondary overflow-hidden relative">
                        <img
                          src={c.img}
                          alt={c.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/95 backdrop-blur-sm text-foreground text-[11px] font-semibold border border-border">
                          {c.tag}
                        </span>
                        <span
                          aria-hidden
                          className="absolute top-2 right-3 font-display font-black text-foreground/[0.18] select-none"
                          style={{ fontSize: "3.5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-display text-lg font-bold mb-3">{c.title}</h3>
                        <ul className="text-muted-foreground text-sm space-y-2 flex-1">
                          {c.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                        {href && (
                          <span className="inline-flex items-center gap-1.5 mt-4 text-foreground font-semibold text-sm group-hover:text-primary transition-colors">
                            {t("Learn more", "了解更多")}
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-sky-400/0 via-primary/0 to-blue-500/0 transition-all duration-500 group-hover:from-sky-400/60 group-hover:via-primary/80 group-hover:to-blue-500/60" />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS — white */}
      <section className="py-20 bg-background">
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("Flexible Plans", "灵活方案")}
            title={t("Engagement Models", "合作模式")}
            highlight={t("Models", "模式")}
            description={t(
              "Start small, ship fast, and scale with confidence — three ways to work together.",
              "小步起步、快速交付、稳健扩展 — 三种合作方式任您选择。",
            )}
            align="center"
            className="mb-14"
          />
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
                  {m.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — DARK premium connected timeline */}
      <section
        className="relative py-24 overflow-hidden text-primary-foreground"
        style={{
          background: "linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(217 50% 11%) 50%, hsl(222 47% 6%) 100%)",
        }}
      >
        {/* fine grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60%) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* corner glows */}
        <div
          className="absolute -top-32 right-1/4 w-[460px] h-[460px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 55%), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 left-1/4 w-[460px] h-[460px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }}
        />

        <div className="section-wrap relative">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span aria-hidden className="h-px w-8 bg-sky-300/70" />
              <span className="uppercase tracking-[0.22em] text-[11px] font-bold text-sky-300">
                {t("Our Process", "工作流程")}
              </span>
              <span aria-hidden className="h-px w-8 bg-sky-300/70" />
            </div>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("How we", "我们如何")}{" "}
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                {t("work", "工作")}
              </span>
            </h2>
            <p className="mt-4 text-white/65 text-[15px] leading-relaxed max-w-[58ch] mx-auto">
              {t(
                "Five disciplined phases — from discovery to launch — every step versioned, observable, and accountable.",
                "五个严谨阶段 — 从发现到上线 — 每一步都可版本化、可观测、可追责。",
              )}
            </p>
          </motion.div>

          {/* timeline with connecting line */}
          <div className="relative max-w-6xl mx-auto">
            {/* connecting horizontal line (desktop) — glowing */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none" />

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
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 p-[1.5px] shadow-[0_8px_28px_-6px_hsl(199_89%_55%_/_0.6)]">
                        <div className="w-full h-full rounded-full bg-[hsl(222_47%_8%)] flex items-center justify-center">
                          <span className="font-display font-extrabold text-white text-lg tabular-nums">{st.num}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-sky-400/0 group-hover:bg-sky-400/20 transition-colors duration-500 blur-xl" />
                    </div>
                  </div>

                  {/* card — dark glass */}
                  <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/15 via-white/5 to-white/[0.03] transition-all duration-500 group-hover:from-sky-400/60 group-hover:via-blue-500/30 group-hover:to-white/[0.05] lg:mt-20">
                    <div className="relative rounded-2xl bg-white/[0.04] backdrop-blur-md overflow-hidden p-6 h-full transition-all duration-300">
                      {/* mobile/tablet number badge */}
                      <span className="lg:hidden inline-flex items-center justify-center mb-3 w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white font-display font-extrabold text-sm">
                        {st.num}
                      </span>

                      {/* faint corner number desktop */}
                      <span
                        aria-hidden
                        className="hidden lg:block absolute -bottom-3 -right-1 font-display font-black text-white/[0.05] select-none transition-colors duration-300 group-hover:text-sky-400/15"
                        style={{ fontSize: "4.5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
                      >
                        {st.num}
                      </span>

                      <h3 className="relative font-display text-base font-bold text-white mb-1.5">{st.b}</h3>
                      <p className="relative text-white/60 text-[13px] leading-relaxed">{st.s}</p>

                      {/* bottom hover accent line */}
                      <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-sky-400/0 via-sky-400/0 to-blue-500/0 transition-all duration-500 group-hover:from-sky-400/70 group-hover:via-sky-300/90 group-hover:to-blue-500/70" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES — white */}
      <section className="py-20 bg-background">
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("What You Get", "您将获得")}
            title={t("Deliverables & Guarantees", "交付物与保障")}
            highlight={t("Guarantees", "保障")}
            description={t(
              "Every engagement ships with versioned code, runbooks, monitoring, and a clear support window.",
              "每一次合作都交付版本化代码、运行手册、监控仪表板与明确的支持周期。",
            )}
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="p-6 rounded-2xl bg-card border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-display font-bold text-lg mb-4">{t("Deliverables", "交付物")}</h3>
              <ul className="brand-checklist text-sm">
                <li>{t("Versioned code & configuration", "版本化代码与配置")}</li>
                <li>{t("Backtesting reports and runbooks", "回测报告和运行手册")}</li>
                <li>{t("Deployed infra & monitoring dashboard", "已部署的基础设施与监控仪表板")}</li>
                <li>{t("Knowledge transfer & training session", "知识转移与培训")}</li>
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
              <h3 className="font-display font-bold text-lg mb-4">{t("Guarantees", "保障")}</h3>
              <ul className="brand-checklist text-sm">
                <li>{t("Least-privilege, non-custodial setup", "最小权限、非托管设置")}</li>
                <li>{t("Encrypted secrets & access audit", "加密密钥与访问审计")}</li>
                <li>{t("Incident response guidelines", "事件响应指南")}</li>
                <li>{t("Post-launch support window", "上线后支持窗口")}</li>
              </ul>
            </motion.div>
          </div>
          <p className="mt-5 text-muted-foreground text-xs text-center">
            {t(
              "StarLoop provides software and engineering services only. Nothing here is investment advice.",
              "StarLoop 仅提供软件和工程服务。本站内容不构成投资建议。",
            )}
          </p>
        </div>
      </section>

      {/* FAQ — dark theme, addresses common pre-sales questions */}
      <section
        className="relative py-24 overflow-hidden text-primary-foreground"
        style={{
          background: "linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(217 50% 10%) 50%, hsl(222 47% 7%) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60%) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="section-wrap relative">
          <SectionHeading
            eyebrow={t("FAQ", "常见问题")}
            title={t("Questions, answered", "常见问题，逐一解答")}
            highlight={t("answered", "解答")}
            description={t(
              "Everything you'd ask before sending the first message — pricing, NDAs, timelines, and ownership.",
              "在发出第一条消息前你想问的一切 — 定价、保密协议、周期与归属。",
            )}
            align="center"
            invert
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: t("How do you price a project?", "你们如何报价？"),
                  a: t(
                    "Most engagements are scoped as a fixed-price Prototype Sprint (2–3 weeks) or a milestone-based Production Build. Ongoing Success is a flat monthly retainer. We share a written estimate within 48 hours of an intro call.",
                    "大多数项目按固定价格的「原型冲刺」（2-3 周）或按里程碑的「生产构建」计费；「持续成功」按月固定收取。介绍通话后 48 小时内提供书面报价。",
                  ),
                },
                {
                  q: t("What's a typical delivery timeline?", "通常的交付周期是多久？"),
                  a: t(
                    "A Prototype Sprint ships in 2–3 weeks. A Production Build typically runs 4–8 weeks, though complex IT migrations or trading systems can extend to 3 months. We commit to weekly demos so you always see progress.",
                    "原型冲刺 2-3 周交付。生产构建一般 4-8 周，复杂的 IT 迁移或交易系统可能延长到 3 个月。我们承诺每周演示，进度始终可见。",
                  ),
                },
                {
                  q: t("Will you sign an NDA?", "你们会签保密协议吗？"),
                  a: t(
                    "Yes — we sign NDAs by default before sharing any technical details. For trading clients, we also operate non-custodially: your API keys and wallets stay under your control.",
                    "会 — 在交流任何技术细节前我们默认签署保密协议。对交易类客户我们采用非托管模式：API 密钥与钱包始终在您的掌控中。",
                  ),
                },
                {
                  q: t("Who owns the code and IP?", "代码与知识产权归谁？"),
                  a: t(
                    "You do. Once final invoices are paid, all code, designs, and infrastructure configuration are transferred to your repositories with full IP rights. We retain only the right to mention the engagement at a high level.",
                    "归您所有。尾款结清后，全部代码、设计与基础设施配置移交至您的仓库，知识产权完整转让。我们仅保留对合作进行高层次提及的权利。",
                  ),
                },
                {
                  q: t("Do you offer post-launch support?", "上线后是否提供持续支持？"),
                  a: t(
                    "Yes. Every Production Build includes a 30-day warranty for bug fixes. Beyond that, our Ongoing Success plan covers monitoring, incident response, security updates, and strategy iterations on a monthly retainer.",
                    "是的。所有「生产构建」附带 30 天 bug 修复保修期；此后可选「持续成功」按月套餐，覆盖监控、事件响应、安全更新与策略迭代。",
                  ),
                },
                {
                  q: t("Can you work with our existing team or codebase?", "可以与我们现有团队或代码协作吗？"),
                  a: t(
                    "Absolutely. We routinely integrate with internal teams, follow existing conventions, and contribute via pull requests with code review. We can also act as a fully autonomous squad — whichever fits your workflow.",
                    "当然。我们经常嵌入客户团队，遵循既有规范，通过 PR + Code Review 协作；也可作为独立小队完整交付 — 按您的流程来。",
                  ),
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-sky-300/40 backdrop-blur-md"
                  style={{
                    background: "linear-gradient(160deg, hsl(217 50% 12% / 0.7), hsl(222 47% 8% / 0.85))",
                    boxShadow: "0 12px 32px -16px hsl(222 47% 2% / 0.6), inset 0 1px 0 hsl(199 89% 70% / 0.06)",
                  }}
                >
                  <AccordionTrigger className="px-5 py-4 text-left font-display font-semibold text-primary-foreground hover:no-underline hover:text-sky-300 text-[15px]">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-sky-300 font-bold">{String(i + 1).padStart(2, "0")}</span>
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-primary-foreground/70 text-sm leading-relaxed pl-12">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="mt-8 text-center text-sm text-primary-foreground/60">
              {t("Still have questions?", "还有其他问题？")}{" "}
              <Link to="/contact" className="text-sky-300 font-semibold hover:underline">
                {t("Get in touch →", "联系我们 →")}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK — light, categorized premium grid */}
      <section className="relative py-24 overflow-hidden bg-background">
        {/* decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="section-wrap relative">
          <SectionHeading
            eyebrow={t("Tech Stack", "技术栈")}
            title={t("Tools we ship with", "我们用的工具")}
            highlight={t("ship with", "工具")}
            description={t(
              "Battle-tested languages, frameworks, infrastructure and integrations — selected for reliability and long-term maintainability.",
              "经过实战检验的语言、框架、基础设施与集成 — 为可靠性与长期可维护性而选。",
            )}
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {techGroups.map((g, i) => (
              <motion.div
                key={g.label.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease }}
                className="group relative"
              >
                {/* gradient border wrapper */}
                <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-200/80 via-border to-blue-200/40 transition-all duration-500 group-hover:from-sky-400/70 group-hover:to-blue-500/40 h-full">
                  <div
                    className="relative rounded-2xl bg-card overflow-hidden p-6 h-full transition-all duration-300"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    {/* faint group index */}
                    <span
                      aria-hidden
                      className="absolute -top-2 right-3 font-display font-black text-foreground/[0.04] select-none transition-colors duration-300 group-hover:text-primary/10"
                      style={{ fontSize: "5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* group header */}
                    <div className="relative flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white font-display font-extrabold text-sm shadow-[0_6px_18px_-4px_hsl(199_89%_48%_/_0.45)]">
                        {g.icon}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground leading-tight">
                          {t(g.label.en, g.label.zh)}
                        </h3>
                        <span className="text-[10.5px] uppercase tracking-[0.18em] font-semibold text-muted-foreground">
                          {t(g.caption.en, g.caption.zh)}
                        </span>
                      </div>
                    </div>

                    {/* items as pills */}
                    <div className="relative flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-secondary/40 text-foreground text-xs font-medium transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5"
                        >
                          <span className="inline-block w-1 h-1 rounded-full bg-primary/60" />
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* bottom hover accent */}
                    <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-sky-400/0 via-primary/0 to-blue-500/0 transition-all duration-500 group-hover:from-sky-400/60 group-hover:via-primary/80 group-hover:to-blue-500/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-muted-foreground text-xs text-center max-w-[55ch] mx-auto">
            {t(
              "Stack picked per project — we'll recommend the right tools for your goals, scale, and team.",
              "技术栈按项目挑选 — 我们会根据您的目标、规模与团队推荐合适的工具。",
            )}
          </p>
        </div>
      </section>

      {/* CTA — same style as About page CTA */}
      <CtaSection
        title={t("Ready to get started?", "准备好开始了吗？")}
        description={t(
          "Tell us about your use case — trading automation, web experiences, or enterprise IT operations.",
          "告诉我们您的需求 — 交易自动化、网站体验或企业 IT 运营。",
        )}
        primaryLabel={t("Contact Us", "联系我们")}
      />
    </main>
  );
};

export default Services;
