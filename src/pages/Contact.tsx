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

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("contact-submit", {
        body: {
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role,
          needs: form.needs,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
        },
      });
      if (error) throw error;
      setSent(true);
      toast.success("Thanks! We'll get back to you within 24–48h.");
      setForm({ name: "", email: "", company: "", role: "", needs: [], budget: "", timeline: "", message: "", consent: false });
    } catch (err: any) {
      toast.error("Failed to submit. Please try emailing us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow duration-200";

  return (
    <main className="bg-background text-foreground">
      <SEO title="Contact" description="Get in touch with StarLoop for quant trading automation, web development, or blockchain engineering." path="/contact" />
      {/* HERO */}
      <section className="py-16 text-center">
        <div className="section-wrap">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold mb-2.5"
            style={{ fontSize: "clamp(2.125rem, 6vw, 2.875rem)" }}
          >
            Contact StarLoop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-muted-foreground max-w-[70ch] mx-auto"
          >
            Tell us about your use case — trading automation for digital assets, fast modern websites, or blockchain infrastructure.
          </motion.p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-5 mb-4">
        <div className="section-wrap grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Email",
              content: (
                <>
                  <p className="text-muted-foreground text-sm mb-2">Best way to reach us. We usually respond within 24–48h on business days.</p>
                  <div className="flex flex-wrap gap-2 items-center mt-auto">
                    <code className="brand-pill font-mono text-sm">{EMAIL}</code>
                    <button onClick={copyEmail} className="brand-btn-primary text-xs h-9 px-3">Copy</button>
                    <a href={`mailto:${EMAIL}`} className="brand-btn-outline text-xs h-9 px-3 no-underline">Open mail</a>
                  </div>
                </>
              ),
            },
            {
              title: "Live Call",
              content: (
                <>
                  <p className="text-muted-foreground text-sm mb-2">Prefer a quick call? Send us a note and we'll share our meeting link.</p>
                  <div className="mt-auto">
                    <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Request a Call")}`} className="brand-btn-primary text-xs h-9 px-3 no-underline">
                      Request a call
                    </a>
                  </div>
                </>
              ),
            },
            {
              title: "Working Hours",
              content: <p className="text-muted-foreground text-sm">Remote-first. Typical hours across APAC / EU. We can align to your timezone for delivery.</p>,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="brand-card p-4 flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="font-display font-bold text-lg">{card.title}</h3>
              {card.content}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-4">
        <div className="section-wrap grid grid-cols-1 lg:grid-cols-2 gap-5">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="brand-card p-5 flex flex-col gap-4"
            onSubmit={onSubmit}
          >
            <h2 className="section-title">Project Brief</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Name</span>
                <input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Work Email</span>
                <input className={inputCls} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@company.com" />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Company</span>
                <input className={inputCls} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company / Team" />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Role</span>
                <input className={inputCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="e.g. Founder, PM, Engineer" />
              </label>
            </div>

            <fieldset className="border-none p-0 m-0 flex flex-col gap-2">
              <legend className="font-bold mb-1.5 text-sm">What do you need?</legend>
              {["Quant Trading Automation", "Website / Landing Pages", "Blockchain / Web3"].map((n) => (
                <label key={n} className="inline-flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form.needs.includes(n)} onChange={() => toggleNeed(n)} className="accent-primary" />
                  {n}
                </label>
              ))}
            </fieldset>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Budget</span>
                <select className={inputCls} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                  <option value="">Not sure yet</option>
                  <option>{"< $5k"}</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $40k</option>
                  <option>$40k+</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Timeline</span>
                <select className={inputCls} value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}>
                  <option value="">Flexible</option>
                  <option>2–4 weeks</option>
                  <option>4–8 weeks</option>
                  <option>8+ weeks</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Message</span>
              <textarea className={`${inputCls} min-h-[120px] resize-y`} rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your goals, constraints and anything helpful…" />
            </label>

            <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} required className="accent-primary" />
              I understand StarLoop provides engineering services only (not investment advice).
            </label>

            <div className="flex items-center gap-2.5">
              <button type="submit" className="brand-btn-primary" disabled={submitting}>
                {submitting ? "Submitting…" : "Send"}
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
            className="brand-card p-5 flex flex-col gap-4"
          >
            <h2 className="section-title">What to Expect</h2>
            <ul className="brand-checklist text-sm">
              <li>We'll review your brief and reply within 24–48h.</li>
              <li>If there's a fit, we schedule a 30-minute discovery call.</li>
              <li>We propose scope, milestones, and a realistic timeline.</li>
              <li>Non-custodial by default; least-privilege API keys only.</li>
              <li>Nothing here is investment advice.</li>
            </ul>

            <h3 className="font-display font-bold mt-4">Need an NDA?</h3>
            <p className="text-muted-foreground text-sm">No problem — send yours along or ask for our standard template.</p>
          </motion.aside>
        </div>
      </section>

      {/* CTA */}
      <section className="py-9 text-center">
        <div className="section-wrap">
          <h2 className="font-display font-bold mb-2" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>
            Prefer email?
          </h2>
          <p className="text-muted-foreground">
            Send your context to{" "}
            <a href={`mailto:${EMAIL}`} className="text-primary font-semibold underline">{EMAIL}</a>{" "}
            — attachments welcome.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
