import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileCode2,
  ShieldCheck,
  Wallet,
  Layers,
  Coins,
  Activity,
  Lock,
  Gauge,
  GitBranch,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/blockchain-hero.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const Blockchain = () => {
  const { t } = useLang();

  const useCases = [
    {
      icon: FileCode2,
      title: t("Smart Contract Development", "智能合约开发"),
      desc: t(
        "Solidity contracts engineered for security, gas efficiency, and upgradeability — from tokens to complex protocol logic.",
        "兼顾安全、Gas 效率与可升级性的 Solidity 合约 —— 从代币到复杂协议逻辑。"
      ),
      tag: t("Contracts", "合约"),
    },
    {
      icon: ShieldCheck,
      title: t("Security Audits & Reviews", "安全审计与代码审查"),
      desc: t(
        "Manual review, fuzzing, invariant testing, and gas profiling — written reports with severity ratings and fixes.",
        "人工审查、模糊测试、不变量测试与 Gas 剖析 —— 出具分级修复报告。"
      ),
      tag: t("Audit", "审计"),
    },
    {
      icon: Wallet,
      title: t("Full-Stack dApps", "全栈 dApp 开发"),
      desc: t(
        "React + wagmi + viem frontends with RainbowKit / WalletConnect, indexers, and event-driven UX.",
        "基于 React + wagmi + viem 的前端，集成 RainbowKit / WalletConnect、索引器与事件驱动 UX。"
      ),
      tag: t("dApp", "dApp"),
    },
    {
      icon: Coins,
      title: t("Tokens & Protocol Design", "代币与协议设计"),
      desc: t(
        "ERC-20/721/1155 launches, vesting, staking, and incentive design — modeled before deployment.",
        "ERC-20/721/1155 发行、解锁、质押与激励设计 —— 部署前完整建模。"
      ),
      tag: t("Tokenomics", "代币经济"),
    },
  ];

  const capabilities = [
    {
      icon: ShieldCheck,
      title: t("Security-First Engineering", "安全优先工程"),
      desc: t("Foundry tests, invariants, slither, MythX, formal verification when it matters.", "Foundry 测试、不变量、Slither、MythX,关键场景做形式化验证。"),
    },
    {
      icon: Gauge,
      title: t("Gas Optimization", "Gas 优化"),
      desc: t("Storage packing, custom errors, assembly hot-paths — measured, not guessed.", "存储打包、自定义错误、关键路径汇编 —— 实测优化,不靠猜。"),
    },
    {
      icon: Layers,
      title: t("Multi-Chain EVM Deploys", "多链 EVM 部署"),
      desc: t("Ethereum, Base, Arbitrum, Optimism, Polygon — single codebase, consistent ops.", "Ethereum、Base、Arbitrum、Optimism、Polygon —— 同一代码库,统一运维。"),
    },
    {
      icon: Wallet,
      title: t("Wallet & Account Abstraction", "钱包与账户抽象"),
      desc: t("RainbowKit, WalletConnect, ERC-4337 smart accounts, gasless UX.", "RainbowKit、WalletConnect、ERC-4337 智能账户、Gasless 体验。"),
    },
    {
      icon: Activity,
      title: t("On-Chain Indexing & Analytics", "链上索引与分析"),
      desc: t("The Graph, Ponder, custom indexers, Dune dashboards.", "The Graph、Ponder、自建索引器、Dune 仪表盘。"),
    },
    {
      icon: Lock,
      title: t("Upgradeability & Governance", "可升级性与治理"),
      desc: t("UUPS / Transparent proxies, timelocks, multisigs, on-chain governance.", "UUPS / Transparent 代理、Timelock、多签、链上治理。"),
    },
  ];

  const workflow = [
    { num: "01", title: t("Scope", "立项"), desc: t("Threat model, spec, and economic assumptions.", "威胁建模、规格、经济假设。") },
    { num: "02", title: t("Design", "设计"), desc: t("Architecture, invariants, upgrade strategy.", "架构、不变量、升级策略。") },
    { num: "03", title: t("Build", "构建"), desc: t("Contracts + tests + frontend in lockstep.", "合约、测试、前端同步推进。") },
    { num: "04", title: t("Audit", "审计"), desc: t("Internal review, fuzzing, optional 3rd-party audit.", "内部审查、模糊测试,可选第三方审计。") },
    { num: "05", title: t("Ship", "上线"), desc: t("Mainnet deploy, monitoring, post-launch ops.", "主网部署、监控、上线后运营。") },
  ];

  const stack = [
    "Solidity", "Foundry", "Hardhat", "viem", "wagmi", "RainbowKit",
    "Ethers.js", "OpenZeppelin", "The Graph", "Ponder", "Tenderly", "Slither",
  ];

  const chains = [
    { name: "Ethereum", role: t("Mainnet · Settlement", "主网 · 结算") },
    { name: "Base", role: t("L2 · Consumer", "L2 · 消费级") },
    { name: "Arbitrum", role: t("L2 · DeFi", "L2 · DeFi") },
    { name: "Optimism", role: t("L2 · OP Stack", "L2 · OP Stack") },
    { name: "Polygon", role: t("Sidechain · Scale", "侧链 · 规模") },
    { name: "zkSync", role: t("L2 · ZK", "L2 · ZK") },
  ];

  // Animated demo: simulated audit pipeline
  const demoSteps = [
    { label: t("forge test", "forge test"), out: t("✓ 142 tests passed · 0 failed", "✓ 142 项测试通过 · 0 失败"), kind: "cmd" },
    { label: t("forge coverage", "forge coverage"), out: t("Lines 98.4% · Branches 96.1%", "行覆盖 98.4% · 分支覆盖 96.1%"), kind: "score" },
    { label: t("slither .", "slither ."), out: t("⚠ 2 informational · 0 high · 0 medium", "⚠ 2 项提示 · 0 高危 · 0 中危"), kind: "warn" },
    { label: t("invariant fuzzing", "invariant fuzzing"), out: t("✓ 50,000 runs · all invariants hold", "✓ 5 万次运行 · 不变量全部成立"), kind: "score" },
    { label: t("forge script Deploy --broadcast", "forge script Deploy --broadcast"), out: t("→ Base mainnet · contract verified ✅", "→ Base 主网 · 合约已验证 ✅"), kind: "deploy" },
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
      q: t("Can you also handle the audit, or just the build?", "你们做开发,也做审计吗?"),
      a: t(
        "Both. We deliver internally-audited contracts with Foundry test suites, fuzzing, and Slither reports. For high-value protocols we coordinate a 3rd-party audit (Spearbit, Trail of Bits, etc.) before mainnet.",
        "都做。我们交付的合约附带 Foundry 测试、模糊测试与 Slither 报告。高价值协议上线前可协调第三方审计 (Spearbit、Trail of Bits 等)。"
      ),
    },
    {
      q: t("Which chains do you support?", "支持哪些链?"),
      a: t(
        "EVM chains by default: Ethereum, Base, Arbitrum, Optimism, Polygon, zkSync. Same codebase, consistent deploy + monitoring pipeline. Other ecosystems on request.",
        "默认 EVM 系:Ethereum、Base、Arbitrum、Optimism、Polygon、zkSync。同一代码库,统一部署与监控流水线。其他生态可按需对接。"
      ),
    },
    {
      q: t("Do you take custody of keys or treasury?", "你们会托管私钥或金库吗?"),
      a: t(
        "Never. Deploys go through your multisig (Safe). We hand over verified contracts, deploy scripts, and an ops runbook — you control the keys.",
        "从不。部署通过你的多签 (Safe) 执行。我们交付经验证的合约、部署脚本与运维手册 —— 私钥始终由你掌控。"
      ),
    },
    {
      q: t("How long does a typical engagement take?", "一个典型项目周期多长?"),
      a: t(
        "MVP token + dApp: 3–4 weeks. Mid-complexity protocol with frontend: 6–10 weeks. Audit-only review: 1–3 weeks depending on scope.",
        "MVP 代币 + dApp:3-4 周。中等复杂度协议 + 前端:6-10 周。仅审计:1-3 周,视范围而定。"
      ),
    },
    {
      q: t("Are contracts upgradeable?", "合约是否可升级?"),
      a: t(
        "Your call. We support UUPS / Transparent proxies with timelocks and multisig governance, or fully immutable deploys when that's the better trust model.",
        "由你决定。我们支持 UUPS / Transparent 代理 + Timelock + 多签治理,也可选择完全不可升级的部署 —— 取决于哪种信任模型更合适。"
      ),
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO
        title={t("Blockchain & Web3", "区块链与 Web3")}
        description={t(
          "Smart contract development, security audits, and full-stack dApps on EVM chains by StarLoop.",
          "StarLoop 提供 EVM 链智能合约开发、安全审计与全栈 dApp。"
        )}
        path="/services/blockchain"
        schema="Service"
        serviceName="Blockchain & Web3"
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
                {t("Smart Contracts · Audits · dApps", "智能合约 · 审计 · dApp")}
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
              {t("On-chain code", "上链的代码")}
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {t("worth trusting", "值得被信任")}
              </span>
            </h1>

            <p className="text-white/75 max-w-[55ch] text-base md:text-lg mb-10">
              {t(
                "From smart contracts to full-stack dApps — we design, audit, and ship EVM protocols engineered for security, gas efficiency, and long-term operation.",
                "从智能合约到全栈 dApp —— 我们设计、审计并上线兼顾安全、Gas 效率与长期运营的 EVM 协议。"
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all no-underline shadow-lg shadow-sky-500/20"
              >
                {t("Start Your Protocol", "启动你的协议")}
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
              {t("What We Build", "我们构建什么")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("From token launches to", "从代币发行到")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("audited protocols", "经审计的协议")}
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

      {/* ============ CHAIN MATRIX ============ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="section-wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.2em] text-primary text-xs font-semibold mb-4">
              {t("Chain Coverage", "链支持")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.85rem, 4.5vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {t("One codebase,", "一份代码,")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("every major EVM chain", "覆盖所有主流 EVM 链")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {chains.map((c, i) => (
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
                  <Layers size={16} className="text-primary" strokeWidth={2.2} />
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
                    <span className="ml-2 text-white/50 text-[11px] font-mono">starloop-audit.sh</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300/80 text-[10px] font-mono uppercase tracking-wider">audit</span>
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
                    {t("security and scale", "安全与规模而生")}
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
              {t("From spec to mainnet, with", "从规格到主网,")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("zero surprises", "零意外")}
              </span>
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
        <div className="section-wrap relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-primary text-[11px] font-semibold mb-4">
              {t("Tools & Stack", "工具与技术栈")}
            </p>
            <h2
              className="font-display font-bold text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              {t("Built on the", "构建于")}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {t("modern Web3 stack", "现代 Web3 技术栈之上")}
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
                {t("serious protocols", "协议方的解答")}
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
            {t("Ready to ship on-chain?", "准备好上链交付了吗?")}
          </motion.h2>
          <p className="text-white/70 max-w-[55ch] mx-auto mb-8 text-base md:text-lg">
            {t(
              "Tell us about your protocol — we'll respond within one business day with a clear scope, threat model, and timeline.",
              "告诉我们你的协议 —— 我们将在一个工作日内回复,提供清晰的范围、威胁模型与时间表。"
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

export default Blockchain;
