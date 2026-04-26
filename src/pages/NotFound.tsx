import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Mail } from "lucide-react";
import SEO from "@/components/SEO";

const ease = [0.16, 1, 0.3, 1] as const;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="404 — Page Not Found | StarLoop"
        description="The page you are looking for does not exist."
      />
      <main
        className="relative min-h-screen flex items-center justify-center overflow-hidden text-primary-foreground"
        style={{ background: "linear-gradient(135deg, hsl(222 47% 8%) 0%, hsl(217 60% 18%) 100%)" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 48%), transparent)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(230 80% 60%), transparent)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="section-wrap relative text-center py-24"
        >
          {/* Big 404 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
            className="font-display font-bold leading-none tracking-tighter mb-6"
            style={{
              fontSize: "clamp(6rem, 18vw, 14rem)",
              background: "linear-gradient(135deg, hsl(199 89% 58%), hsl(230 80% 70%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </motion.h1>

          <div className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-white/70 mb-6">
            {t("Lost in the loop", "迷失在回路中")}
          </div>

          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            {t("This page doesn't exist", "页面不存在")}
          </h2>

          <p className="text-white/60 max-w-[55ch] mx-auto mb-2 text-base md:text-lg">
            {t(
              "The signal got lost somewhere between the routes. Let's get you back on track.",
              "请求的页面无法找到，让我们带您回到正轨。",
            )}
          </p>
          <code className="inline-block mt-2 mb-8 px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-white/50">
            {location.pathname}
          </code>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
            >
              <Home size={16} />
              {t("Back to Home", "返回首页")}
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 transition-all no-underline"
            >
              <Mail size={16} />
              {t("Contact Us", "联系我们")}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-white/60 font-medium text-sm hover:text-white transition-all"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              {t("Go Back", "返回上一页")}
            </button>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default NotFound;
