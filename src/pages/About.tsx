import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "@/i18n/LanguageContext";
import serviceQuant from "@/assets/service-quant.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBlockchain from "@/assets/service-blockchain.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const About = () => {
  const { t } = useLang();

  const services = [
    { title: t("Quant Trading Automation", "量化交易自动化"), desc: t("Production-grade trading systems. Non-custodial, exchange-agnostic, risk-controlled by design.", "生产级量化交易系统。非托管、跨交易所、内置风控。"), img: serviceQuant, tag: "Trading" },
    { title: t("AI Agents & LLM Engineering", "AI 智能体与大模型工程"), desc: t("Custom LLM agents, RAG pipelines, and intelligent automation built into your workflows.", "定制 LLM 智能体、RAG 管线与嵌入业务流程的智能自动化。"), img: serviceAi, tag: "AI" },
    { title: t("Web & Product Engineering", "网站与产品工程"), desc: t("High-performance marketing sites and SaaS products. TypeScript, edge-deployed, SEO-ready.", "高性能营销站与 SaaS 产品。TypeScript、边缘部署、SEO 就绪。"), img: serviceWeb, tag: "Web" },
    { title: t("Blockchain & Web3 Infrastructure", "区块链与 Web3 基础设施"), desc: t("Smart contracts, on-chain indexing, wallet integrations, and crypto-native data pipelines.", "智能合约、链上索引、钱包集成与加密原生数据管线。"), img: serviceBlockchain, tag: "Blockchain" },
  ];

  const whyPoints = [
    { title: t("Engineering-First Mindset", "工程思维优先"), body: t("Code reviews, CI/CD, observability and SLOs — software best practices in every project.", "代码审查、CI/CD、可观测性与 SLO — 把软件最佳实践带入每个项目。"), icon: "⚙️" },
    { title: t("Production-Grade by Default", "默认生产级"), body: t("Versioned configs, audit logs, monitoring dashboards. Built to run, not just to demo.", "版本化配置、审计日志、监控仪表板。为长期运行而构建，不止是演示。"), icon: "🚀" },
    { title: t("Security & Risk Built-In", "安全与风控内建"), body: t("Least-privilege access, encrypted secrets, non-custodial architecture, defense in depth.", "最小权限访问、加密密钥、非托管架构、纵深防御。"), icon: "🛡️" },
    { title: t("Modular & Composable", "模块化与可组合"), body: t("Clear interfaces, reusable building blocks. Scale from MVP to production without rewrites.", "清晰接口、可复用模块。从 MVP 到生产级无需重写。"), icon: "🧩" },
    { title: t("Full-Stack Coverage", "全栈覆盖"), body: t("Frontend to infrastructure, ML to smart contracts — one team, one delivery standard.", "从前端到基础设施、从 ML 到智能合约 — 一个团队、统一交付标准。"), icon: "🌐" },
    { title: t("Long-Term Partnership", "长期合作伙伴"), body: t("We embed with your team, document everything, and stay accountable post-launch.", "我们融入您的团队、完整文档化、上线后持续负责。"), icon: "🤝" },
  ];

  const stats = [
    { value: "4", label: t("Practice Areas", "业务领域") },
    { value: "<80ms", label: t("Latency Target", "延迟目标") },
    { value: "20+", label: t("Strategy Modules", "策略模块") },
    { value: "99.9%", label: t("Uptime SLO", "可用性 SLO") },
    { value: "24/7", label: t("Monitoring", "全天候监控") },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO
        title={t("About StarLoop — Full-Stack IT Engineering Team", "关于 StarLoop — 全栈 IT 工程团队")}
        description={t(
          "StarLoop is a full-stack IT engineering team building production-grade quant trading automation, AI agents, modern web products, and blockchain infrastructure.",
          "StarLoop 是一支全栈 IT 工程团队,专注构建生产级量化交易自动化、AI 智能体、现代网站产品与区块链基础设施。"
        )}
        path="/about"
        schema="AboutPage"
      />

      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4">
            {t("About StarLoop", "关于 StarLoop")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="font-display font-bold text-primary-foreground mb-4" style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {t("A full-stack IT team", "一支全栈 IT 团队")}<br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">{t("shipping production systems", "交付生产级系统")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease }} className="text-primary-foreground/70 max-w-[62ch] text-lg">
            {t(
              "From quant trading automation and AI agents to modern web products and blockchain infrastructure — we engineer reliable software that runs in production, not just in demos.",
              "从量化交易自动化、AI 智能体,到现代网站产品与区块链基础设施 — 我们构建可在生产中长期运行的可靠软件,而不仅是演示。"
            )}
          </motion.p>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("Our Expertise", "专业领域")}
            title={t("What We Do", "我们做什么")}
            highlight={t("We Do", "做什么")}
            description={t("Four practice areas, one engineering bar — built for reliability, observability, and speed.", "四大业务方向，统一的工程标准 — 为可靠性、可观测性与速度而生。")}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
          <SectionHeading
            eyebrow={t("Our Values", "我们的价值观")}
            title={t("Why StarLoop", "为什么选择 StarLoop")}
            highlight={t("StarLoop", "StarLoop")}
            description={t("Six principles that shape how we design, build, and ship every system.", "塑造我们设计、构建与交付每一套系统的六项准则。")}
            align="center"
            className="mb-14"
          />
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
            {t("Ready to work together?", "准备好合作了吗？")}
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

export default About;
