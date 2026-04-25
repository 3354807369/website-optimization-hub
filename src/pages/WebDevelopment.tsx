import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  ShoppingBag,
  LayoutDashboard,
  Rocket,
  Search,
  Smartphone,
  Gauge,
  Palette,
  ShieldCheck,
  Code2,
  Sparkles,
} from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/web-dev-hero.jpg";
import workMaisonNoir from "@/assets/work-maison-noir.png";
import workSparkleCo from "@/assets/work-sparkleco.png";
import workHavenCo from "@/assets/work-havenco.png";

const ease = [0.16, 1, 0.3, 1] as const;

const WebDevelopment = () => {
  const { t } = useLang();

  const useCases = [
    {
      icon: Globe,
      title: t("Brand & Marketing Sites", "品牌官网与营销站"),
      desc: t(
        "Conversion-focused landing pages and corporate sites with crisp design and SEO baked in.",
        "以转化为核心的落地页与企业官网，干净的视觉设计与内置 SEO。"
      ),
      tag: t("Marketing", "营销"),
    },
    {
      icon: LayoutDashboard,
      title: t("Web Applications & SaaS", "Web 应用与 SaaS"),
      desc: t(
        "Dashboards, internal tools, multi-tenant SaaS — built with modern frameworks and clean UX.",
        "仪表板、内部工具、多租户 SaaS —— 基于现代框架与清爽 UX 构建。"
      ),
      tag: t("SaaS", "SaaS"),
    },
    {
      icon: ShoppingBag,
      title: t("E-commerce & Payments", "电商与支付平台"),
      desc: t(
        "Storefronts, checkout flows, member systems, and Stripe / Paddle / Alipay integration.",
        "店铺前台、结账流程、会员系统，以及 Stripe / Paddle / 支付宝集成。"
      ),
      tag: t("Commerce", "电商"),
    },
    {
      icon: Rocket,
      title: t("Product MVPs & Prototypes", "产品 MVP 与原型"),
      desc: t(
        "Validate ideas fast with shippable prototypes — design, build, deploy in weeks.",
        "用可交付原型快速验证想法 —— 数周内完成设计、构建与上线。"
      ),
      tag: t("MVP", "MVP"),
    },
  ];

  const capabilities = [
    {
      icon: Palette,
      title: t("Design Systems", "设计系统"),
      desc: t("Tokenized themes, reusable components, dark/light modes.", "Token 化主题、可复用组件、深浅色模式。"),
    },
    {
      icon: Smartphone,
      title: t("Responsive & Accessible", "响应式与可访问"),
      desc: t("Mobile-first layouts, WCAG-friendly, keyboard navigable.", "移动优先布局、WCAG 友好、键盘可达。"),
    },
    {
      icon: Gauge,
      title: t("Performance & Core Web Vitals", "性能与 Core Web Vitals"),
      desc: t("LCP < 2.5s, CLS near zero, image & bundle optimization.", "LCP < 2.5s、CLS 趋近 0、图片与打包优化。"),
    },
    {
      icon: Search,
      title: t("SEO & Analytics", "SEO 与数据分析"),
      desc: t("Schema.org, sitemaps, GA4, Plausible, A/B testing.", "Schema.org、Sitemap、GA4、Plausible、A/B 测试。"),
    },
    {
      icon: ShieldCheck,
      title: t("Secure by Default", "默认安全"),
      desc: t("HTTPS, auth, RLS, secrets vault, audit logging.", "HTTPS、认证、RLS、密钥库、审计日志。"),
    },
    {
      icon: Code2,
      title: t("CMS & Backend Integrations", "CMS 与后端集成"),
      desc: t("Headless CMS, Supabase, REST/GraphQL APIs, webhooks.", "Headless CMS、Supabase、REST/GraphQL API、Webhook。"),
    },
  ];

  const workflow = [
    { num: "01", title: t("Discover", "发现"), desc: t("Goals, audience, brand, success metrics.", "目标、受众、品牌、成功指标。") },
    { num: "02", title: t("Design", "设计"), desc: t("Wireframes, visual direction, prototypes.", "线框图、视觉方向、原型。") },
    { num: "03", title: t("Build", "构建"), desc: t("Components, pages, integrations, CMS.", "组件、页面、集成、CMS。") },
    { num: "04", title: t("Launch", "上线"), desc: t("Performance audit, SEO, deploy, monitoring.", "性能审计、SEO、部署、监控。") },
    { num: "05", title: t("Iterate", "迭代"), desc: t("A/B tests, content updates, growth.", "A/B 测试、内容更新、增长。") },
  ];

  const stack = [
    "React", "Next.js", "Vue/Nuxt", "TypeScript", "Tailwind", "Framer Motion",
    "Supabase", "Postgres", "Stripe", "Vercel", "Cloudflare", "Sanity",
  ];

  const work = [
    {
      title: "Maison Noir",
      subtitle: t("Brunch & Coffee Concept", "早午餐与咖啡概念站"),
      desc: t(
        "A concept marketing site for a moody black-and-gold brunch brand — slow scroll storytelling, online reservations, and rich food photography.",
        "为暗黑金调早午餐品牌打造的概念营销站 —— 缓慢滚动叙事、在线预订与精致餐饮摄影。"
      ),
      tags: ["React", "Tailwind", "Framer Motion"],
      img: workMaisonNoir,
      url: "https://restaurant-showcase-demo-five.vercel.app/",
      tag: t("Concept · Brand Site", "概念 · 品牌官网"),
    },
    {
      title: "SparkleCo",
      subtitle: t("Home Cleaning Booking Concept", "家庭清洁预订概念站"),
      desc: t(
        "A trust-first booking flow concept for a home cleaning brand — 60-second checkout, live social-proof notifications, and same-day availability UX.",
        "为家庭清洁品牌设计的信任优先预订流程概念 —— 60 秒下单、实时社交证明提示、当日可约 UX。"
      ),
      tags: ["React", "Tailwind", "Booking Flow"],
      img: workSparkleCo,
      url: "https://clean-service-demo.vercel.app/",
      tag: t("Concept · Service Booking", "概念 · 服务预订"),
    },
    {
      title: "Haven Co",
      subtitle: t("Real Estate Showcase Concept", "房产展示概念站"),
      desc: t(
        "An editorial real-estate showcase concept — cinematic hero imagery, curated listings, and a fast filter-driven search for rentals and sales.",
        "编辑风房产展示概念站 —— 电影感主视觉、精选房源、租售一体的高速筛选搜索。"
      ),
      tags: ["React", "Tailwind", "Property Search"],
      img: workHavenCo,
      url: "https://cozy-home-showcase.vercel.app/",
      tag: t("Concept · Real Estate", "概念 · 房产展示"),
    },
  ];

  // Animated demo: simulated build pipeline
  const demoSteps = [
    { label: t("npm install", "npm install"), out: t("✓ 482 packages installed", "✓ 已安装 482 个依赖"), kind: "cmd" },
    { label: t("vite build", "vite build"), out: t("✓ built in 1.42s · bundle 184 KB gzip", "✓ 1.42 秒构建完成 · 包体 184 KB gzip"), kind: "cmd" },
    { label: t("lighthouse", "lighthouse"), out: t("Perf 99 · A11y 100 · SEO 100 · BP 100", "Perf 99 · A11y 100 · SEO 100 · BP 100"), kind: "score" },
    { label: t("deploy", "deploy"), out: t("→ https://yourbrand.com  · live in 12s ✅", "→ https://yourbrand.com  · 12 秒上线 ✅"), kind: "deploy" },
  ];

  const [visibleSteps, setVisibleSteps] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((v) => (v >= demoSteps.length ? 1 : v + 1));
    }, 2200);
    return () => clearInterval(interval);
  }, [demoSteps.length]);

  return (
    <main className="bg-background text-foreground">
      <SEO
        title={t("Web Development", "网站与 Web 应用开发")}
        description={t(
          "Custom websites, web apps, and e-commerce platforms by StarLoop — fast, accessible, and SEO-ready.",
          "StarLoop 定制网站、Web 应用与电商平台 —— 快速、可访问、SEO 就绪。"
        )}
        path="/services/web-development"
        schema="Service"
        serviceName="Web Development"
      />

      {/* ============ HERO ============ */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, hsl(222 47% 6% / 0.95) 0%, hsl(222 47% 8% / 0.7) 60%, hsl(222 47% 6% / 0.4) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(199 89% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 60%) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage: "radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)",
          }}
        />

        <div className="section-wrap relative z-[2]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-8"
            >
              <Sparkles size={13} className="text-sky-300" />
              <span className="text-white/85 text-sm font-medium tracking-wide">
                {t("Websites · Web Apps · E-commerce", "官网 · Web 应用 · 电商")}
              </span>
            </motion.div>

            <h1
              className="font-display font-bold text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 5rem)", lineHeight: 1.05,
                letterSpacing: "-0.035em", textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              }}
            >
              {t("Websites that", "让网页")}
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {t("ship and convert", "上线即转化")}
              </span>
            </h1>

            <p className="text-white/75 max-w-[55ch] text-base md:text-lg mb-10">
              {t(
                "From marketing sites to full SaaS platforms — we design, build, and ship modern web products engineered for speed, SEO, and growth.",
                "从营销官网到完整 SaaS 平台 —— 我们设计、构建并上线为速度、SEO 与增长而打造的现代 Web 产品。"
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
              >
                {t("Start Your Project", "启动你的项目")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 transition-all no-underline"
              >
                {t("All Services", "全部服务")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="section-wrap relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-14">
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("What We Build", "我们构建什么")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("From landing pages to", "从落地页到")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("full-scale platforms", "完整业务平台")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {useCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div
                    className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
                    style={{ background: "radial-gradient(circle, hsl(199 89% 60% / 0.25), transparent)" }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{
                        background: "linear-gradient(135deg, hsl(199 89% 95%), hsl(217 91% 97%))",
                        borderColor: "hsl(199 89% 48% / 0.2)",
                      }}
                    >
                      <Icon size={20} className="text-primary" strokeWidth={2.2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display text-lg font-bold text-foreground">{u.title}</h3>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                          {u.tag}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">{u.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="section-wrap relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
                {t("Concept Showcase", "概念展示")}
              </p>
              <h2
                className="font-display font-bold text-foreground"
                style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                {t("Demo concepts we've", "我们设计并上线的")}{" "}
                <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                  {t("designed and shipped", "概念演示项目")}
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground text-[15px] max-w-sm">
              {t(
                "Click-through demos showcasing our design and engineering. Brands shown are fictional — built to demonstrate what we can ship for you.",
                "可点击访问的概念演示,展示我们的设计与工程能力。所示品牌为虚构,旨在呈现我们能为你交付的效果。"
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {work.map((w, i) => (
              <motion.a
                key={w.title}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="group block no-underline text-inherit"
              >
                <div
                  className="relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 group-hover:border-primary/30"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={w.img}
                      alt={`${w.title} — ${w.subtitle}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-[11px] font-semibold border border-border">
                    {w.tag}
                  </span>
                  <div
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45"
                  >
                    <ArrowUpRight size={16} className="text-foreground transition-colors group-hover:text-primary-foreground" strokeWidth={2.2} />
                  </div>
                </div>
                <div className="pt-5 px-1">
                  <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {w.title}
                    </h3>
                    <span className="text-muted-foreground text-sm">{w.subtitle}</span>
                  </div>
                  <p className="text-muted-foreground text-[14px] leading-relaxed mb-4">
                    {w.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {w.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}

          </div>
        </div>
      </section>

      {/* ============ DEMO + CAPABILITIES ============ */}
      <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 48%), transparent)" }}
        />

        <div className="section-wrap relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            {/* Demo terminal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <div
                className="relative rounded-3xl border border-white/10 backdrop-blur-md p-5 md:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(0 0% 100% / 0.04) 0%, hsl(199 89% 48% / 0.05) 100%)",
                  boxShadow: "0 20px 60px -20px hsl(199 89% 48% / 0.3)",
                }}
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="ml-2 text-white/50 text-[11px] font-mono">starloop-deploy.sh</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300/80 text-[10px] font-mono uppercase tracking-wider">build</span>
                  </div>
                </div>

                <div className="space-y-3 min-h-[420px] font-mono text-[13px]">
                  <AnimatePresence mode="popLayout">
                    {demoSteps.slice(0, visibleSteps).map((step, idx) => (
                      <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                      >
                        <div className="flex items-center gap-2 text-sky-300/90">
                          <span className="text-white/30">$</span>
                          <span>{step.label}</span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className={`mt-1 ml-4 ${
                            step.kind === "score"
                              ? "text-emerald-300"
                              : step.kind === "deploy"
                              ? "text-cyan-300"
                              : "text-white/70"
                          }`}
                        >
                          {step.out}
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Capabilities */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-4">
                  {t("Capabilities", "核心能力")}
                </p>
                <h2
                  className="font-display font-bold text-white"
                  style={{ fontSize: "clamp(1.85rem, 4.2vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
                >
                  {t("Engineered for", "为")}{" "}
                  <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
                    {t("speed and scale", "速度与规模而生")}
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.06, ease }}
                      className="group relative p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                    >
                      <div
                        className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 pointer-events-none"
                        style={{ background: "radial-gradient(circle, hsl(199 89% 60% / 0.4), transparent)" }}
                      />
                      <div
                        className="relative w-9 h-9 rounded-lg flex items-center justify-center mb-3 border border-sky-400/20"
                        style={{ background: "linear-gradient(135deg, hsl(199 89% 48% / 0.15), hsl(217 91% 60% / 0.08))" }}
                      >
                        <Icon size={16} className="text-sky-300" strokeWidth={2.2} />
                      </div>
                      <h3 className="relative font-display text-[15px] font-bold text-white mb-1.5 leading-tight">{c.title}</h3>
                      <p className="relative text-white/60 text-[12.5px] leading-relaxed">{c.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DELIVERY PROCESS ============ */}
      <section className="py-24 bg-background">
        <div className="section-wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("Delivery Process", "交付流程")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("From idea to live site in weeks", "从想法到上线，仅需数周")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {workflow.map((w, i) => (
              <motion.div
                key={w.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="relative p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="font-display text-xs font-bold text-primary tracking-widest mb-2">{w.num}</div>
                <h3 className="font-display text-lg font-extrabold text-foreground mb-1">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECH STACK ============ */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="section-wrap relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-primary text-[11px] font-semibold mb-4">
              {t("Tools & Stack", "工具与技术栈")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              {t("Built with the", "构建于")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("modern web stack", "现代 Web 技术栈之上")}
              </span>
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {stack.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04, ease }}
                className="group relative px-4 py-2 rounded-full border border-border bg-card text-foreground text-[13px] font-medium tracking-tight transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:text-primary cursor-default"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <span className="relative">{s}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section
        className="py-24 relative overflow-hidden text-primary-foreground"
        style={{ background: "linear-gradient(135deg, hsl(222 47% 8%) 0%, hsl(217 60% 18%) 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(199 89% 48%), transparent)" }}
        />
        <div className="section-wrap relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}
          >
            {t("Ready to build your next site?", "准备好打造你的下一个网站？")}
          </motion.h2>
          <p className="text-white/70 max-w-[55ch] mx-auto mb-8 text-base md:text-lg">
            {t(
              "Tell us about your project — we'll respond within one business day with a clear scope and plan.",
              "告诉我们你的项目 —— 我们将在一个工作日内回复，提供清晰的范围与方案。"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
            >
              {t("Get a Quote", "获取报价")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 transition-all no-underline"
            >
              {t("Explore Services", "查看其他服务")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment;
