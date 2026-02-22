import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedKPIProps {
  label: string;
  value: string;
  positive?: boolean;
  index: number;
}

/** Parse a formatted string like "+12.3%", "0.85", "23 / 30d" into parts we can animate */
function parseValue(str: string) {
  const match = str.match(/^([+\-]?)(\d+\.?\d*)(.*)/);
  if (!match) return null;
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
    decimals: match[2].includes(".") ? match[2].split(".")[1].length : 0,
  };
}

const AnimatedKPI = ({ label, value, positive, index }: AnimatedKPIProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const [started, setStarted] = useState(false);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || !parsed) return;
    const duration = 1400;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * parsed!.number;
      setDisplay(`${parsed!.prefix}${current.toFixed(parsed!.decimals)}${parsed!.suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [started, parsed?.number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative border border-border rounded-xl bg-card p-3 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 100%, hsl(var(--primary) / 0.06), transparent 70%)" }} />

      <div className="relative">
        <div className="text-xs font-semibold text-muted-foreground tracking-wide">
          {label}
        </div>
        <div
          className={`mt-1.5 text-xl font-extrabold tabular-nums ${
            positive === false ? "text-destructive" : "text-foreground"
          }`}
        >
          {value === "—" ? "—" : display}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedKPI;
