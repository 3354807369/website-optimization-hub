import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles, Globe2, Boxes, Zap, ShieldCheck, Eye, Cpu } from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";
import heroBg from "@/assets/home-hero-bg.jpg";
import bizQuant from "@/assets/biz-quant.jpg";
import bizAi from "@/assets/biz-ai.jpg";
import bizWeb from "@/assets/biz-web.jpg";
import bizIT from "@/assets/biz-it.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const Index = () => {
  const { t } = useLang();

  const businesses = [
    {
      icon: Globe2,
      title: t("Website & Landing Pages", "网站与落地页"),
      desc: t(
        "Performance-first marketing sites and product surfaces with modern stacks.",
        "性能优先的品牌网站与产品页，现代化技术栈。",
      ),
      img: bizWeb,
      href: "/services/web-development",
      tag: "Web",
      accent: "from-emerald-500/40 to-teal-600/30",
    },
    {
      icon: Boxes,
      title: t("Enterprise IT Services", "企业 IT 服务"),
      desc: t(
        "Cloud infrastructure, managed IT, security operations and 24/7 end-user support.",
        "云基础设施、托管 IT、安全运营与 7×24 终端用户支持。",
      ),
      img: bizIT,
      href: "/services/it-services",
      tag: "IT",
      accent: "from-amber-500/40 to-orange-600/30",
    },
    {
      icon: Sparkles,
      title: t("AI Application R&D", "AI 应用研发"),
      desc: t(
        "LLM agents, intelligent assistants, research tooling and workflow automation.",
        "大模型应用、智能代理、研究工具和流程自动化。",
      ),
      img: bizAi,
      href: "/services/ai-agents",
      tag: "AI / ML",
      accent: "from-violet-500/40 to-fuchsia-600/30",
    },
    {
      icon: TrendingUp,
      title: t("Quant Trading Automation", "量化交易自动化"),
      desc: t(
        "Non-custodial bots, modular strategies, risk-first execution across major exchanges.",
        "非托管机器人、模块化策略、风控优先的跨交易所执行。",
      ),
      img: bizQuant,
      href: "/services/quant-trading",
      tag: t("Flagship", "旗舰"),
      accent: "from-sky-500/40 to-blue-600/30",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: t("Engineered for Speed", "为速度而生"),
      desc: t(
        "Sub-100ms infrastructure, optimized data pipelines, instant execution.",
        "亚 100ms 基础设施、优化的数据管道、即时执行。",
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Risk-First Design", "风控优先设计"),
      desc: t(
        "Every system ships with guardrails: limits, alerts, audit logs.",
        "每个系统都自带保护机制：限制、告警、审计日志。",
      ),
    },
    {
      icon: Eye,
      title: t("Fully Observable", "全方位可观测"),
      desc: t("Real-time dashboards, traceable decisions, transparent metrics.", "实时仪表板、可追溯决策、透明指标。"),
    },
    {
      icon: Cpu,
      title: t("Modular by Default", "天生模块化"),
      desc: t("Composable building blocks scale from prototype to production.", "可组合的构建块从原型扩展到生产。"),
    },
  ];

  // Outcome-focused stats: trust signals (what we've delivered)
  const stats = [
    { value: "30+", label: t("Projects Shipped", "已交付项目") },
    { value: "4", label: t("Practice Areas", "业务领域") },
    { value: "99.9%", label: t("Production Uptime", "生产可用性") },
    { value: "24/7", label: t("Live Monitoring", "全天候监控") },
  ];

  const workflow = [
    {
      num: "01",
      title: t("Discover", "发现"),
      desc: t("Clarify goals, risks, constraints.", "明确目标、风险与约束。"),
    },
    {
      num: "02",
      title: t("Design", "设计"),
      desc: t("Architect modular, observable systems.", "设计模块化、可观测的系统。"),
    },
    {
      num: "03",
      title: t("Build", "构建"),
      desc: t("Iterate fast with tests and reviews.", "快速迭代，配以测试与审查。"),
    },
    {
      num: "04",
      title: t("Launch", "上线"),
      desc: t("Deploy, monitor, improve continuously.", "部署、监控、持续优化。"),
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO path="/" />

      {/* ============ HERO ============ */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" width={1920} height={1080} className="w-full h-full object-cover scale-105" />
        </div>
        {/* layered gradient overlay (deeper at top & bottom for typography contrast) */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, hsl(222 47% 4% / 0.92) 0%, hsl(222 47% 6% / 0.78) 35%, hsl(222 47% 5% / 0.82) 65%, hsl(222 47% 3% / 0.96) 100%)",
          }}
        />
        {/* subtle radial vignette toward center for spotlight */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 45%, transparent 0%, hsl(222 47% 4% / 0.55) 100%)",
          }}
        />
        {/* refined grid (finer, calmer) */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60%) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 25%, transparent 70%)",
          }}
        />
        {/* corner accent glows — restrained */}
        <div
          className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none z-[1]"
          style={{ background: "radial-gradient(circle, hsl(199 89% 55%), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full opacity-15 blur-3xl pointer-events-none z-[1]"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative z-[2] text-center px-6 max-w-[1180px]"
        >
          <h1
            className="font-display font-bold text-white mb-7"
            style={{
              fontSize: "clamp(2.75rem, 7.5vw, 6rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              textShadow: "0 4px 30px rgba(0,0,0,0.45)",
            }}
          >
            {t("We build software that grows your business", "我们打造的软件能够助力您的业务增长")}
            <br />
            {/* <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("for serious software", "构建严肃软件")}
            </span> */}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/75 max-w-[64ch] mx-auto text-[15px] md:text-lg leading-relaxed mb-10"
          >
            {t(
              "StarLoop helps businesses build websites, AI systems, and advanced automation tools.",
              "StarLoop 帮助企业构建网站、人工智能系统和高级自动化工具。",
            )}
            <br />
            {t(
              "We design and develop solutions that improve efficiency, reduce manual work, and support growth.",
              "我们设计并开发能够提高效率、减少人工操作并支持业务增长的解决方案。",
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            <Link
              to="/Contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/95 transition-all no-underline shadow-[0_10px_40px_-10px_rgba(56,189,248,0.55)] hover:shadow-[0_14px_44px_-10px_rgba(56,189,248,0.7)] hover:-translate-y-0.5 duration-300"
            >
              {t("Start a Project", "启动项目")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all no-underline"
            >
              {t("All Services", "查看全部服务")}
            </Link>
          </motion.div>

          {/* in-hero KPI strip — institutional feel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mx-auto max-w-3xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-md">
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-4 md:py-5 text-center">
                  <div
                    className="font-display font-semibold text-white tabular-nums"
                    style={{
                      fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-white/55 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 z-[2] flex flex-col items-center gap-2"
        >
          <span className="text-white/45 text-[10px] tracking-[0.3em] uppercase">{t("Scroll", "向下滚动")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/25 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/55" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ BUSINESSES ============ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="section-wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("What We Build", "我们构建什么")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("Four practices,", "四大业务,")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("one engineering standard", "同一工程标准")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {businesses.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                >
                  <Link
                    to={b.href}
                    className="group relative block rounded-3xl overflow-hidden border border-border bg-card no-underline transition-all duration-500 hover:border-primary/40 hover:-translate-y-1"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    {/* image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-foreground">
                      <img
                        src={b.img}
                        alt={b.title}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${b.accent} mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(180deg, transparent 40%, hsl(222 47% 8% / 0.95) 100%)",
                        }}
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 tracking-wide">
                        {b.tag}
                      </span>
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                            <Icon size={16} className="text-white" strokeWidth={2.2} />
                          </div>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                        />
                      </div>
                    </div>
                    {/* content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {b.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{b.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ADVANTAGES ============ */}
      <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 48%), transparent)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%), transparent)" }}
        />

        <div className="section-wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-4">
              {t("Why StarLoop", "为什么选择 StarLoop")}
            </p>
            <h2
              className="font-display font-bold text-primary-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("Built on principles, not buzzwords", "基于原则,而非口号")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-sky-400/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border border-sky-400/30"
                    style={{
                      background: "linear-gradient(135deg, hsl(199 89% 48% / 0.2), hsl(217 91% 60% / 0.1))",
                    }}
                  >
                    <Icon size={18} className="text-sky-300" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{a.title}</h3>
                  <p className="text-primary-foreground/65 text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* stats inline */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-white to-sky-300 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-primary-foreground/60 text-[11px] uppercase tracking-[0.15em] font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WORKFLOW ============ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("How We Work", "我们如何合作")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("A clear path", "一条清晰的路径,")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("from idea to production", "从想法到生产")}
              </span>
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* connecting line */}
            <div
              className="hidden lg:block absolute top-12 left-0 right-0 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(199 89% 48% / 0.4), hsl(199 89% 48% / 0.4), transparent)",
              }}
            />
            {workflow.map((w, i) => (
              <motion.div
                key={w.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center font-display font-bold text-primary text-lg relative z-10"
                  style={{
                    background: "linear-gradient(135deg, hsl(199 89% 95%), hsl(217 91% 97%))",
                    border: "1px solid hsl(199 89% 48% / 0.2)",
                  }}
                >
                  {w.num}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(222 47% 8%) 0%, hsl(222 47% 12%) 50%, hsl(217 91% 25%) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 80%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 80%) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 48%), transparent 70%)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="section-wrap relative text-center"
        >
          <h2
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            {t("Have an idea worth building?", "有值得构建的想法?")}
          </h2>
          <p className="text-white/70 max-w-[55ch] mx-auto text-base md:text-lg mb-10">
            {t(
              "Tell us about your goals. We'll come back with a clear plan, an honest estimate, and a path forward.",
              "告诉我们你的目标。我们会返回一份清晰的计划、诚实的估算和前进的路径。",
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-2xl shadow-sky-500/30"
            >
              {t("Start a Project", "启动项目")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 transition-all no-underline"
            >
              {t("About Us", "关于我们")}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;
