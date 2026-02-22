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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="brand-card overflow-hidden"
            >
              <div className="aspect-video bg-secondary overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                <Link to={s.href} className="text-foreground underline font-semibold text-sm hover:opacity-80 transition-opacity">
                  Learn more →
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
