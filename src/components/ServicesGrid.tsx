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
  },
  {
    title: "Website & Landing Pages",
    desc: "Performance-first sites and marketing pages. Nuxt/Vue/React, Tailwind, SEO.",
    img: serviceWeb,
    href: "/services#web",
  },
  {
    title: "Software & Blockchain",
    desc: "APIs, dashboards, trading tools, smart contracts and on-chain analytics.",
    img: serviceDev,
    href: "/services#dev",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-background py-16">
      <div className="section-wrap">
        <p className="uppercase tracking-[0.12em] text-muted-foreground text-sm mb-2">Our Services</p>
        <h2 className="section-title mb-6" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)" }}>
          What We Build
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="brand-card overflow-hidden group"
            >
              <div className="aspect-video bg-secondary overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                <Link to={s.href} className="inline-flex items-center gap-1 text-foreground font-semibold text-sm hover:opacity-80 transition-all duration-200 group-hover:gap-2">
                  Learn more <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
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
