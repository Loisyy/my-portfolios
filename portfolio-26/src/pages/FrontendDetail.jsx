import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, GitBranch, ExternalLink, User } from "lucide-react";
import { frontendProjects } from "../data/projects";


// Label is defined outside — accepts color as prop
 const Label = ({ n, text, color}) => (
    <span className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color }}>{n} — {text}</span>
  );
export default function FrontendDetail() {
  const { id } = useParams();
  const p = frontendProjects.find((x) => x.id === id);
  if (!p) return <Navigate to="/frontend-projects" />;

 

  return (
    <main className="pt-[72px] bg-white min-h-screen">
      {/* Hero */}
      <section className="py-14 px-6" style={{ backgroundColor: p.bgLight }}>
        <div className="max-w-[1200px] mx-auto">
          <Link to="/frontend-projects"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-all hover:gap-3"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={e => e.currentTarget.style.color = p.color}
            onMouseLeave={e => e.currentTarget.style.color = "#9CA3AF"}>
            <ArrowLeft size={15} /> Back to Frontend Projects
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map(t => (
                <span key={t} className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/90 border font-medium"
                  style={{ color: p.color, borderColor: p.color }}>{t}
                </span>
              ))}
            </div>
            <h1 className="font-serif font-normal leading-tight tracking-tight mb-3"
              style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#2C2C2C" }}>
              {p.title}
            </h1>
            <p className="text-lg mb-6" style={{ color: "#6B7280" }}>{p.subtitle}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center gap-1.5 font-mono text-xs" style={{ color: "#9CA3AF" }}><User size={13}/>{p.role}</span>
              <span className="flex items-center gap-1.5 font-mono text-xs" style={{ color: "#9CA3AF" }}>📅 {p.year}</span>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href={p.liveLink} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium rounded-lg hover:opacity-85 hover:-translate-y-px transition-all"
                style={{ backgroundColor: p.color }}>
                <ExternalLink size={14}/> Live Demo
              </a>
              <a href={p.githubLink} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border text-sm rounded-lg transition-all hover:-translate-y-px"
                style={{ borderColor: "#2C2C2C", color: "#2C2C2C" }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#2C2C2C"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#2C2C2C"; }}>
                <GitBranch size={14}/> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-16 space-y-16">

        {/* Stack */}
        <section>
          <Label n="01" text="Stack" color={p.color}/>
          <h2 className="font-serif text-3xl font-normal mb-6" style={{ color: "#2C2C2C" }}>Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {p.stack.map(s => (
              <div key={s} className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg font-mono text-sm"
                style={{ borderColor: p.color, color: "#6B7280" }}>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                {s}
              </div>
            ))}
          </div>
        </section>

        <hr style={{ borderColor: "#F0DDE0" }} />

        {/* Features */}
        <section>
          <Label n="02" text="Features" color={p.color}/>
          <h2 className="font-serif text-3xl font-normal mb-6" style={{ color: "#2C2C2C" }}>Features Built</h2>

          {/* Browser mockup */}
          <div className="rounded-2xl p-6 pb-0 mb-8 overflow-hidden" style={{ backgroundColor: p.bgLight }}>
            <div className="bg-white rounded-t-xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(197,75,140,0.1)" }}>
              <div className="flex items-center gap-3 px-4 py-2.5 border-b" style={{ borderColor: "#F0DDE0" }}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6057]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 rounded px-3 py-1 font-mono text-[11px] truncate" style={{ backgroundColor: "#FFF9FC", color: "#9CA3AF" }}>
                  {p.liveLink}

                </div>
                
              </div>
              <div className="w-full h-[320px] bg-paper-warm overflow-hidden">
              <img
                src={p.featured || p.image}
                alt={`${p.title} design`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            </div>
          </div>

          <ul className="divide-y" style={{ borderColor: "#F0DDE0" }}>
            {p.features.map((f, i) => (
              <li key={i} className="flex items-start gap-5 py-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                <span className="font-mono text-sm font-medium shrink-0 mt-0.5" style={{ color: p.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        <hr style={{ borderColor: "#F0DDE0" }} />

        {/* UX Note */}
        <section>
          <Label n="03" text="UX Thinking" color={p.color}/>
          <h2 className="font-serif text-3xl font-normal mb-6" style={{ color: "#2C2C2C" }}>UX Behind the Code</h2>
          <div className="rounded-r-2xl p-8 border-l-4" style={{ borderColor: p.color, backgroundColor: p.bgLight }}>
            <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>{p.uxNote}</p>
          </div>
        </section>

        <hr style={{ borderColor: "#F0DDE0" }} />

        {/* Links */}
        <section>
          <Label n="04" text="Links" color={p.color}/>
          <h2 className="font-serif text-3xl font-normal mb-6" style={{ color: "#2C2C2C" }}>View the Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: p.liveLink, icon: <ExternalLink size={22}/>, label: "Live Demo", sub: p.liveLink, color: p.color },
              { href: p.githubLink, icon: <GitBranch size={22}/>, label: "Source Code", sub: "GitHub Repository", color: "#2C2C2C" },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-6 bg-white border rounded-2xl transition-all hover:-translate-y-1"
                style={{ borderColor: "#F0DDE0", boxShadow: "0 2px 8px rgba(125,41,83,0.05)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = l.color; e.currentTarget.style.boxShadow = "0 8px 24px rgba(197,75,140,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#F0DDE0"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(125,41,83,0.05)"; }}>
                <div style={{ color: l.color }}>{l.icon}</div>
                <div>
                  <strong className="block text-sm mb-0.5" style={{ color: "#2C2C2C" }}>{l.label}</strong>
                  <span className="font-mono text-xs" style={{ color: "#9CA3AF" }}>{l.sub}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="pt-8 border-t" style={{ borderColor: "#F0DDE0" }}>
          <Link to="/frontend-projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border rounded-lg text-sm transition-all"
            style={{ borderColor: "#F0DDE0", color: "#6B7280" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#C54B8C"; e.currentTarget.style.color = "#C54B8C"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#F0DDE0"; e.currentTarget.style.color = "#6B7280"; }}>
            <ArrowLeft size={15}/> All Frontend Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
