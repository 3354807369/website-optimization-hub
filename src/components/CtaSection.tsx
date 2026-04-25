import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

interface CtaSectionProps {
  /** Main heading text (full sentence) */
  title: string;
  /** Supporting copy under the heading */
  description: string;
  /** Primary button label (defaults to "Start a Project") */
  primaryLabel?: string;
  /** Primary button destination (defaults to /contact) */
  primaryHref?: string;
  /** Secondary button label */
  secondaryLabel?: string;
  /** Secondary button destination */
  secondaryHref?: string;
}

/**
 * Shared dark CTA band used at the bottom of most pages.
 * Visual template is unified; copy and links are page-specific.
 */
const CtaSection = ({
  title,
  description,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) => {
  const { t } = useLang();

  return (
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
          {title}
        </h2>
        <p className="text-white/70 max-w-[55ch] mx-auto mb-8 text-base md:text-lg">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to={primaryHref}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
          >
            {primaryLabel ?? t("Start a Project", "启动项目")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              to={secondaryHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 transition-all no-underline"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
