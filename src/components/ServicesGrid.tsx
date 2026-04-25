import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import serviceQuant from "@/assets/service-quant.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBlockchain from "@/assets/service-blockchain.jpg";

const ServicesGrid = () => {
  const { t } = useLang();

  const services = [
    { title: t("Quant Trading Automation", "量化交易自动化"), desc: t("Non-custodial bots, modular strategies, risk controls.", "非托管机器人、模块化策略、风险控制。"), img: serviceQuant, href: "/services/quant-trading", tag: "Trading" },
    { title: t("AI Agents & Automation", "AI 智能代理与自动化"), desc: t("LLM apps, agents, RAG pipelines, workflow automation.", "大模型应用、智能代理、RAG 管道、流程自动化。"), img: serviceAi, href: "/services/ai-agents", tag: "AI / ML" },
    { title: t("Website & Landing Pages", "网站与落地页"), desc: t("Performance-first sites and marketing pages with SEO.", "性能优先的网站与营销页面，内置 SEO。"), img: serviceWeb, href: "/services/web-development", tag: "Web" },
    { title: t("Blockchain & Web3", "区块链与 Web3"), desc: t("Smart contracts, audits, full-stack dApps on EVM chains.", "智能合约、审计、EVM 全栈 dApp 集成。"), img: serviceBlockchain, href: "/services/blockchain", tag: "Web3" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={t("Our Services", "我们的服务")}
          title={t("What We Build", "我们构建什么")}
          highlight={t("We Build", "构建什么")}
          description={t("From AI applications to production-grade websites and on-chain systems — engineered to ship.", "从 AI 应用到生产级网站与链上系统 — 为上线而工程化。")}
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.article key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/25" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="aspect-[16/10] bg-secondary overflow-hidden relative">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold border border-border">{s.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to={s.href} className="inline-flex items-center gap-1.5 text-foreground font-semibold text-sm hover:text-primary transition-colors duration-200">
                  {t("Learn more", "了解更多")}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
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
