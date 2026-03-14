import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { useLang } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const EMAIL = "Contact@starlooptech.com";
const PHONE = "0478164999";
const ease = [0.16, 1, 0.3, 1] as const;

interface FormState {
  name: string; email: string; company: string; role: string;
  needs: string[]; budget: string; timeline: string; message: string; consent: boolean;
}

const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", role: "", needs: [], budget: "", timeline: "", message: "", consent: false });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const copyEmail = async () => { try { await navigator.clipboard.writeText(EMAIL); toast.success(t("Email copied", "邮箱已复制")); } catch { window.prompt("Copy email:", EMAIL); } };
  const toggleNeed = (val: string) => setForm((f) => ({ ...f, needs: f.needs.includes(val) ? f.needs.filter((n) => n !== val) : [...f.needs, val] }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("contact-submit", { body: { name: form.name, email: form.email, company: form.company, role: form.role, needs: form.needs, budget: form.budget, timeline: form.timeline, message: form.message } });
      if (error) throw error;
      setSent(true);
      toast.success(t("Thanks! We'll get back to you within 24–48h.", "感谢！我们将在 24-48 小时内回复您。"));
      setForm({ name: "", email: "", company: "", role: "", needs: [], budget: "", timeline: "", message: "", consent: false });
    } catch { toast.error(t("Failed to submit. Please try emailing us directly.", "提交失败，请直接发送邮件。")); } finally { setSubmitting(false); }
  };

  const inputCls = "w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200";

  const needOptions = [
    t("Quant Trading Automation", "量化交易自动化"),
    t("Website / Landing Pages", "网站 / 落地页"),
    t("Blockchain / Web3", "区块链 / Web3"),
  ];

  return (
    <main className="bg-background text-foreground">
      <SEO title={t("Contact", "联系我们")} description={t("Get in touch with StarLoop.", "联系 StarLoop。")} path="/contact" />

      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />
        <div className="section-wrap relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4">{t("Get in Touch", "联系我们")}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="font-display font-bold text-primary-foreground mb-4" style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {t("Let's build", "一起构建")}<br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">{t("something great", "卓越产品")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease }} className="text-primary-foreground/70 max-w-[60ch] text-lg">
            {t("Trading automation, web experiences, or blockchain infrastructure — tell us what you need.", "交易自动化、网站体验或区块链基础设施 — 告诉我们您的需求。")}
          </motion.p>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: `📧 ${t("Email", "邮件")}`, content: (<><p className="text-muted-foreground text-sm mb-3 leading-relaxed">{t("Best way to reach us. We usually respond within 24–48h.", "最佳联系方式。通常 24-48 小时内回复。")}</p><div className="flex flex-wrap gap-2 items-center mt-auto"><code className="px-3 py-1.5 rounded-lg bg-secondary border border-border font-mono text-sm">{EMAIL}</code><button onClick={copyEmail} className="brand-btn-primary text-xs h-9 px-3">{t("Copy", "复制")}</button><a href={`mailto:${EMAIL}`} className="brand-btn-outline text-xs h-9 px-3 no-underline">{t("Open mail", "打开邮箱")}</a></div></>) },
            { title: `📞 ${t("Live Call", "电话沟通")}`, content: (<><p className="text-muted-foreground text-sm mb-3 leading-relaxed">{t("Prefer a quick call? Send us a note and we'll share our meeting link.", "更喜欢电话？发送消息，我们会分享会议链接。")}</p><div className="mt-auto"><a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Request a Call")}`} className="brand-btn-primary text-xs h-9 px-3 no-underline">{t("Request a call", "预约通话")}</a></div></>) },
            { title: `🌏 ${t("Working Hours", "工作时间")}`, content: <p className="text-muted-foreground text-sm leading-relaxed">{t("Remote-first. Typical hours across APAC / EU. We can align to your timezone.", "远程优先。覆盖亚太/欧洲时区，可以配合您的时区。")}</p> },
          ].map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease }} className="group relative p-6 flex flex-col rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/25 hover:shadow-lg" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-display font-bold text-lg mb-3">{card.title}</h3>
              {card.content}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-wrap grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <motion.form initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-5" style={{ boxShadow: "var(--shadow-card)" }} onSubmit={onSubmit}>
            <div>
              <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-2">{t("Your Project", "您的项目")}</p>
              <h2 className="font-display text-foreground font-bold" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>{t("Project Brief", "项目简介")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5"><span className="text-xs font-medium text-muted-foreground">{t("Name", "姓名")}</span><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder={t("Your name", "您的姓名")} /></label>
              <label className="flex flex-col gap-1.5"><span className="text-xs font-medium text-muted-foreground">{t("Work Email", "工作邮箱")}</span><input className={inputCls} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@company.com" /></label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5"><span className="text-xs font-medium text-muted-foreground">{t("Company", "公司")}</span><input className={inputCls} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder={t("Company / Team", "公司 / 团队")} /></label>
              <label className="flex flex-col gap-1.5"><span className="text-xs font-medium text-muted-foreground">{t("Role", "职位")}</span><input className={inputCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder={t("e.g. Founder, PM, Engineer", "如：创始人、PM、工程师")} /></label>
            </div>
            <fieldset className="border-none p-0 m-0 flex flex-col gap-2.5">
              <legend className="font-display font-bold mb-2 text-sm">{t("What do you need?", "您需要什么？")}</legend>
              {needOptions.map((n) => (
                <label key={n} className="inline-flex items-center gap-2.5 text-sm cursor-pointer group"><input type="checkbox" checked={form.needs.includes(n)} onChange={() => toggleNeed(n)} className="accent-primary w-4 h-4" /><span className="group-hover:text-primary transition-colors duration-200">{n}</span></label>
              ))}
            </fieldset>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5"><span className="text-xs font-medium text-muted-foreground">{t("Budget", "预算")}</span>
                <select className={inputCls} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                  <option value="">{t("Not sure yet", "暂不确定")}</option><option>{"< $5k"}</option><option>$5k – $15k</option><option>$15k – $40k</option><option>$40k+</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5"><span className="text-xs font-medium text-muted-foreground">{t("Timeline", "时间线")}</span>
                <select className={inputCls} value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}>
                  <option value="">{t("Flexible", "灵活")}</option><option>{t("2–4 weeks", "2-4 周")}</option><option>{t("4–8 weeks", "4-8 周")}</option><option>{t("8+ weeks", "8+ 周")}</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-1.5"><span className="text-xs font-medium text-muted-foreground">{t("Message", "留言")}</span><textarea className={`${inputCls} min-h-[120px] resize-y`} rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t("Describe your goals, constraints and anything helpful…", "描述您的目标、约束和任何有用的信息…")} /></label>
            <label className="inline-flex items-center gap-2.5 text-sm cursor-pointer"><input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} required className="accent-primary w-4 h-4" />{t("I understand StarLoop provides engineering services only (not investment advice).", "我了解 StarLoop 仅提供工程服务（非投资建议）。")}</label>
            <div className="flex items-center gap-3">
              <button type="submit" className="brand-btn-primary h-12 px-8" disabled={submitting}>{submitting ? t("Submitting…", "提交中…") : t("Send Brief →", "发送简介 →")}</button>
              {sent && <span className="text-sm font-semibold text-primary">{t("Thanks! We'll be in touch soon.", "感谢！我们会尽快联系您。")}</span>}
            </div>
            <p className="text-xs text-muted-foreground">{t("We minimize personal data collection.", "我们尽量减少个人数据收集。")}</p>
          </motion.form>

          <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease }} className="flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <h2 className="font-display font-bold text-lg mb-4">{t("What to Expect", "期望流程")}</h2>
              <ul className="brand-checklist text-sm">
                <li>{t("We'll review your brief and reply within 24–48h.", "我们将在 24-48 小时内审阅并回复。")}</li>
                <li>{t("If there's a fit, we schedule a 30-minute discovery call.", "如果合适，我们安排 30 分钟需求沟通。")}</li>
                <li>{t("We propose scope, milestones, and a realistic timeline.", "我们提出范围、里程碑和时间线。")}</li>
                <li>{t("Non-custodial by default; least-privilege API keys only.", "默认非托管；仅使用最小权限 API 密钥。")}</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/15">
              <h3 className="font-display font-bold text-lg mb-2">{t("Need an NDA?", "需要保密协议？")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t("No problem — send yours along or ask for our standard template.", "没问题 — 发送您的协议或索取我们的标准模板。")}</p>
            </div>
            <div className="p-6 rounded-2xl bg-foreground text-primary-foreground">
              <h3 className="font-display font-bold text-lg mb-2">{t("Prefer email?", "更喜欢邮件？")}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-3">{t("Send your context directly — attachments welcome.", "直接发送您的背景信息 — 欢迎附件。")}</p>
              <a href={`mailto:${EMAIL}`} className="text-primary-foreground font-semibold underline text-sm">{EMAIL}</a>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
};

export default Contact;
