import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import { useLang } from "@/i18n/LanguageContext";
import serviceQuant from "@/assets/service-quant.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceIT from "@/assets/service-it.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const About = () => {
  const { t } = useLang();

  const services = [
    {
      title: t("Web & Product Engineering", "网站与产品工程"),
      desc: t(
        "Modern websites, landing pages, and web products built for speed, usability, and real business needs.",
        "现代网站、落地页与Web产品，兼顾速度、易用性和真实业务需求。",
      ),
      img: serviceWeb,
      tag: "Web",
    },
    {
      title: t("Enterprise IT Services", "企业 IT 服务"),
      desc: t(
        "Reliable IT setup, cloud tools, security, maintenance, and support for day-to-day business operations.",
        "可靠的IT搭建、云工具、安全、维护与日常业务支持。",
      ),
      img: serviceIT,
      tag: "IT",
    },
    {
      title: t("AI Agents & Automation", "AI 智能体与自动化"),
      desc: t(
        "Custom AI agents and workflow automation to reduce manual work and improve efficiency.",
        "定制AI智能体与流程自动化，减少重复工作并提升效率。",
      ),
      img: serviceAi,
      tag: "AI",
    },
    {
      title: t("Quant & Data Systems", "量化与数据系统"),
      desc: t(
        "Advanced data-driven systems, dashboards, trading tools, and analytics for specialised projects.",
        "面向专业项目的数据驱动系统、数据看板、交易工具与分析平台。",
      ),
      img: serviceQuant,
      tag: "Advanced",
    },
  ];

  const whyPoints = [
    {
      title: t("Engineering-First Mindset", "工程思维优先"),
      body: t(
        "Code reviews, CI/CD, observability and SLOs — software best practices in every project.",
        "代码审查、CI/CD、可观测性与 SLO — 把软件最佳实践带入每个项目。",
      ),
      icon: "⚙️",
    },
    {
      title: t("Production-Grade by Default", "默认生产级"),
      body: t(
        "Versioned configs, audit logs, monitoring dashboards. Built to run, not just to demo.",
        "版本化配置、审计日志、监控仪表板。为长期运行而构建，不止是演示。",
      ),
      icon: "🚀",
    },
    {
      title: t("Security & Risk Built-In", "安全与风控内建"),
      body: t(
        "Least-privilege access, encrypted secrets, non-custodial architecture, defense in depth.",
        "最小权限访问、加密密钥、非托管架构、纵深防御。",
      ),
      icon: "🛡️",
    },
    {
      title: t("Modular & Composable", "模块化与可组合"),
      body: t(
        "Clear interfaces, reusable building blocks. Scale from MVP to production without rewrites.",
        "清晰接口、可复用模块。从 MVP 到生产级无需重写。",
      ),
      icon: "🧩",
    },
    {
      title: t("Full-Stack Coverage", "全栈覆盖"),
      body: t(
        "Frontend to infrastructure, ML to smart contracts — one team, one delivery standard.",
        "从前端到基础设施、从 ML 到智能合约 — 一个团队、统一交付标准。",
      ),
      icon: "🌐",
    },
    {
      title: t("Long-Term Partnership", "长期合作伙伴"),
      body: t(
        "We embed with your team, document everything, and stay accountable post-launch.",
        "我们融入您的团队、完整文档化、上线后持续负责。",
      ),
      icon: "🤝",
    },
  ];

  // Engineering-culture stats: depth signals (how we work)
  const stats = [
    { value: "100%", label: t("Code Review Coverage", "代码审查覆盖") },
    { value: "<24h", label: t("Avg PR Review", "平均 PR 审查") },
    { value: "85%+", label: t("Test Coverage", "测试覆盖率") },
    { value: "<15min", label: t("Incident MTTR", "事件平均恢复") },
    { value: "0", label: t("Untracked Deploys", "无追踪上线") },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO
        title={t("About StarLoop — Web, IT & Digital Systems", "关于 StarLoop — 网站、IT与数字系统")}
        description={t(
          "StarLoop builds modern websites, IT systems, automation tools, AI agents, and specialised data solutions for businesses.",
          "StarLoop 为企业构建现代网站、IT系统、自动化工具、AI智能体和专业数据解决方案。",
        )}
        path="/about"
        schema="AboutPage"
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
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "var(--gradient-accent)" }}
        />
        <div className="section-wrap relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4"
          >
            {t("About StarLoop", "关于 StarLoop")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold text-primary-foreground mb-4"
            style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            {t("A modern digital team", "现代数字化团队")}
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              {t("building reliable business systems", "构建可靠的业务系统")}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-primary-foreground/70 max-w-[62ch] text-lg"
          >
            {t(
              "From websites and IT services to automation, AI agents, and data systems — we build practical digital solutions that support real business needs.",
              "从网站与IT服务到自动化、AI智能体和数据系统 — 我们构建真正服务业务需求的实用数字解决方案。",
            )}
          </motion.p>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("Our Capabilities", "技术能力")}
            title={t("Digital solutions for modern businesses", "面向现代企业的数字解决方案")}
            highlight={t("Digital solutions", "数字解决方案")}
            description={t(
              "Web, IT, automation, AI, and data systems — delivered with one consistent engineering standard.",
              "网站、IT、自动化、AI与数据系统 — 以统一的工程标准交付。",
            )}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
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

      <section className="py-20 bg-background">
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("How We Engineer", "我们如何工程")}
            title={t("Why teams choose StarLoop", "团队为什么选择 StarLoop")}
            highlight={t("StarLoop", "StarLoop")}
            description={t(
              "Six engineering principles that shape every system we ship — from the first commit to production rollout.",
              "塑造我们交付的每一套系统的六项工程准则 — 从第一次提交到生产上线。",
            )}
            align="center"
            className="mb-14"
          />
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

      {/* ENGINEERING PHILOSOPHY — DARK, 3 principles (replaces duplicated Process section) */}
      <section
        className="relative py-20 overflow-hidden text-primary-foreground"
        style={{
          background: "linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(217 50% 11%) 50%, hsl(222 47% 6%) 100%)",
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
        <div
          className="absolute -top-32 right-1/4 w-[460px] h-[460px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 55%), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 left-1/4 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }}
        />

        <div className="section-wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span aria-hidden className="h-px w-8 bg-sky-300/70" />
              <span className="uppercase tracking-[0.22em] text-[11px] font-bold text-sky-300">
                {t("Philosophy", "工程哲学")}
              </span>
              <span aria-hidden className="h-px w-8 bg-sky-300/70" />
            </div>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("How we", "我们如何")}{" "}
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                {t("think", "思考")}
              </span>
            </h2>
            <p className="mt-4 text-white/65 text-[15px] leading-relaxed max-w-[58ch] mx-auto">
              {t(
                "Three principles that shape every architectural decision — long before the first line of code.",
                "在写下第一行代码之前,三项原则塑造我们的每一个架构决策。",
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                k: "01",
                title: t("Observable by default", "默认可观测"),
                desc: t(
                  "If we can't measure it, we don't ship it. Every system emits structured logs, metrics, and traces from day one — no bolt-on monitoring later.",
                  "无法度量,就不上线。每个系统从第一天起就输出结构化日志、指标与追踪 — 而非事后补丁式监控。",
                ),
              },
              {
                k: "02",
                title: t("Reproducible everything", "全栈可复现"),
                desc: t(
                  "Builds, infra, data pipelines, even backtests — all version-controlled and reproducible. No 'works on my machine', no untracked production state.",
                  "构建、基础设施、数据管线乃至回测 — 全部版本化、可复现。拒绝『我电脑上能跑』,拒绝无追踪的生产状态。",
                ),
              },
              {
                k: "03",
                title: t("Risk-first architecture", "风控优先架构"),
                desc: t(
                  "We design for the failure case before the happy path. Least-privilege access, blast-radius isolation, and rollback paths are non-negotiable defaults.",
                  "在设计正常路径之前,先设计失败路径。最小权限、爆炸半径隔离与回滚路径是不可妥协的默认项。",
                ),
              },
            ].map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/15 via-white/5 to-white/[0.03] transition-all duration-500 hover:from-sky-400/60 hover:via-blue-500/30"
              >
                <div className="relative h-full rounded-2xl bg-white/[0.04] backdrop-blur-md p-7 overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute -top-2 right-4 font-display font-black text-white/[0.06] select-none transition-colors duration-300 group-hover:text-sky-400/15"
                    style={{ fontSize: "5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
                  >
                    {p.k}
                  </span>
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_hsl(199_89%_55%)]" />
                      <span className="text-[10.5px] font-mono text-sky-300/70 tracking-[0.2em]">PRINCIPLE {p.k}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2.5 leading-snug">{p.title}</h3>
                    <p className="text-white/65 text-[13.5px] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-7 right-7 h-[2px] rounded-full bg-gradient-to-r from-sky-400/0 via-sky-400/0 to-blue-500/0 transition-all duration-500 group-hover:from-sky-400/70 group-hover:via-sky-300/90 group-hover:to-blue-500/70" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering at a glance — light gradient, premium, layered */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
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
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span aria-hidden className="h-px w-8 bg-primary/60" />
              <span className="uppercase tracking-[0.22em] text-[11px] font-bold text-primary">
                {t("Engineering Metrics", "工程指标")}
              </span>
              <span aria-hidden className="h-px w-8 bg-primary/60" />
            </div>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("Engineering at a", "工程实力")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("glance", "一览")}
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed max-w-[58ch] mx-auto">
              {t(
                "Numbers that describe how we build, ship, and run software in production.",
                "用数据描述我们如何在生产环境中构建、交付与运行软件。",
              )}
            </p>
          </motion.div>

          {/* premium stat cards with index numbers, gradient borders, hover glow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="group relative"
              >
                {/* gradient border wrapper */}
                <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-200/80 via-border to-blue-200/40 transition-all duration-500 group-hover:from-sky-400/70 group-hover:to-blue-500/40">
                  <div
                    className="relative rounded-2xl bg-card overflow-hidden p-6 h-full transition-all duration-300"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    {/* faint index number */}
                    <span
                      aria-hidden
                      className="absolute -top-2 right-3 font-display font-black text-foreground/[0.04] select-none transition-colors duration-300 group-hover:text-primary/10"
                      style={{ fontSize: "5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* corner accent dot */}
                    <span className="absolute top-4 left-4 inline-flex h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_8px_hsl(var(--primary))]" />

                    {/* value */}
                    <div className="relative pt-3">
                      <span
                        className="block font-display font-extrabold tabular-nums bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
                        style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                      >
                        {s.value}
                      </span>
                      <span className="block mt-2 text-muted-foreground text-[10.5px] uppercase tracking-[0.18em] font-semibold">
                        {s.label}
                      </span>
                    </div>

                    {/* bottom hover accent line */}
                    <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-sky-400/0 via-primary/0 to-blue-500/0 transition-all duration-500 group-hover:from-sky-400/60 group-hover:via-primary/80 group-hover:to-blue-500/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={t("Start your project with StarLoop", "与 StarLoop 开始你的项目")}
        description={t(
          "Need a website, IT service, automation tool, AI agent, or data system? Tell us what you want to build.",
          "需要网站、IT服务、自动化工具、AI智能体或数据系统？告诉我们你想构建什么。",
        )}
        primaryLabel={t("Start a Project", "开启合作")}
      />
    </main>
  );
};

export default About;
