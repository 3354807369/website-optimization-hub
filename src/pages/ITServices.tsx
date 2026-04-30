import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Server,
  Cloud,
  ShieldCheck,
  Headphones,
  Network,
  Database,
  Activity,
  Lock,
  Cpu,
  GitBranch,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import SEO from "@/components/SEO";
import DeliveryProcess from "@/components/DeliveryProcess";
import ToolsStack from "@/components/ToolsStack";
import CtaSection from "@/components/CtaSection";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/it-services-hero.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const ITServices = () => {
  const { t } = useLang();

  const useCases = [
    {
      icon: Cloud,
      title: t("Cloud Infrastructure & Migration", "云基础设施与迁移"),
      desc: t(
        "Architect, migrate and operate workloads on AWS, GCP and Azure — secure landing zones, IaC, and cost-optimized environments.",
        "在 AWS、GCP、Azure 上架构、迁移并运维工作负载 —— 安全的落地区、IaC 与成本优化环境。"
      ),
      tag: t("Cloud", "云服务"),
    },
    {
      icon: Server,
      title: t("Managed IT & System Integration", "托管 IT 与系统集成"),
      desc: t(
        "Patch management, endpoint security, identity & access (Okta, Entra ID), backup, and end-to-end system integration across SaaS tools.",
        "补丁管理、端点安全、身份与访问 (Okta、Entra ID)、备份,以及跨 SaaS 工具的端到端系统集成。"
      ),
      tag: t("Managed", "托管"),
    },
    {
      icon: Network,
      title: t("Network & Security Operations", "网络与安全运营"),
      desc: t(
        "SD-WAN, zero-trust networking, firewall hardening, vulnerability scans and 24/7 SOC monitoring with clear runbooks.",
        "SD-WAN、零信任网络、防火墙加固、漏洞扫描,以及附带清晰运维手册的 24/7 SOC 监控。"
      ),
      tag: t("Security", "安全"),
    },
    {
      icon: Headphones,
      title: t("Service Desk & End-User Support", "服务台与终端用户支持"),
      desc: t(
        "Tiered helpdesk, device lifecycle management, onboarding/offboarding automation — measurable SLAs and CSAT.",
        "分级服务台、设备生命周期管理、入职/离职自动化 —— 可衡量的 SLA 与客户满意度。"
      ),
      tag: t("Support", "支持"),
    },
  ];

  const capabilities = [
    {
      icon: ShieldCheck,
      title: t("Security-First Operations", "安全优先运营"),
      desc: t("Zero-trust, MFA everywhere, EDR, SIEM, and aligned with ISO 27001 / SOC 2 controls.", "零信任、全员 MFA、EDR、SIEM,对齐 ISO 27001 / SOC 2 控制。"),
    },
    {
      icon: Activity,
      title: t("24/7 Monitoring & SRE", "7×24 监控与 SRE"),
      desc: t("Proactive alerting, on-call rotations, SLOs and post-incident reviews — uptime as a contract.", "主动告警、值班轮转、SLO 与事后复盘 —— 把可用性写入合同。"),
    },
    {
      icon: Cloud,
      title: t("Multi-Cloud & Hybrid", "多云与混合架构"),
      desc: t("AWS, GCP, Azure, on-prem and edge — one operating model across environments.", "AWS、GCP、Azure、本地与边缘 —— 跨环境统一运维模型。"),
    },
    {
      icon: Database,
      title: t("Backup & Disaster Recovery", "备份与灾备"),
      desc: t("3-2-1 backup strategy, immutable snapshots, tested DR with documented RPO / RTO targets.", "3-2-1 备份策略、不可变快照、定期演练的灾备,具明确 RPO / RTO 目标。"),
    },
    {
      icon: Lock,
      title: t("Identity & Access", "身份与访问"),
      desc: t("Single sign-on, MFA, SCIM provisioning, least-privilege access, audit trails.", "单点登录、MFA、SCIM 配置、最小权限访问、完整审计。"),
    },
    {
      icon: Cpu,
      title: t("Automation & DevOps", "自动化与 DevOps"),
      desc: t("Infrastructure-as-Code (Terraform), CI/CD pipelines, configuration management at scale.", "基础设施即代码 (Terraform)、CI/CD 流水线、规模化配置管理。"),
    },
  ];

  const workflow = [
    { num: "01", title: t("Assess", "评估"), desc: t("Audit current IT, risks, and business priorities.", "审计现有 IT、风险与业务优先级。") },
    { num: "02", title: t("Design", "设计"), desc: t("Target architecture, security model, runbooks.", "目标架构、安全模型、运维手册。") },
    { num: "03", title: t("Implement", "实施"), desc: t("Migrate, integrate, harden — minimal disruption.", "迁移、集成、加固 —— 最小化业务中断。") },
    { num: "04", title: t("Operate", "运营"), desc: t("24/7 monitoring, support and continuous patching.", "7×24 监控、支持与持续补丁。") },
    { num: "05", title: t("Improve", "持续优化"), desc: t("Quarterly reviews, cost optimization, roadmap.", "季度复盘、成本优化、路线图迭代。") },
  ];

  const stack = [
    "AWS", "GCP", "Azure", "Terraform", "Ansible", "Kubernetes",
    "Docker", "Datadog", "Grafana", "Okta", "Entra ID", "CrowdStrike",
  ];

  const coverage = [
    { name: t("Cloud", "云服务"), role: t("AWS · GCP · Azure", "AWS · GCP · Azure") },
    { name: t("Endpoint", "终端"), role: t("Windows · macOS · Linux", "Windows · macOS · Linux") },
    { name: t("Network", "网络"), role: t("SD-WAN · Zero Trust", "SD-WAN · 零信任") },
    { name: t("Identity", "身份"), role: t("SSO · MFA · SCIM", "SSO · MFA · SCIM") },
    { name: t("Security", "安全"), role: t("EDR · SIEM · SOC", "EDR · SIEM · SOC") },
    { name: t("Backup", "备份"), role: t("Immutable · Tested DR", "不可变 · 演练灾备") },
  ];

  // Animated demo: simulated NOC pipeline
  const demoSteps = [
    { label: t("status check --all", "status check --all"), out: t("✓ 142 services healthy · 0 alerts", "✓ 142 项服务健康 · 0 告警"), kind: "cmd" },
    { label: t("uptime --last-30d", "uptime --last-30d"), out: t("99.99% · SLA met", "99.99% · 达成 SLA"), kind: "score" },
    { label: t("vulnerability scan", "vulnerability scan"), out: t("⚠ 3 low · 0 critical · 0 high", "⚠ 3 项低危 · 0 严重 · 0 高危"), kind: "warn" },
    { label: t("backup verify", "backup verify"), out: t("✓ 24 / 24 snapshots restored OK", "✓ 24 / 24 快照恢复成功"), kind: "score" },
    { label: t("deploy patch --rolling", "deploy patch --rolling"), out: t("→ Production · 0 downtime ✅", "→ 生产环境 · 零停机 ✅"), kind: "deploy" },
  ];

  const [visibleSteps, setVisibleSteps] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((v) => (v >= demoSteps.length ? 1 : v + 1));
    }, 2200);
    return () => clearInterval(interval);
  }, [demoSteps.length]);

  const faqs = [
    {
      q: t("What size companies do you work with?", "你们服务什么规模的客户?"),
      a: t(
        "From 20-person startups scaling fast, to mid-market enterprises with 500+ employees. We tailor service tiers, SLAs and team allocation to your size and growth stage.",
        "从快速扩张的 20 人创业团队,到 500+ 员工的中型企业。我们根据规模与发展阶段定制服务层级、SLA 与团队配比。"
      ),
    },
    {
      q: t("Can you co-manage with our internal IT team?", "可以与内部 IT 团队协同管理吗?"),
      a: t(
        "Yes — co-managed IT is a core delivery model. We embed with your team, take on after-hours / overflow load, or fully own specific domains (cloud, security, helpdesk).",
        "可以 —— 协同托管是我们的核心交付模式。我们可融入您的团队,承担非工作时间/溢出负载,或完整负责特定领域 (云、安全、服务台)。"
      ),
    },
    {
      q: t("How do you handle security and compliance?", "你们如何处理安全与合规?"),
      a: t(
        "All engagements run under documented security policies aligned with ISO 27001 / SOC 2. We provide audit trails, access reviews, and assist with compliance evidence collection.",
        "所有合作遵循对齐 ISO 27001 / SOC 2 的书面安全政策。我们提供审计记录、访问复核,并协助合规证据收集。"
      ),
    },
    {
      q: t("What's a typical onboarding timeline?", "典型的接入周期多长?"),
      a: t(
        "Discovery & assessment in week 1, runbook + tooling rollout in weeks 2–3, full operational handover by week 4. Larger or regulated environments take 6–10 weeks.",
        "第 1 周完成评估与发现,第 2-3 周部署运维手册与工具,第 4 周完成完整运维移交。大型或受监管环境需 6-10 周。"
      ),
    },
    {
      q: t("Do you charge per device, per user, or fixed?", "按设备、按用户还是固定收费?"),
      a: t(
        "All three. Most managed clients prefer per-user / per-device pricing for predictability. Project work (migrations, integrations) is fixed-scope. We share a written quote within 48 hours of an intro call.",
        "三种均可。多数托管客户选择按用户/按设备计费以便预算可控。项目工作 (迁移、集成) 按固定范围报价。介绍通话后 48 小时内提供书面报价。"
      ),
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO
        title={t("Enterprise IT Services", "企业 IT 服务")}
        description={t(
          "Managed IT, cloud infrastructure, security operations and end-user support by StarLoop — production-grade IT services for growing teams.",
          "StarLoop 提供托管 IT、云基础设施、安全运营与终端用户支持 —— 为成长中的团队打造生产级 IT 服务。"
        )}
        path="/services/it-services"
        schema="Service"
        serviceName="Enterprise IT Services"
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
                {t("Cloud · Security · Support · DevOps", "云 · 安全 · 支持 · DevOps")}
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
              {t("Enterprise IT", "企业 IT")}
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {t("that just works", "稳定可靠")}
              </span>
            </h1>

            <p className="text-white/75 max-w-[55ch] text-base md:text-lg mb-10">
              {t(
                "From cloud migration to 24/7 monitoring, security operations and end-user support — we run the IT backbone so your team can focus on shipping product.",
                "从云迁移到 7×24 监控、安全运营与终端用户支持 —— 我们承担 IT 基础设施运营,让您的团队专注交付产品。"
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
              >
                {t("Start a Project", "启动项目")}
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
        <div className="section-wrap relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-14">
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("What We Deliver", "我们提供什么")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("From cloud strategy to", "从云战略到")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("daily IT operations", "日常 IT 运营")}
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

      {/* ============ COVERAGE MATRIX ============ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="section-wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("Coverage", "覆盖范围")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("One team,", "一支团队,")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("your entire IT estate", "管好整个 IT 资产")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {coverage.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="group relative p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 text-center"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center border border-sky-400/20"
                  style={{ background: "linear-gradient(135deg, hsl(199 89% 95%), hsl(217 91% 97%))" }}
                >
                  <Server size={16} className="text-primary" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-[15px] font-bold text-foreground mb-1">{c.name}</h3>
                <p className="text-muted-foreground text-[11px] leading-snug">{c.role}</p>
              </motion.div>
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
                    <span className="ml-2 text-white/50 text-[11px] font-mono">starloop-noc.sh</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300/80 text-[10px] font-mono uppercase tracking-wider">live</span>
                  </div>
                </div>

                <div className="space-y-3 min-h-[440px] font-mono text-[13px]">
                  <AnimatePresence mode="popLayout">
                    {demoSteps.slice(0, visibleSteps).map((step, idx) => {
                      const Icon =
                        step.kind === "warn"
                          ? AlertTriangle
                          : step.kind === "deploy"
                          ? GitBranch
                          : CheckCircle2;
                      return (
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
                            className={`mt-1 ml-4 flex items-start gap-2 ${
                              step.kind === "score"
                                ? "text-emerald-300"
                                : step.kind === "deploy"
                                ? "text-cyan-300"
                                : step.kind === "warn"
                                ? "text-amber-300"
                                : "text-white/70"
                            }`}
                          >
                            <Icon size={12} className="mt-1 shrink-0" />
                            <span>{step.out}</span>
                          </motion.div>
                        </motion.div>
                      );
                    })}
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
                    {t("uptime and trust", "稳定与信任而生")}
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
      <DeliveryProcess
        headingPrefix={t("From assessment to operations, with", "从评估到运营,")}
        headingHighlight={t("zero surprises", "零意外")}
        steps={workflow}
      />

      {/* ============ TECH STACK ============ */}
      <ToolsStack
        headingPrefix={t("Built on the", "构建于")}
        headingHighlight={t("modern IT stack", "现代 IT 技术栈之上")}
        items={stack}
      />

      {/* ============ FAQ ============ */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="section-wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-3">
              {t("FAQ", "常见问题")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("Answers for", "面向严肃")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("growing IT teams", "IT 团队的解答")}
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl flex flex-col gap-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-primary/70 font-mono text-xs mt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[16px] font-bold text-foreground leading-snug">{item.q}</h3>
                </div>
                <p className="pl-7 text-muted-foreground text-[14.5px] leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CtaSection
        title={t("Ready to streamline your IT?", "准备好优化 IT 运营了吗?")}
        description={t(
          "Tell us about your environment — we'll respond within one business day with a clear scope, security baseline, and timeline.",
          "告诉我们您的环境 —— 我们将在一个工作日内回复,提供清晰的范围、安全基线与时间表。"
        )}
        primaryLabel={t("Get a Quote", "获取报价")}
        secondaryLabel={t("Explore Services", "查看其他服务")}
        secondaryHref="/services"
      />
    </main>
  );
};

export default ITServices;
