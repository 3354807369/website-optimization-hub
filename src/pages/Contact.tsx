import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const EMAIL = "Contact@starlooptech.com";

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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New inquiry from ${form.name || "Website"}`;
    const parts = [
      `Name: ${form.name}`, `Email: ${form.email}`, `Company: ${form.company}`,
      `Role: ${form.role}`, `Needs: ${form.needs.join(", ") || "—"}`,
      `Budget: ${form.budget || "—"}`, `Timeline: ${form.timeline || "—"}`, "", form.message || "",
    ];
    const body = encodeURIComponent(parts.join("\n"));
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
    window.location.href = url;
  };

  const inputCls = "w-full bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="py-16 text-center">
        <div className="section-wrap">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold mb-2.5"
            style={{ fontSize: "clamp(2.125rem, 6vw, 2.875rem)" }}
          >
            Contact StarLoop
          </motion.h1>
          <p className="text-muted-foreground max-w-[70ch] mx-auto">
            Tell us about your use case — trading automation for digital assets, fast modern websites, or blockchain infrastructure.
          </p>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-5 mb-4">
        <div className="section-wrap grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="brand-card p-4 flex flex-col">
            <h3 className="font-display font-bold text-lg">Email</h3>
            <p className="text-muted-foreground text-sm mb-2">Best way to reach us. We usually respond within 24–48h on business days.</p>
            <div className="flex flex-wrap gap-2 items-center mt-auto">
              <code className="brand-pill font-mono text-sm">{EMAIL}</code>
              <button onClick={copyEmail} className="brand-btn-primary text-xs h-9 px-3">Copy</button>
              <a href={`mailto:${EMAIL}`} className="brand-btn-outline text-xs h-9 px-3 no-underline">Open mail</a>
            </div>
          </div>
          <div className="brand-card p-4 flex flex-col">
            <h3 className="font-display font-bold text-lg">Live Call</h3>
            <p className="text-muted-foreground text-sm mb-2">Prefer a quick call? Send us a note and we'll share our meeting link.</p>
            <div className="mt-auto">
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Request a Call")}`} className="brand-btn-primary text-xs h-9 px-3 no-underline">
                Request a call
              </a>
            </div>
          </div>
          <div className="brand-card p-4">
            <h3 className="font-display font-bold text-lg">Working Hours</h3>
            <p className="text-muted-foreground text-sm">Remote-first. Typical hours across APAC / EU. We can align to your timezone for delivery.</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-4">
        <div className="section-wrap grid grid-cols-1 lg:grid-cols-2 gap-5">
          <form className="brand-card p-5 flex flex-col gap-4" onSubmit={onSubmit}>
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
              <button type="submit" className="brand-btn-primary">Send</button>
              {sent && <span className="text-sm font-semibold text-primary">Thanks — opening your mail app…</span>}
            </div>

            <p className="text-xs text-muted-foreground">We minimize personal data collection. Please avoid sharing secrets or API keys here.</p>
          </form>

          {/* Right aside */}
          <aside className="brand-card p-5 flex flex-col gap-4">
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
          </aside>
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
