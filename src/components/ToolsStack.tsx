import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

interface ToolsStackProps {
  eyebrow?: string;
  /** Heading prefix (plain text) */
  headingPrefix: string;
  /** Heading highlight (gradient text) */
  headingHighlight: string;
  items: string[];
}

/**
 * Shared "Tools & Stack" section used across service sub-pages.
 * Each page passes its own tech-stack chips for differentiation.
 */
const ToolsStack = ({ eyebrow, headingPrefix, headingHighlight, items }: ToolsStackProps) => {
  const { t } = useLang();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="section-wrap relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[0.25em] text-primary text-[11px] font-semibold mb-4">
            {eyebrow ?? t("Tools & Stack", "工具与技术栈")}
          </p>
          <h2
            className="font-display font-bold text-foreground"
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            {headingPrefix}{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {items.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04, ease }}
              className="group relative px-4 py-2 rounded-full bg-card border border-border text-foreground text-[13px] font-medium tracking-tight transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:text-primary cursor-default"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <span className="relative">{s}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;
