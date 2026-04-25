import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

export type DeliveryStep = {
  num: string;
  title: string;
  desc: string;
};

interface DeliveryProcessProps {
  /** Eyebrow label above heading */
  eyebrow?: string;
  /** Heading prefix (plain text) */
  headingPrefix: string;
  /** Heading highlight (gradient text) */
  headingHighlight: string;
  steps: DeliveryStep[];
}

/**
 * Shared "Delivery Process" section used across service sub-pages
 * (AI Agents / Web Development / Blockchain).
 * Each page passes its own steps + heading copy for differentiation.
 */
const DeliveryProcess = ({ eyebrow, headingPrefix, headingHighlight, steps }: DeliveryProcessProps) => {
  const { t } = useLang();

  return (
    <section className="py-24 bg-background relative">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
            {eyebrow ?? t("Delivery Process", "交付流程")}
          </p>
          <h2
            className="font-display font-bold text-foreground"
            style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            {headingPrefix}{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(199 89% 48% / 0.3), hsl(199 89% 48% / 0.3), transparent)",
            }}
          />
          {steps.map((w, i) => (
            <motion.div
              key={w.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="relative p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="w-11 h-11 rounded-xl mb-3 flex items-center justify-center font-display font-bold text-primary text-base relative z-10"
                style={{
                  background: "linear-gradient(135deg, hsl(199 89% 95%), hsl(217 91% 97%))",
                  border: "1px solid hsl(199 89% 48% / 0.2)",
                }}
              >
                {w.num}
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-1.5">{w.title}</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;
