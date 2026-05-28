import { useState } from "react";
import { Mail, Send, CheckCircle, Link2, GitBranch, Pen } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  const socials = [
    { icon: <Link2 size={18}/>,    label: "LinkedIn", handle: "/in/loisy",         href: "https://www.linkedin.com/in/nkeirulois" },
    { icon: <GitBranch size={18}/>, label: "GitHub",   handle: "github.com/loisy",  href: "https://github.com/Loisyy" },
    { icon: <Pen size={18}/>,      label: "Figma",    handle: "Figma Portfolio",    href: "https://www.figma.com/design/ARcFRO5aUn3vckIOiyOBWr/Nkeiruka-Lois-%E2%80%94-UI-Portfolio?m=auto&t=g5sHCQssbPcCcb3R-1" },
    { icon: <Mail size={18}/>,     label: "Email",    handle: "hello@loisy.design", href: "mailto:nkeiruloisy@yahoo.com" },
  ];

  const inputBase = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1.5px solid #F0DDE0",
    borderRadius: "10px",
    fontFamily: "inherit",
    fontSize: "0.9rem",
    color: "#2C2C2C",
    backgroundColor: "#FFFFFF",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <main className="pt-[calc(72px+4rem)] pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-lg mb-14">
          <span className="block font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: "#9CA3AF" }}>Say Hello</span>
          <h1 className="font-serif font-normal leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#2C2C2C" }}>
            Let's work<br /><em className="italic" style={{ color: "#C54B8C" }}>together.</em>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
            Whether you're looking for a UX designer, a frontend developer, a collaborator on a
            research project, or just want to chat about interaction design — my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: "#F0DDE0", boxShadow: "0 2px 16px rgba(125,41,83,0.06)" }}>
            {sent ? (
              <div className="flex flex-col items-center text-center py-12 gap-4">
                <CheckCircle size={40} style={{ color: "#C54B8C" }} />
                <h3 className="font-serif text-2xl font-normal" style={{ color: "#2C2C2C" }}>Message sent!</h3>
                <p className="text-sm max-w-xs" style={{ color: "#6B7280" }}>Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name:"", email:"", subject:"", message:"" }); }}
                  className="mt-2 px-5 py-2.5 border rounded-lg text-sm transition-all"
                  style={{ borderColor: "#F0DDE0", color: "#6B7280" }}
                  onMouseEnter={e => { e.target.style.borderColor = "#C54B8C"; e.target.style.color = "#C54B8C"; }}
                  onMouseLeave={e => { e.target.style.borderColor = "#F0DDE0"; e.target.style.color = "#6B7280"; }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name",  type: "text",  placeholder: "Your name",       label: "Name" },
                    { name: "email", type: "email", placeholder: "your@email.com",  label: "Email" },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#6B7280" }}>{f.label}</label>
                      <input name={f.name} type={f.type} placeholder={f.placeholder}
                        value={form[f.name]} onChange={handleChange} required
                        style={inputBase}
                        onFocus={e => { e.target.style.borderColor = "#C54B8C"; e.target.style.boxShadow = "0 0 0 3px rgba(197,75,140,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "#F0DDE0"; e.target.style.boxShadow = "none"; }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#6B7280" }}>Subject</label>
                  <input name="subject" type="text" placeholder="What's this about?"
                    value={form.subject} onChange={handleChange} required
                    style={inputBase}
                    onFocus={e => { e.target.style.borderColor = "#C54B8C"; e.target.style.boxShadow = "0 0 0 3px rgba(197,75,140,0.1)"; }}
                    onBlur={e => { e.target.style.borderColor = "#F0DDE0"; e.target.style.boxShadow = "none"; }} />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#6B7280" }}>Message</label>
                  <textarea name="message" rows={6} placeholder="Tell me about your project, opportunity, or idea..."
                    value={form.message} onChange={handleChange} required
                    style={{ ...inputBase, resize: "vertical" }}
                    onFocus={e => { e.target.style.borderColor = "#C54B8C"; e.target.style.boxShadow = "0 0 0 3px rgba(197,75,140,0.1)"; }}
                    onBlur={e => { e.target.style.borderColor = "#F0DDE0"; e.target.style.boxShadow = "none"; }} />
                </div>
                <button type="submit" disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white text-sm font-medium rounded-lg hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  style={{ backgroundColor: "#C54B8C" }}>
                  {loading
                    ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin-slow" />
                    : <><Send size={15}/> Send Message</>}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Socials */}
            <div className="bg-white border rounded-2xl p-5" style={{ borderColor: "#F0DDE0" }}>
              <h3 className="font-serif text-lg font-medium mb-4" style={{ color: "#2C2C2C" }}>Connect with me</h3>
              <div className="space-y-1">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-colors"
                    style={{ color: "#2C2C2C" }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#FFF9FC"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#F8EFF1", color: "#C54B8C" }}>
                      {s.icon}
                    </div>
                    <div>
                      <strong className="block text-sm" style={{ color: "#2C2C2C" }}>{s.label}</strong>
                      <span className="font-mono text-[11px]" style={{ color: "#9CA3AF" }}>{s.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume */}
            <div className="bg-white border rounded-2xl p-5" style={{ borderColor: "#F0DDE0" }}>
              <h3 className="font-serif text-lg font-medium mb-2" style={{ color: "#2C2C2C" }}>Resume</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>
                Download my resume to see my full work history, education, and skills.
              </p>
              <a href="/resume.pdf" target="_blank" rel="noreferrer"
                className="block text-center px-4 py-2.5 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all"
                style={{ backgroundColor: "#C54B8C" }}>
                Download Resume ↗
              </a>
            </div>

            {/* Response */}
            <div className="bg-white border rounded-2xl p-5" style={{ borderColor: "#F0DDE0" }}>
              <h3 className="font-serif text-lg font-medium mb-3" style={{ color: "#2C2C2C" }}>Response time</h3>
              <div className="flex items-center gap-2 text-sm mb-1" style={{ color: "#6B7280" }}>
                <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ backgroundColor: "#C54B8C" }} />
                Usually within 24–48 hours
              </div>
              <p className="font-mono text-[11px]" style={{ color: "#9CA3AF" }}>Abuja, Nigeria 🇳🇬 · Open to remote</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
