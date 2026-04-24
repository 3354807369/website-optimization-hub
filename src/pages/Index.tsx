import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles, Globe2, Boxes, Zap, ShieldCheck, Eye, Cpu } from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";
import heroBg from "@/assets/home-hero-bg.jpg";
import bizQuant from "@/assets/biz-quant.jpg";
import bizAi from "@/assets/biz-ai.jpg";
import bizWeb from "@/assets/biz-web.jpg";
import bizBlockchain from "@/assets/biz-blockchain.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const Index = () => {
  const { t } = useLang();

  const businesses = [
    {
      icon: TrendingUp,
      title: t("Quant Trading Automation", "量化交易自动化"),
      desc: t("Non-custodial bots, modular strategies, risk-first execution across major exchanges.", "非托管机器人、模块化策略、风控优先的跨交易所执行。"),
      img: bizQuant,
      href: "/services/quant-trading",
      tag: t("Flagship", "旗舰"),
      accent: "from-sky-500/30 to-blue-600/30",
    },
    {
      icon: Sparkles,
      title: t("AI Application R&D", "AI 应用研发"),
      desc: t("LLM agents, intelligent assistants, research tooling and workflow automation.", "大模型应用、智能代理、研究工具和流程自动化。"),
      img: bizAi,
      href: "/services/ai-agents",
      tag: "AI / ML",
      accent: "from-cyan-500/30 to-sky-600/30",
    },
    {
      icon: Globe2,
      title: t("Website & Landing Pages", "网站与落地页"),
      desc: t("Performance-first marketing sites and product surfaces with modern stacks.", "性能优先的品牌网站与产品页，现代化技术栈。"),
      img: bizWeb,
      href: "/services#web",
      tag: "Web",
      accent: "from-indigo-500/30 to-blue-600/30",
    },
    {
      icon: Boxes,
      title: t("Blockchain & Web3", "区块链与 Web3"),
      desc: t("Smart contracts, on-chain indexing, dashboards and crypto-native infrastructure.", "智能合约、链上索引、仪表板与加密原生基础设施。"),
      img: bizBlockchain,
      href: "/services#blockchain",
      tag: "Web3",
      accent: "from-violet-500/30 to-fuchsia-600/30",
    },
  ];

  const advantages = [
    { icon: Zap, title: t("Engineered for Speed", "为速度而生"), desc: t("Sub-100ms infrastructure, optimized data pipelines, instant execution.", "亚 100ms 基础设施、优化的数据管道、即时执行。") },
    { icon: ShieldCheck, title: t("Risk-First Design", "风控优先设计"), desc: t("Every system ships with guardrails: limits, alerts, audit logs.", "每个系统都自带保护机制：限制、告警、审计日志。") },
    { icon: Eye, title: t("Fully Observable", "全方位可观测"), desc: t("Real-time dashboards, traceable decisions, transparent metrics.", "实时仪表板、可追溯决策、透明指标。") },
    { icon: Cpu, title: t("Modular by Default", "天生模块化"), desc: t("Composable building blocks scale from prototype to production.", "可组合的构建块从原型扩展到生产。") },
  ];

  const stats = [
    { value: "4", label: t("Core Practices", "核心业务") },
    { value: "<80ms", label: t("Gateway Latency", "网关延迟") },
    { value: "20+", label: t("Strategy Modules", "策略模块") },
    { value: "99.9%", label: t("Uptime Target", "正常运行目标") },
  ];

  const workflow = [
    { num: "01", title: t("Discover", "发现"), desc: t("Clarify goals, risks, constraints.", "明确目标、风险与约束。") },
    { num: "02", title: t("Design", "设计"), desc: t("Architect modular, observable systems.", "设计模块化、可观测的系统。") },
    { num: "03", title: t("Build", "构建"), desc: t("Iterate fast with tests and reviews.", "快速迭代，配以测试与审查。") },
    { num: "04", title: t("Launch", "上线"), desc: t("Deploy, monitor, improve continuously.", "部署、监控、持续优化。") },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO path="/" />

      {/* ============ HERO ============ */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
        {/* gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, hsl(222 47% 6% / 0.85) 0%, hsl(222 47% 8% / 0.7) 50%, hsl(222 47% 6% / 0.95) 100%)",
          }}
        />
        {/* animated grid */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60%) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* floating particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-sky-400"
              style={{
                left: `${(i * 53) % 100}%`,
                top: `${(i * 37) % 100}%`,
                boxShadow: "0 0 8px hsl(199 89% 60%)",
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative z-[2] text-center px-6 max-w-[1100px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/85 text-sm font-medium tracking-wide">
              {t("Building the future of finance", "构建金融的未来")}
            </span>
          </motion.div>

          <h1
            className="font-display font-bold text-white mb-6"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            {t("Engineering trust", "工程化")}
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("into every system", "可信赖的每个系统")}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/75 max-w-[60ch] mx-auto text-base md:text-lg mb-10"
          >
            {t(
              "From quant trading automation to AI, web, and blockchain — we build modular, observable, production-grade systems.",
              "从量化交易自动化到 AI、网站与区块链 —— 我们构建模块化、可观测、生产级的系统。"
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/services/quant-trading"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
            >
              {t("Explore Quant Trading", "探索量化交易")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 transition-all no-underline"
            >
              {t("All Services", "查看全部服务")}
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 z-[2] flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">{t("Scroll", "向下滚动")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/60" />
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
                          background:
                            "linear-gradient(180deg, transparent 40%, hsl(222 47% 8% / 0.95) 100%)",
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
                      background:
                        "linear-gradient(135deg, hsl(199 89% 48% / 0.2), hsl(217 91% 60% / 0.1))",
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
                    background:
                      "linear-gradient(135deg, hsl(199 89% 95%), hsl(217 91% 97%))",
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
            background:
              "linear-gradient(135deg, hsl(222 47% 8%) 0%, hsl(222 47% 12%) 50%, hsl(217 91% 25%) 100%)",
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
              "告诉我们你的目标。我们会返回一份清晰的计划、诚实的估算和前进的路径。"
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
