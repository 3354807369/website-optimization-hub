import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  /** Words inside the title to highlight with a gradient. */
  highlight?: string;
  description?: ReactNode;
  align?: "left" | "center";
  /** Use light text colors on dark backgrounds. */
  invert?: boolean;
  className?: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  invert = false,
  className = "",
}: SectionHeadingProps) => {
  const isCenter = align === "center";

  // Split title around the highlight word(s) so we can wrap it in a gradient span
  const titleNode =
    typeof title === "string" && highlight && title.includes(highlight) ? (
      (() => {
        const [before, after] = title.split(highlight);
        return (
          <>
            {before}
            <span
              className={
                invert
                  ? "bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"
              }
            >
              {highlight}
            </span>
            {after}
          </>
        );
      })()
    ) : (
      title
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className={`${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} ${className}`}
    >
      {/* Eyebrow with decorative line */}
      <div
        className={`inline-flex items-center gap-3 mb-4 ${
          isCenter ? "justify-center w-full" : ""
        }`}
      >
        <span
          aria-hidden
          className={`h-px w-8 ${
            invert ? "bg-sky-300/70" : "bg-primary/60"
          }`}
        />
        <span
          className={`uppercase tracking-[0.22em] text-[11px] font-bold ${
            invert ? "text-sky-300" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
        <span
          aria-hidden
          className={`h-px w-8 ${
            invert ? "bg-sky-300/70" : "bg-primary/60"
          } ${isCenter ? "" : "hidden"}`}
        />
      </div>

      {/* Main title */}
      <h2
        className={`font-display font-bold ${
          invert ? "text-primary-foreground" : "text-foreground"
        }`}
        style={{
          fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
        }}
      >
        {titleNode}
      </h2>

      {description && (
        <p
          className={`mt-4 text-[15px] sm:text-base leading-relaxed ${
            invert ? "text-primary-foreground/70" : "text-muted-foreground"
          } ${isCenter ? "mx-auto" : ""}`}
          style={{ maxWidth: "60ch" }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
