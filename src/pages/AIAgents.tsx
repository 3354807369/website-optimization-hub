import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Users,
  TrendingUp,
  Workflow,
  Database,
  Plug,
  ShieldCheck,
  Gauge,
  MessageSquare,
  Bot,
  Sparkles,
} from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/ai-agent-hero.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const AIAgents = () => {
  const { t } = useLang();

  const useCases = [
    {
      icon: Headphones,
      title: t("Customer Support Agents", "客服 / 售后 Agent"),
      desc: t(
        "24/7 multi-turn dialogue, ticket routing, knowledge-base RAG, and seamless human handoff.",
        "7×24 多轮对话、工单分发、知识库 RAG、无缝转人工。"
      ),
      tag: t("Support", "客服"),
    },
    {
      icon: Users,
      title: t("Internal Knowledge Assistants", "企业内部助手"),
      desc: t(
        "Search docs, query systems, automate workflows — your team's senior assistant.",
        "搜索文档、查询系统、自动化流程 —— 团队的资深助手。"
      ),
      tag: t("Internal", "内部"),
    },
    {
      icon: TrendingUp,
      title: t("Sales & Marketing Agents", "销售 / 营销 Agent"),
      desc: t(
        "Lead qualification, smart booking, product recommendation, personalized outreach.",
        "线索筛选、智能预约、产品推荐、个性化触达。"
      ),
      tag: t("Sales", "销售"),
    },
    {
      icon: Workflow,
      title: t("Process Automation Agents", "业务流程自动化"),
      desc: t(
        "Multi-agent collaboration, data analysis, report generation, deep API integration.",
        "多代理协作、数据分析、报告生成、深度 API 集成。"
      ),
      tag: t("Automation", "自动化"),
    },
  ];

  const capabilities = [
    {
      icon: Database,
      title: t("Knowledge Grounding (RAG)", "知识库接入 (RAG)"),
      desc: t("Vector search across your docs, sites, and databases.", "向量检索文档、网站和数据库。"),
    },
    {
      icon: Plug,
      title: t("Tool & API Integration", "工具与 API 集成"),
      desc: t("Slack, CRMs, ticketing, custom APIs — agents take real action.", "Slack、CRM、工单系统、自定义 API —— 代理执行真实动作。"),
    },
    {
      icon: MessageSquare,
      title: t("Multi-Channel Deployment", "多渠道部署"),
      desc: t("Web chat, WeChat, WhatsApp, email, voice — one agent, every channel.", "网页、微信、WhatsApp、邮件、语音 —— 一个代理,全渠道。"),
    },
    {
      icon: ShieldCheck,
      title: t("Safety & Guardrails", "安全与护栏"),
      desc: t("PII redaction, access controls, audit logs, hallucination guards.", "PII 脱敏、权限控制、审计日志、幻觉防护。"),
    },
    {
      icon: Gauge,
      title: t("Observability", "可观测性"),
      desc: t("Conversation analytics, success rates, cost dashboards.", "对话分析、成功率、成本仪表板。"),
    },
    {
      icon: Bot,
      title: t("Multi-Agent Orchestration", "多代理协作"),
      desc: t("Specialized agents collaborate via planner/worker patterns.", "专业代理通过规划者/执行者模式协作。"),
    },
  ];

  const workflow = [
    { num: "01", title: t("Discover", "发现"), desc: t("Map workflows, success metrics, and risks.", "梳理流程、成功指标与风险。") },
    { num: "02", title: t("Design", "设计"), desc: t("Persona, tools, knowledge, fallback paths.", "人设、工具、知识、回退路径。") },
    { num: "03", title: t("Build", "构建"), desc: t("Prompts, RAG, integrations, evaluations.", "Prompt、RAG、集成、评估。") },
    { num: "04", title: t("Pilot", "试点"), desc: t("Shadow mode, A/B, supervised rollout.", "影子模式、A/B、监督上线。") },
    { num: "05", title: t("Operate", "运营"), desc: t("Monitor, iterate, retrain, scale.", "监控、迭代、再训练、扩展。") },
  ];

  const stack = [
    "OpenAI", "Claude", "Gemini", "Llama", "LangChain", "LangGraph",
    "Pinecone", "Weaviate", "pgvector", "Supabase", "Twilio", "WhatsApp",
  ];

  // Animated demo conversation
  const demoMessages = [
    { role: "user", text: t("How many orders shipped yesterday?", "昨天发了多少订单？") },
    { role: "agent", text: t("Checking your order system…", "正在查询你的订单系统…"), tool: t("Tool: query_orders", "工具: query_orders") },
    { role: "agent", text: t("142 orders shipped, total revenue $48,200. Want a breakdown by channel?", "已发 142 单,总收入 $48,200。需要按渠道拆分吗？") },
    { role: "user", text: t("Yes, and email it to the team.", "好的,并邮件发给团队。") },
    { role: "agent", text: t("Done. Report sent to ops@company.com ✅", "完成。报告已发送至 ops@company.com ✅"), tool: t("Tool: send_email", "工具: send_email") },
  ];

  const [visibleMsgs, setVisibleMsgs] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMsgs((v) => (v >= demoMessages.length ? 1 : v + 1));
    }, 2200);
    return () => clearInterval(interval);
  }, [demoMessages.length]);

  return (
    <main className="bg-background text-foreground">
      <SEO
        title={t("AI Agents", "AI 智能代理")}
        description={t(
          "Custom AI agents for customer support, internal assistance, sales, and process automation by StarLoop.",
          "StarLoop 定制 AI 智能代理：客服、内部助手、销售与流程自动化。"
        )}
        path="/services/ai-agents"
        schema="Service"
        serviceName="AI Agents & Automation"
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
                {t("Custom AI Agents for Business", "为企业定制的 AI 智能代理")}
              </span>
            </motion.div>

            <h1
              className="font-display font-bold text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              }}
            >
              {t("Build agents that", "构建真正能")}
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {t("actually do the work", "干活的智能代理")}
              </span>
            </h1>

            <p className="text-white/75 max-w-[55ch] text-base md:text-lg mb-10">
              {t(
                "From customer support to internal automation — we design, build, and operate custom AI agents tailored to your workflows and stack.",
                "从客服到内部自动化 —— 我们为你的业务流程和技术栈,设计、构建并运营定制 AI 代理。"
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
              >
                {t("Start Your Agent", "启动你的代理")}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("Use Cases", "应用场景")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("Agents tuned for", "为真实业务场景")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("real business workflows", "深度调优的代理")}
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
            {/* Demo conversation */}
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
                {/* terminal header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="ml-2 text-white/50 text-[11px] font-mono">starloop-agent.session</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300/80 text-[10px] font-mono uppercase tracking-wider">live</span>
                  </div>
                </div>

                <div className="space-y-3 min-h-[420px]">
                  <AnimatePresence mode="popLayout">
                    {demoMessages.slice(0, visibleMsgs).map((m, idx) => (
                      <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className="max-w-[85%]">
                          {m.role === "agent" && (
                            <div className="flex items-center gap-1.5 mb-1.5 text-white/40 text-[10px] font-mono uppercase tracking-wider">
                              <Bot size={10} />
                              {t("Agent", "代理")}
                            </div>
                          )}
                          <div
                            className={`px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed ${
                              m.role === "user"
                                ? "bg-sky-500/20 border border-sky-400/30 text-white rounded-tr-sm"
                                : "bg-white/[0.06] border border-white/10 text-white/90 rounded-tl-sm"
                            }`}
                          >
                            {m.text}
                          </div>
                          {m.tool && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-[10px] font-mono"
                            >
                              <span className="w-1 h-1 rounded-full bg-emerald-400" />
                              {m.tool}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* typing indicator */}
                  {visibleMsgs < demoMessages.length && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-1.5 pl-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-4">
                {t("Core Capabilities", "核心能力")}
              </p>
              <h2
                className="font-display font-bold text-primary-foreground mb-8"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                {t("Production-grade by default", "生产级别,开箱即用")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-sky-400/30 transition-all duration-300"
                    >
                      <Icon size={16} className="text-sky-300 mb-2" strokeWidth={2.2} />
                      <h3 className="font-semibold text-primary-foreground text-sm mb-1">{c.title}</h3>
                      <p className="text-primary-foreground/55 text-[12px] leading-relaxed">{c.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ WORKFLOW ============ */}
      <section className="py-24 bg-background relative">
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("Delivery Process", "交付流程")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("From idea to", "从想法到")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("operating agent", "运行中的代理")}
              </span>
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <div
              className="hidden lg:block absolute top-12 left-0 right-0 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(199 89% 48% / 0.3), hsl(199 89% 48% / 0.3), transparent)",
              }}
            />
            {workflow.map((w, i) => (
              <motion.div
                key={w.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="relative p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl mb-3 flex items-center justify-center font-display font-bold text-primary text-base relative z-10"
                  style={{
                    background: "linear-gradient(135deg, hsl(199 89% 95%), hsl(217 91% 97%))",
                    border: "1px solid hsl(199 89% 48% / 0.2)",
                  }}
                >
                  {w.num}
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-1.5">{w.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECH STACK ============ */}
      <section className="pt-4 pb-20 bg-background">
        <div className="section-wrap text-center">
          <p className="uppercase tracking-[0.2em] text-muted-foreground text-xs font-semibold mb-6">
            {t("Tools & Stack We Work With", "我们使用的工具与技术栈")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {stack.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
              >
                {s}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="section-wrap relative text-center"
        >
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            {t("Ready to deploy your first agent?", "准备好部署你的第一个代理了吗?")}
          </h2>
          <p className="text-white/70 max-w-[55ch] mx-auto mb-8 text-base md:text-lg">
            {t(
              "Tell us about your workflow. We'll come back with a use-case map, an architecture, and a 2–3 week pilot plan.",
              "告诉我们你的业务流程。我们会回复一份场景图、架构方案和 2-3 周试点计划。"
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
            >
              {t("Talk to Us", "联系我们")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm hover:bg-white/10 transition-all no-underline"
            >
              {t("Other Services", "其他服务")}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AIAgents;
