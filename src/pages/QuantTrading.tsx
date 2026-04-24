import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import IntegrationsShowcase from "@/components/IntegrationsShowcase";
import PerformanceCurve from "@/components/PerformanceCurve";

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



  return (
    <main className="bg-background text-foreground">
      <SEO title={t("Quant Trading Automation", "量化交易自动化")} path="/services/quant-trading" />

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

      {/* ========== STATS (LIGHT) ========== */}
      <section className="py-20 relative overflow-hidden bg-secondary/30 border-y border-border">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 70% / 0.4), transparent 70%)" }}
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

      <IntegrationsShowcase />

      {/* ========== CTA ========== */}
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
            style={{ fontSize: "clamp(1.85rem, 5vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            {t("Ready to automate your trading?", "准备好让交易自动化了吗？")}
          </h2>
          <p className="text-white/70 max-w-[55ch] mx-auto text-base md:text-lg mb-10">
            {t(
              "Tell us about your strategy and venues. We'll come back with an architecture, integration plan, and a pilot timeline.",
              "告诉我们你的策略和交易所。我们会回复一份架构方案、对接计划和试点时间表。"
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-2xl shadow-sky-500/30"
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
