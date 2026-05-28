import { useState } from "react";
import { Mail, Send, CheckCircle, Link2, GitBranch, Pen } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  const socials = [
    { icon: <Link2 size={18} />, label: "LinkedIn", handle: "/in/loisy", href: "https://linkedin.com" },
    { icon: <GitBranch size={18} />, label: "GitHub", handle: "github.com/loisy", href: "https://github.com" },
    { icon: <Pen size={18} />, label: "Figma", handle: "Figma Portfolio", href: "https://figma.com" },
    { icon: <Mail size={18} />, label: "Email", handle: "hello@loisy.design", href: "mailto:hello@loisy.design" },
  ];

  const inputClass = "w-full px-4 py-3 border border-paper-warm rounded-lg bg-paper text-ink text-sm font-sans placeholder-ink-mute outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all";
  const labelClass = "block text-xs font-medium text-ink-soft mb-1.5";

  return (
    <main className="pt-[calc(72px+4rem)] pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-lg mb-14">
          <span className="block font-mono text-[11px] text-ink-mute uppercase tracking-widest mb-3">Say Hello</span>
          <h1 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight tracking-tight text-ink mb-4">
            Let's work<br /><em className="italic text-accent">together.</em>
          </h1>
          <p className="text-base text-ink-soft leading-relaxed">
            Whether you're looking for a UX designer, a frontend developer, a collaborator on a
            research project, or just want to chat about interaction design — my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
          {/* Form */}
          <div className="bg-white border border-paper-warm rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center text-center py-12 gap-4">
                <CheckCircle size={40} className="text-teal" />
                <h3 className="font-serif text-2xl font-normal">Message sent!</h3>
                <p className="text-sm text-ink-soft max-w-xs">Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-2 px-5 py-2.5 border border-paper-warm rounded-lg text-sm text-ink-soft hover:border-ink hover:text-ink transition-all">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input name="name" type="text" placeholder="Your name"
                      value={form.name} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input name="email" type="email" placeholder="your@email.com"
                      value={form.email} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Subject</label>
                  <input name="subject" type="text" placeholder="What's this about?"
                    value={form.subject} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea name="message" rows={6} placeholder="Tell me about your project, opportunity, or idea..."
                    value={form.message} onChange={handleChange} required className={inputClass + " resize-vertical"} />
                </div>
                <button type="submit" disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-ink text-paper text-sm font-medium rounded-lg hover:bg-accent hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all">
                  {loading
                    ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin-slow" />
                    : <><Send size={15} /> Send Message</>
                  }
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Socials */}
            <div className="bg-white border border-paper-warm rounded-xl p-5">
              <h3 className="font-serif text-lg font-medium mb-4">Connect with me</h3>
              <div className="space-y-2">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-paper transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-paper flex items-center justify-center text-accent shrink-0">{s.icon}</div>
                    <div>
                      <strong className="block text-sm">{s.label}</strong>
                      <span className="font-mono text-[11px] text-ink-mute">{s.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume */}
            <div className="bg-white border border-paper-warm rounded-xl p-5">
              <h3 className="font-serif text-lg font-medium mb-2">Resume</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">
                Download my resume to see my full work history, education, and skills.
              </p>
              <a href="/resume.pdf" target="_blank" rel="noreferrer"
                className="block text-center px-4 py-2.5 bg-ink text-paper text-sm font-medium rounded-lg hover:bg-accent transition-colors">
                Download Resume ↗
              </a>
            </div>

            {/* Response time */}
            <div className="bg-white border border-paper-warm rounded-xl p-5">
              <h3 className="font-serif text-lg font-medium mb-3">Response time</h3>
              <div className="flex items-center gap-2 text-sm text-ink-soft mb-1">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
                Usually within 24–48 hours
              </div>
              <p className="font-mono text-[11px] text-ink-mute">Abuja, Nigeria 🇳🇬 · Open to remote</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
