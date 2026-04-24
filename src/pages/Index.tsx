import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO path="/" />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* background grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "var(--gradient-accent, hsl(var(--primary)))" }}
        />

        <div className="section-wrap relative text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-muted-foreground text-sm font-medium tracking-wide">
              {t("Coming Soon", "即将上线")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground mb-6"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {t("Something new is", "全新内容")}
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              {t("on the way", "正在路上")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-[55ch] mx-auto text-base md:text-lg mb-10"
          >
            {t(
              "We're rebuilding our homepage. In the meantime, explore our flagship offering — quant trading automation.",
              "我们正在重建主页。与此同时，欢迎了解我们的旗舰产品 — 量化交易自动化。"
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/services/quant-trading"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity no-underline"
            >
              {t("Explore Quant Trading Automation", "探索量化交易自动化")}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:border-primary/40 transition-colors no-underline"
            >
              {t("Contact Us", "联系我们")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
