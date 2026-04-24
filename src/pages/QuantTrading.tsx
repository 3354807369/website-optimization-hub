import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import IntegrationsShowcase from "@/components/IntegrationsShowcase";
import PerformanceCurve from "@/components/PerformanceCurve";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { useLang } from "@/i18n/LanguageContext";
import heroImage from "@/assets/quant-hero-1.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const QuantTrading = () => {
  const { t } = useLang();

  const features = [
    { title: t("Multi-Exchange Connectivity", "多交易所连接"), desc: t("Stable API channels with a unified asset & portfolio view across venues.", "稳定的 API 通道，统一的资产和投资组合视图。"), icon: "🔗" },
    { title: t("Modular Strategies", "模块化策略"), desc: t("Plug-and-play factors, CTA, market making, and arbitrage modules.", "即插即用的因子、CTA、做市和套利模块。"), icon: "🧩" },
    { title: t("Risk & Position Control", "风控与仓位管理"), desc: t("Drawdown limits, tiered stop-losses, and dynamic position sizing.", "回撤限制、分级止损和动态仓位管理。"), icon: "🛡️" },
  ];

  const stats = [
    { value: "3+", label: t("Integrated Exchanges", "已对接交易所") },
    { value: "<80ms", label: t("Latency Target", "延迟目标") },
    { value: "20+", label: t("Strategy Modules", "策略模块") },
    { value: "99.9%", label: t("Uptime Target", "可用性目标") },
    { value: "24/7", label: t("Monitoring", "全天候监控") },
  ];

  const audiences = [
    {
      icon: "👤",
      tag: t("Individual", "个人玩家"),
      title: t("Individual Quant Traders", "个人量化玩家"),
      pains: [
        t("Strategies tested in notebooks but hard to put on real exchanges", "策略在 notebook 里跑得好，但难落地到实盘"),
        t("Worry about API security and fund custody", "担心 API 安全和资金托管风险"),
        t("No time to babysit bots 24/7", "没精力 7×24 盯盘"),
      ],
      solution: t(
        "Non-custodial bots on your own keys, hosted execution, mobile alerts.",
        "非托管机器人 + 自有 API Key，托管执行，手机告警。"
      ),
    },
    {
      icon: "🏢",
      tag: t("Studio", "工作室"),
      title: t("Trading Studios & Prop Teams", "交易工作室 / 自营团队"),
      pains: [
        t("Multiple strategies, multiple accounts, hard to manage centrally", "多策略多账户，集中管理困难"),
        t("Need reproducible backtests and version-controlled configs", "需要可复现回测与版本化配置"),
        t("Risk events need to surface in seconds, not hours", "风险事件需要秒级感知，而非小时级"),
      ],
      solution: t(
        "Unified dashboard, role-based access, audit logs, and real-time risk alerts.",
        "统一控制台、角色权限、审计日志、实时风控告警。"
      ),
    },
    {
      icon: "🏛️",
      tag: t("Institution", "资管机构"),
      title: t("Asset Managers & Funds", "资管机构与基金"),
      pains: [
        t("Compliance requires full traceability of every order", "合规要求每笔订单完整可追溯"),
        t("Need SLA-grade uptime and disaster recovery", "需要 SLA 级别的可用性与灾备"),
        t("Custom strategies must integrate with internal systems", "自研策略需对接内部系统"),
      ],
      solution: t(
        "Private deployment, SLA-backed infra, full audit trails, and custom strategy SDK.",
        "私有化部署、SLA 基础设施、完整审计链路、定制策略 SDK。"
      ),
    },
  ];

  const faqs = [
    {
      q: t("Do you take custody of funds?", "你们会托管资金吗？"),
      a: t(
        "No. StarLoop is non-custodial by default. Bots run on your own exchange API keys with least-privilege scopes — withdrawal permissions are never required.",
        "不会。StarLoop 默认采用非托管模式。机器人使用您自己的交易所 API Key 运行，权限最小化 — 我们从不要求提币权限。"
      ),
    },
    {
      q: t("Which exchanges and assets are supported?", "支持哪些交易所和资产？"),
      a: t(
        "Spot and perpetuals on Binance, OKX, and Bybit out of the box. Additional venues and instruments can be onboarded for production engagements.",
        "开箱即用支持 Binance、OKX、Bybit 的现货与永续合约。生产项目可按需对接更多交易所与品种。"
      ),
    },
    {
      q: t("Can you customize or integrate my own strategy?", "可以定制或对接我自己的策略吗？"),
      a: t(
        "Yes. We provide modular building blocks — signals, execution, risk — and can wrap your existing Python/Rust logic into the same risk-controlled runtime.",
        "可以。我们提供信号、执行、风控等模块化组件，也可以把您已有的 Python / Rust 策略封装进同一套风控运行时。"
      ),
    },
    {
      q: t("How do you validate strategy performance?", "如何验证策略表现？"),
      a: t(
        "Reproducible backtests with versioned configs, walk-forward analysis, paper-trading dry-runs, and live metrics — drawdown, PnL, slippage — exposed in real time.",
        "提供版本化配置的可复现回测、滚动前向分析、模拟盘试运行，以及回撤、盈亏、滑点等实时可观测的实盘指标。"
      ),
    },
    {
      q: t("What risk controls are built in?", "内置了哪些风控？"),
      a: t(
        "Hard drawdown limits, tiered stop-losses, per-symbol position caps, kill-switches, and rate-limit-aware order routing. Alerts go to your phone within seconds.",
        "硬性回撤上限、分级止损、单标的仓位上限、一键熔断，以及尊重交易所限频的订单路由。风险事件秒级推送到手机。"
      ),
    },
    {
      q: t("What does a typical timeline and pricing look like?", "典型周期和报价是怎样的？"),
      a: t(
        "Prototype sprints run 2–3 weeks at a fixed fee; production builds take 4–8+ weeks and are quoted after a short discovery. Ongoing operation is billed monthly.",
        "原型冲刺 2–3 周，固定费用；生产级交付 4–8+ 周，需求调研后报价。日常运行按月计费。"
      ),
    },
  ];



  return (
    <main className="bg-background text-foreground">
      <SEO title={t("Quant Trading Automation", "量化交易自动化")} path="/services/quant-trading" schema="Service" serviceName="Quant Trading Automation" description="Non-custodial, exchange-agnostic quant trading bots with modular strategies, risk-first execution, and full observability." />

      {/* ========== HERO (DARK) ========== */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroImage}
            alt=""
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay matching AI page hero */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, hsl(222 47% 6% / 0.92) 0%, hsl(222 47% 8% / 0.75) 55%, hsl(222 47% 6% / 0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60%) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative z-[2] text-center px-6 max-w-[1100px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              {t("Systems Online", "系统在线")}
            </span>
          </motion.div>

          <h1
            className="font-display font-bold text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            {t("Make transactions", "让交易")}
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t("more rational", "更加理性")}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 text-white/80 text-base md:text-lg"
          >
            {[
              t("Data-driven", "数据驱动"),
              t("Risk control first", "风控优先"),
              t("Observable live trading", "可观测实盘"),
            ].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>



        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 z-[2] flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      <PerformanceCurve />

      {/* ========== STATS — seamless under performance curve ========== */}
      <section className="pt-4 pb-20 sm:pb-24 bg-background relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 70% / 0.35), transparent 70%)" }}
        />
        <div className="section-wrap relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                className="group text-center p-5 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/40"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="block text-2xl font-extrabold tracking-tight text-foreground font-display">{s.value}</span>
                <span className="block mt-1.5 text-muted-foreground text-xs uppercase tracking-wider font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES (DARK) ========== */}
      <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 48%), transparent)" }}
        />
        <div className="section-wrap relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-3">
              {t("Core Capabilities", "核心能力")}
            </p>
            <h2 className="font-display text-primary-foreground" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {t("Trade Smarter with", "用数据驱动的量化机器人")}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent"> {t("Data-Driven Quant Bots", "更聪明地交易")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-sky-400/30 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2 leading-tight">{f.title}</h3>
                <p className="text-primary-foreground/60 text-[15px] leading-relaxed">{f.desc}</p>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-sky-400/0 transition-all duration-300 group-hover:bg-sky-400/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AUDIENCE / WHO IT'S FOR (LIGHT) ========== */}
      <section className="py-24 relative overflow-hidden bg-secondary/30 border-y border-border">
        <div
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 70% / 0.5), transparent 70%)" }}
        />
        <div className="section-wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-3">
              {t("Who It's For", "适用人群")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("Built for traders at", "为不同阶段的")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("every stage", "交易者而设计")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group relative flex flex-col p-7 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{a.icon}</div>
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wide">
                    {a.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 leading-tight">
                  {a.title}
                </h3>

                <p className="text-muted-foreground/80 text-[11px] uppercase tracking-[0.15em] font-semibold mb-2">
                  {t("Pain points", "痛点")}
                </p>
                <ul className="space-y-2 mb-5">
                  {a.pains.map((p) => (
                    <li key={p} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                      <span className="text-primary/60 mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-muted-foreground/80 text-[11px] uppercase tracking-[0.15em] font-semibold mb-2">
                    {t("Our solution", "我们的方案")}
                  </p>
                  <p className="text-foreground text-sm leading-relaxed font-medium">
                    {a.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IntegrationsShowcase />

      {/* ========== CTA ========== */}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="section-wrap relative text-center"
        >
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            {t("Ready to automate your trading?", "准备好让交易自动化了吗？")}
          </h2>
          <p className="text-white/70 max-w-[55ch] mx-auto mb-8 text-base md:text-lg">
            {t(
              "Tell us about your strategy and venues. We'll come back with an architecture, integration plan, and a pilot timeline.",
              "告诉我们你的策略和交易所。我们会回复一份架构方案、对接计划和试点时间表。"
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
            >
              {t("Talk to Us", "联系我们")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 transition-all no-underline"
            >
              {t("Other Services", "其他服务")}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default QuantTrading;
