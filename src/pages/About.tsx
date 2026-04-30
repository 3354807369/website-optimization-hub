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

  const services = [
    {
      title: t("Website Design", "网站设计"),
      desc: t(
        "Modern, responsive websites that help businesses look professional, attract customers, and grow online.",
        "现代响应式网站，帮助企业建立专业形象、吸引客户并在线增长。",
      ),
      img: serviceWeb,
      tag: "Core Service",
    },
    {
      title: t("Website Development", "网站开发"),
      desc: t(
        "Fast, scalable websites and web apps built with clean code, SEO-ready structure, and mobile-first layouts.",
        "使用清晰代码、SEO友好结构和移动端优先布局，构建快速、可扩展的网站与Web应用。",
      ),
      img: serviceWeb,
      tag: "Web",
    },
    {
      title: t("IT Services & Support", "IT服务与支持"),
      desc: t(
        "Reliable IT setup, troubleshooting, maintenance, cloud tools, and practical support for small businesses.",
        "为小型企业提供可靠的IT搭建、故障排查、系统维护、云工具和实际支持。",
      ),
      img: serviceIT,
      tag: "Core Service",
    },
    {
      title: t("Automation & AI Solutions", "自动化与AI解决方案"),
      desc: t(
        "Smart automation and AI tools that reduce manual work, improve workflows, and support business efficiency.",
        "通过智能自动化和AI工具减少重复工作、优化流程并提升业务效率。",
      ),
      img: serviceAi,
      tag: "Advanced",
    },
    {
      title: t("Quant & Data Systems", "量化与数据系统"),
      desc: t(
        "For advanced projects, we can build trading tools, dashboards, data pipelines, and automation systems.",
        "针对进阶项目，我们也可以构建交易工具、数据看板、数据管线和自动化系统。",
      ),
      img: serviceQuant,
      tag: "Specialised",
    },
  ];

  const whyPoints = [
    {
      title: t("Business-Focused Design", "以业务为中心的设计"),
      body: t(
        "We design around your customers, services, and business goals — not just visual style.",
        "我们围绕您的客户、服务和业务目标进行设计，而不只是追求视觉效果。",
      ),
      icon: "🎯",
    },
    {
      title: t("Fast & Mobile-Friendly", "快速且适配手机"),
      body: t(
        "Every website is built to load fast and work smoothly across desktop, tablet, and mobile.",
        "每个网站都注重加载速度，并在电脑、平板和手机上流畅运行。",
      ),
      icon: "⚡",
    },
    {
      title: t("Reliable IT Support", "可靠IT支持"),
      body: t(
        "From setup to maintenance, we help businesses keep their digital systems running smoothly.",
        "从系统搭建到后期维护，我们帮助企业保持数字系统稳定运行。",
      ),
      icon: "🛠️",
    },
    {
      title: t("SEO-Ready Structure", "SEO友好结构"),
      body: t(
        "We build clean page structures, metadata, and performance foundations to support search visibility.",
        "我们构建清晰页面结构、元数据和性能基础，帮助提升搜索可见度。",
      ),
      icon: "🔎",
    },
    {
      title: t("Automation Capable", "支持自动化"),
      body: t(
        "When needed, we can add automation, AI tools, dashboards, and workflow systems.",
        "如有需要，我们可以加入自动化、AI工具、数据看板和业务流程系统。",
      ),
      icon: "🤖",
    },
    {
      title: t("Long-Term Partnership", "长期合作"),
      body: t(
        "We can help with updates, improvements, maintenance, and future digital needs after launch.",
        "上线后，我们也可以继续提供更新、优化、维护和后续数字化支持。",
      ),
      icon: "🤝",
    },
  ];

  const stats = [
    { value: "Web", label: t("Design & Development", "设计与开发") },
    { value: "IT", label: t("Support & Services", "支持与服务") },
    { value: "AI", label: t("Automation Ready", "自动化能力") },
    { value: "SEO", label: t("Ready Structure", "SEO结构") },
    { value: "Ongoing", label: t("Support Available", "持续支持") },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO
        title={t("About StarLoop — Web Design & IT Services", "关于 StarLoop — 网站设计与IT服务")}
        description={t(
          "StarLoop provides modern website design, web development, IT services, automation, AI solutions, and specialised digital systems for businesses.",
          "StarLoop 为企业提供现代网站设计、网站开发、IT服务、自动化、AI解决方案和专业数字系统。",
        )}
        path="/about"
        schema="AboutPage"
      />

      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "var(--gradient-accent)" }}
        />

        <div className="section-wrap relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4"
          >
            {t("About StarLoop", "关于 StarLoop")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold text-primary-foreground mb-4"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {t("Web & IT solutions", "网站与IT解决方案")}
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              {t("for modern businesses", "服务现代企业")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-primary-foreground/70 max-w-[62ch] text-lg"
          >
            {t(
              "We design and build modern websites, provide reliable IT services, and help businesses improve efficiency with automation, AI, and specialised digital systems.",
              "我们提供现代网站设计与开发、可靠IT服务，并通过自动化、AI和专业数字系统帮助企业提升效率。",
            )}
          </motion.p>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("Our Services", "我们的服务")}
            title={t("Website and IT services first", "以网站与IT服务为核心")}
            highlight={t("Website and IT", "网站与IT")}
            description={t(
              "Our main focus is helping businesses build professional websites and reliable IT systems. For advanced needs, we also support automation, AI, and data-driven solutions.",
              "我们的核心是帮助企业搭建专业网站和可靠IT系统。对于进阶需求，我们也支持自动化、AI和数据驱动解决方案。",
            )}
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
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
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-wrap">
          <SectionHeading
            eyebrow={t("Why Choose Us", "为什么选择我们")}
            title={t("Built for real business needs", "为真实业务需求而做")}
            highlight={t("business needs", "业务需求")}
            description={t(
              "We focus on practical design, reliable delivery, and technology that helps businesses operate, grow, and improve.",
              "我们专注于实用设计、可靠交付，以及真正帮助企业运营、增长和提升效率的技术。",
            )}
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group relative p-6 border border-border rounded-2xl bg-card transition-all duration-300 hover:border-primary/25 hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-display text-lg font-bold mb-1.5">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 overflow-hidden text-primary-foreground"
        style={{
          background: "linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(217 50% 11%) 50%, hsl(222 47% 6%) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60%) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="section-wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span aria-hidden className="h-px w-8 bg-sky-300/70" />
              <span className="uppercase tracking-[0.22em] text-[11px] font-bold text-sky-300">
                {t("Our Approach", "我们的方式")}
              </span>
              <span aria-hidden className="h-px w-8 bg-sky-300/70" />
            </div>

            <h2
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(1.875rem, 4.5vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              {t("Simple process,", "流程简单，")}
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                {t(" reliable results", "结果可靠")}
              </span>
            </h2>

            <p className="mt-4 text-white/65 text-[15px] leading-relaxed max-w-[58ch] mx-auto">
              {t(
                "We make website, IT, and automation projects clear from the first conversation to launch and ongoing support.",
                "从第一次沟通到上线和后续支持，我们让网站、IT和自动化项目流程清晰可控。",
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                k: "01",
                title: t("Understand your business", "了解您的业务"),
                desc: t(
                  "We first understand your goals, customers, services, and current digital setup.",
                  "我们先了解您的目标、客户、服务内容和当前数字化情况。",
                ),
              },
              {
                k: "02",
                title: t("Design and build", "设计与开发"),
                desc: t(
                  "We create a clean design, build the website or IT solution, and keep you updated during the process.",
                  "我们进行清晰设计，开发网站或IT方案，并在过程中持续同步进度。",
                ),
              },
              {
                k: "03",
                title: t("Launch and support", "上线与支持"),
                desc: t(
                  "After launch, we can help with updates, fixes, improvements, automation, and future digital needs.",
                  "上线后，我们可以继续提供更新、修复、优化、自动化和未来数字化支持。",
                ),
              },
            ].map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/15 via-white/5 to-white/[0.03] transition-all duration-500 hover:from-sky-400/60 hover:via-blue-500/30"
              >
                <div className="relative h-full rounded-2xl bg-white/[0.04] backdrop-blur-md p-7 overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute -top-2 right-4 font-display font-black text-white/[0.06] select-none transition-colors duration-300 group-hover:text-sky-400/15"
                    style={{
                      fontSize: "5rem",
                      lineHeight: 1,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {p.k}
                  </span>

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_hsl(199_89%_55%)]" />
                      <span className="text-[10.5px] font-mono text-sky-300/70 tracking-[0.2em]">STEP {p.k}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2.5 leading-snug">{p.title}</h3>
                    <p className="text-white/65 text-[13.5px] leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="absolute bottom-0 left-7 right-7 h-[2px] rounded-full bg-gradient-to-r from-sky-400/0 via-sky-400/0 to-blue-500/0 transition-all duration-500 group-hover:from-sky-400/70 group-hover:via-sky-300/90 group-hover:to-blue-500/70" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span aria-hidden className="h-px w-8 bg-primary/60" />
              <span className="uppercase tracking-[0.22em] text-[11px] font-bold text-primary">
                {t("At a Glance", "一览")}
              </span>
              <span aria-hidden className="h-px w-8 bg-primary/60" />
            </div>

            <h2
              className="font-display font-bold text-foreground"
              style={{
                fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              {t("What we", "我们能")}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t(" deliver", "交付什么")}
              </span>
            </h2>

            <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed max-w-[58ch] mx-auto">
              {t(
                "A practical mix of website, IT, automation, AI, and specialised systems for businesses that need reliable digital support.",
                "为需要可靠数字支持的企业，提供网站、IT、自动化、AI和专业系统服务组合。",
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="group relative"
              >
                <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-200/80 via-border to-blue-200/40 transition-all duration-500 group-hover:from-sky-400/70 group-hover:to-blue-500/40">
                  <div
                    className="relative rounded-2xl bg-card overflow-hidden p-6 h-full transition-all duration-300"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <span
                      aria-hidden
                      className="absolute -top-2 right-3 font-display font-black text-foreground/[0.04] select-none transition-colors duration-300 group-hover:text-primary/10"
                      style={{
                        fontSize: "5rem",
                        lineHeight: 1,
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="absolute top-4 left-4 inline-flex h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_8px_hsl(var(--primary))]" />

                    <div className="relative pt-3">
                      <span
                        className="block font-display font-extrabold tabular-nums bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
                        style={{
                          fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        {s.value}
                      </span>
                      <span className="block mt-2 text-muted-foreground text-[10.5px] uppercase tracking-[0.18em] font-semibold">
                        {s.label}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-sky-400/0 via-primary/0 to-blue-500/0 transition-all duration-500 group-hover:from-sky-400/60 group-hover:via-primary/80 group-hover:to-blue-500/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={t("Start your website or IT project today", "立即开启您的网站或IT项目")}
        description={t(
          "Need a business website, IT support, automation, AI tools, or a specialised digital system? Tell us what you need and we will help you plan the next step.",
          "需要企业网站、IT支持、自动化、AI工具或专业数字系统？告诉我们您的需求，我们会帮您规划下一步。",
        )}
        primaryLabel={t("Start a Project", "开启合作")}
      />
    </main>
  );
};

export default About;
