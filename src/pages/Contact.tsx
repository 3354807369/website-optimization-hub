import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

const EMAIL = "Contact@starlooptech.com";
const ease = [0.16, 1, 0.3, 1] as const;

interface FormState {
  name: string;
  email: string;
  company: string;
  role: string;
  needs: string[];
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", company: "", role: "",
    needs: [], budget: "", timeline: "", message: "", consent: false,
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied: " + EMAIL);
    } catch {
      window.prompt("Copy email:", EMAIL);
    }
  };

  const toggleNeed = (val: string) => {
    setForm((f) => ({
      ...f,
      needs: f.needs.includes(val) ? f.needs.filter((n) => n !== val) : [...f.needs, val],
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("contact-submit", {
        body: {
          name: form.name, email: form.email, company: form.company,
          role: form.role, needs: form.needs, budget: form.budget,
          timeline: form.timeline, message: form.message,
        },
      });
      if (error) throw error;
      setSent(true);
      toast.success("Thanks! We'll get back to you within 24–48h.");
      setForm({ name: "", email: "", company: "", role: "", needs: [], budget: "", timeline: "", message: "", consent: false });
    } catch {
      toast.error("Failed to submit. Please try emailing us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200";

  return (
    <main className="bg-background text-foreground">
      <SEO title="Contact" description="Get in touch with StarLoop for quant trading automation, web development, or blockchain engineering." path="/contact" />

      {/* HERO BANNER */}
      <section className="relative bg-foreground text-primary-foreground py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--gradient-accent)" }} />

        <div className="section-wrap relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="uppercase tracking-[0.2em] text-primary-foreground/50 text-xs font-semibold mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold text-primary-foreground mb-4"
            style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Let's build
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              something great
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-primary-foreground/70 max-w-[60ch] text-lg"
          >
            Trading automation, web experiences, or blockchain infrastructure — tell us what you need.
          </motion.p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-16" style={{ background: "var(--gradient-section)" }}>
        <div className="section-wrap grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "📧 Email",
              content: (
                <>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">Best way to reach us. We usually respond within 24–48h on business days.</p>
                  <div className="flex flex-wrap gap-2 items-center mt-auto">
                    <code className="px-3 py-1.5 rounded-lg bg-secondary border border-border font-mono text-sm">{EMAIL}</code>
                    <button onClick={copyEmail} className="brand-btn-primary text-xs h-9 px-3">Copy</button>
                    <a href={`mailto:${EMAIL}`} className="brand-btn-outline text-xs h-9 px-3 no-underline">Open mail</a>
                  </div>
                </>
              ),
            },
            {
              title: "📞 Live Call",
              content: (
                <>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">Prefer a quick call? Send us a note and we'll share our meeting link.</p>
                  <div className="mt-auto">
                    <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Request a Call")}`} className="brand-btn-primary text-xs h-9 px-3 no-underline">
                      Request a call
                    </a>
                  </div>
                </>
              ),
            },
            {
              title: "🌏 Working Hours",
              content: <p className="text-muted-foreground text-sm leading-relaxed">Remote-first. Typical hours across APAC / EU. We can align to your timezone for delivery.</p>,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group relative p-6 flex flex-col rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/25 hover:shadow-lg"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-display font-bold text-lg mb-3">{card.title}</h3>
              {card.content}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary/40" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-background">
        <div className="section-wrap grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-5"
            style={{ boxShadow: "var(--shadow-card)" }}
            onSubmit={onSubmit}
          >
            <div>
              <p className="uppercase tracking-[0.15em] text-muted-foreground text-xs font-semibold mb-2">Your Project</p>
              <h2 className="font-display text-foreground font-bold" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}>
                Project Brief
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Name</span>
                <input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Work Email</span>
                <input className={inputCls} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@company.com" />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Company</span>
                <input className={inputCls} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company / Team" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Role</span>
                <input className={inputCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="e.g. Founder, PM, Engineer" />
              </label>
            </div>

            <fieldset className="border-none p-0 m-0 flex flex-col gap-2.5">
              <legend className="font-display font-bold mb-2 text-sm">What do you need?</legend>
              {["Quant Trading Automation", "Website / Landing Pages", "Blockchain / Web3"].map((n) => (
                <label key={n} className="inline-flex items-center gap-2.5 text-sm cursor-pointer group">
                  <input type="checkbox" checked={form.needs.includes(n)} onChange={() => toggleNeed(n)} className="accent-primary w-4 h-4" />
                  <span className="group-hover:text-primary transition-colors duration-200">{n}</span>
                </label>
              ))}
            </fieldset>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Budget</span>
                <select className={inputCls} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                  <option value="">Not sure yet</option>
                  <option>{"< $5k"}</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $40k</option>
                  <option>$40k+</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted-foreground">Timeline</span>
                <select className={inputCls} value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}>
                  <option value="">Flexible</option>
                  <option>2–4 weeks</option>
                  <option>4–8 weeks</option>
                  <option>8+ weeks</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-muted-foreground">Message</span>
              <textarea className={`${inputCls} min-h-[120px] resize-y`} rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your goals, constraints and anything helpful…" />
            </label>

            <label className="inline-flex items-center gap-2.5 text-sm cursor-pointer">
              <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} required className="accent-primary w-4 h-4" />
              I understand StarLoop provides engineering services only (not investment advice).
            </label>

            <div className="flex items-center gap-3">
              <button type="submit" className="brand-btn-primary h-12 px-8" disabled={submitting}>
                {submitting ? "Submitting…" : "Send Brief →"}
              </button>
              {sent && <span className="text-sm font-semibold text-primary">Thanks! We'll be in touch soon.</span>}
            </div>

            <p className="text-xs text-muted-foreground">We minimize personal data collection. Please avoid sharing secrets or API keys here.</p>
          </motion.form>

          {/* Right aside */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="flex flex-col gap-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <h2 className="font-display font-bold text-lg mb-4">What to Expect</h2>
              <ul className="brand-checklist text-sm">
                <li>We'll review your brief and reply within 24–48h.</li>
                <li>If there's a fit, we schedule a 30-minute discovery call.</li>
                <li>We propose scope, milestones, and a realistic timeline.</li>
                <li>Non-custodial by default; least-privilege API keys only.</li>
                <li>Nothing here is investment advice.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/15">
              <h3 className="font-display font-bold text-lg mb-2">Need an NDA?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">No problem — send yours along or ask for our standard template.</p>
            </div>

            <div className="p-6 rounded-2xl bg-foreground text-primary-foreground">
              <h3 className="font-display font-bold text-lg mb-2">Prefer email?</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-3">
                Send your context directly — attachments welcome.
              </p>
              <a href={`mailto:${EMAIL}`} className="text-primary-foreground font-semibold underline text-sm">{EMAIL}</a>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
};

export default Contact;
