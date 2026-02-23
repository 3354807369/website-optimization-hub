import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceDev from "@/assets/service-dev.jpg";

const services = [
  {
    title: "AI Application R&D",
    desc: "LLM apps, agents, quant research tooling, backtesting and monitoring.",
    img: serviceAi,
    href: "/services#ai",
    tag: "AI / ML",
  },
  {
    title: "Website & Landing Pages",
    desc: "Performance-first sites and marketing pages. Nuxt/Vue/React, Tailwind, SEO.",
    img: serviceWeb,
    href: "/services#web",
    tag: "Web",
  },
  {
    title: "Software & Blockchain",
    desc: "APIs, dashboards, trading tools, smart contracts and on-chain analytics.",
    img: serviceDev,
    href: "/services#dev",
    tag: "Dev",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-background py-20">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-3">
            Our Services
          </p>
          <h2
            className="font-display text-foreground"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            What We Build
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/25"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-[16/10] bg-secondary overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold border border-border">
                  {s.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <Link
                  to={s.href}
                  className="inline-flex items-center gap-1.5 text-foreground font-semibold text-sm hover:text-primary transition-colors duration-200"
                >
                  Learn more
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
