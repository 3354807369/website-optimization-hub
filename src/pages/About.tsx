import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import { useLang } from "@/i18n/LanguageContext";
import serviceQuant from "@/assets/service-quant.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceIT from "@/assets/service-it.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const About = () => {
  const { t } = useLang();

  // 👉 顺序决定客户感知（Web + IT 优先）
  const services = [
    {
      title: t("Web & Product Development", "网站与产品开发"),
      desc: t(
        "Modern websites and web products built to be fast, responsive, and ready for real business use.",
        "现代网站与Web产品开发，兼顾性能、响应式和实际业务落地。",
      ),
      img: serviceWeb,
      tag: "Web",
    },
    {
      title: t("IT Services & Support", "IT服务与支持"),
      desc: t(
        "Reliable IT setup, cloud systems, security, and ongoing support for business operations.",
        "可靠的IT系统搭建、云服务、安全与持续运维支持。",
      ),
      img: serviceIT,
      tag: "IT",
    },
    {
      title: t("AI & Automation Solutions", "AI与自动化解决方案"),
      desc: t(
        "Custom automation and AI tools to improve workflows and reduce manual work.",
        "通过自动化与AI工具优化流程、减少重复工作。",
      ),
      img: serviceAi,
      tag: "AI",
    },
    {
      title: t("Quant & Data Systems", "量化与数据系统"),
      desc: t(
        "Advanced systems for data-driven workflows, trading tools, and analytics.",
        "面向数据驱动的系统开发，包括交易工具与分析平台。",
      ),
      img: serviceQuant,
      tag: "Advanced",
    },
  ];

  const whyPoints = [
    {
      title: t("Business-Focused", "以业务为导向"),
      body: t(
        "We focus on solutions that support real business needs, not just technical complexity.",
        "我们专注于真正服务业务的解决方案，而不仅仅是技术复杂度。",
      ),
      icon: "🎯",
    },
    {
      title: t("Fast & Reliable", "快速且可靠"),
      body: t(
        "Projects are delivered with clean structure, stable performance, and practical usability.",
        "项目注重结构清晰、性能稳定和实际可用性。",
      ),
      icon: "⚡",
    },
    {
      title: t("Clear Communication", "沟通清晰"),
      body: t(
        "We keep the process simple, explain decisions clearly, and stay transparent.",
        "流程清晰，沟通透明，技术决策易于理解。",
      ),
      icon: "💬",
    },
    {
      title: t("Scalable Systems", "可扩展系统"),
      body: t(
        "From simple websites to complex systems, everything is built to grow with your business.",
        "从简单网站到复杂系统，都具备可扩展能力。",
      ),
      icon: "📈",
    },
    {
      title: t("Automation Ready", "支持自动化"),
      body: t(
        "We can integrate automation, AI tools, and workflows when your business needs it.",
        "在需要时可接入自动化、AI工具与流程系统。",
      ),
      icon: "🤖",
    },
    {
      title: t("Long-Term Support", "长期支持"),
      body: t(
        "We can support updates, improvements, and ongoing maintenance after launch.",
        "上线后可持续提供更新、优化与维护支持。",
      ),
      icon: "🤝",
    },
  ];

  const stats = [
    { value: "Web", label: t("Development", "开发") },
    { value: "IT", label: t("Services", "服务") },
    { value: "AI", label: t("Automation", "自动化") },
    { value: "SEO", label: t("Optimised", "优化") },
    { value: "Ongoing", label: t("Support", "支持") },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO
        title={t("About StarLoop — Web & IT Solutions", "关于 StarLoop — 网站与IT解决方案")}
        description={t(
          "StarLoop provides modern websites, IT services, automation, and digital systems for businesses.",
          "StarLoop 为企业提供现代网站、IT服务、自动化与数字系统解决方案。",
        )}
        path="/about"
        schema="AboutPage"
      />

      {/* HERO */}
      <section className="bg-foreground text-primary-foreground py-24">
        <div className="section-wrap">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold mb-4"
          >
            {t("A modern IT team", "现代IT团队")}
            <br />
            <span className="text-sky-300">{t("building real-world systems", "构建真实可用的系统")}</span>
          </motion.h1>

          <p className="text-primary-foreground/70 max-w-xl">
            {t(
              "From websites and IT systems to automation and AI solutions — we build reliable digital products that support real business needs.",
              "从网站与IT系统到自动化与AI解决方案，我们构建真正服务业务的数字产品。",
            )}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="section-wrap">
          <SectionHeading
            title={t("What we do", "我们做什么")}
            description={t(
              "A mix of web, IT, and advanced solutions designed for real-world use.",
              "结合网站、IT与进阶解决方案，服务真实业务场景。",
            )}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-5 rounded-xl">
                <img src={s.img} className="mb-4 rounded-lg" />
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20">
        <div className="section-wrap">
          <SectionHeading title={t("Why StarLoop", "为什么选择我们")} />

          <div className="grid md:grid-cols-3 gap-5">
            {whyPoints.map((p) => (
              <div key={p.title} className="p-5 border rounded-xl">
                <div>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="section-wrap grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-bold">{s.value}</div>
              <div className="text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title={t("Start your project with us", "开始你的项目")}
        description={t(
          "Need a website, IT system, or automation solution? Tell us your idea and we will help you build it.",
          "需要网站、IT系统或自动化方案？告诉我们你的想法，我们帮你实现。",
        )}
        primaryLabel={t("Start a Project", "开启合作")}
      />
    </main>
  );
};

export default About;
