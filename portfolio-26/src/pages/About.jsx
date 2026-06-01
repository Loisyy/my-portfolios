import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Code2, Layers, Bot, BrainCircuit} from "lucide-react";

const skills = [
  { cat: "UX & Research",        color: "#C54B8C", items: ["User Interviews","Journey Mapping","Persona Creation","Usability Testing","Wireframing","Prototyping"] },
  { cat: "Design Tools",         color: "#993366", items: ["Figma","FigJam","Miro","Adobe XD","Notion","Loom"] },
  { cat: "Frontend",             color: "#B03060", items: ["React 18","JavaScript (ES6+)","TypeScript","Tailwind CSS","CSS Modules","Vite"] },
  { cat: "APIs & Integrations",  color: "#7D2953", items: ["REST APIs","Amadeus API","Paystack","Unsplash API","Web Speech API"] },
];

const timeline = [
  { 
  year: "2026", event: "Human-Computer Interaction — University of California San Diego in progress", icon: <BrainCircuit size={15}/> },
  { year: "2026", event: "Sabi Designers Challenge — VoguePen homepage design",                          icon: <Layers size={15}/> },
  { year: "2025", event: "AccessNaija — Accessibility-first EdTech platform for Nigerian learners",      icon: <Award size={15}/> },
  { year: "2025", event: "RouteWise — Full-stack travel planner app (React + Amadeus API)",              icon: <Code2 size={15}/> },
  { year: "2024", event: "Started software engineering & frontend development",                          icon: <Bot size={15}/> },
  { year: "2023", event: "Google UX Design Professional Certificate completed",                           icon: <Award size={15}/> },
  { year: "2022", event: "Educational Psychology — academic foundation in human learning & cognition",   icon: <BookOpen size={15}/> },
];

export default function About() {
  return (
    <main className="pt-[72px] bg-white">

      {/* HERO */}
      <section className="py-16 px-6"
        style={{ background: "radial-gradient(ellipse 50% 60% at 90% 30%, rgba(197,75,140,0.05) 0%, transparent 60%), #FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>About Me</span>
              <h1 className="font-serif font-normal leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem,3.5vw,3rem)", color: "#2C2C2C" }}>
                Designer who codes.<br />
                <em className="italic" style={{ color: "#C54B8C" }}>Engineer who researches.</em>
              </h1>
              <p className="leading-relaxed max-w-xl mb-4" style={{ fontSize: "15px", color: "#6B7280" }}>
                I'm Loisy — an Interaction Designer and Frontend Developer based in Abuja, Nigeria.
                My work lives at the intersection of human psychology, visual design, and frontend engineering.
                I believe the best digital products are those that feel effortless — because someone worked
                very hard to understand how people actually think.
              </p>
              <p className="leading-relaxed max-w-xl mb-4" style={{ fontSize: "15px", color: "#6B7280" }}>
                My background in Educational Psychology gives me a lens that most designers don't have:
                I think in mental models, cognitive load, and behavioural patterns before I think in pixels.
                Combined with hands-on frontend development skills, I bridge the gap between design intent
                and production reality.
              </p>
              <p className="leading-relaxed max-w-xl mb-8" style={{ fontSize: "15px", color: "#6B7280" }}>
              Currently exploring how Artificial intelligence and learning analytic can be integrated in the 
              design and evaluation of digital learning.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/resume.pdf" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: "#C54B8C" }}>
                  Download Resume ↗
                </a>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border transition-all hover:-translate-y-0.5"
                  style={{ borderColor: "#F0DDE0", color: "#6B7280" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C54B8C"; e.currentTarget.style.color = "#C54B8C"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#F0DDE0"; e.currentTarget.style.color = "#6B7280"; }}>
                  Get in touch <ArrowRight size={15}/>
                </Link>
              </div>
            </div>

            {/* Aside cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-white border rounded-2xl p-5 flex items-center gap-4" style={{ borderColor: "#F0DDE0", boxShadow: "0 2px 12px rgba(125,41,83,0.06)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #C54B8C, #7D2953)" }}>
                  <span className="font-serif text-3xl text-white italic">L</span>
                </div>
                <div>
                  <strong className="block text-base" style={{ color: "#2C2C2C" }}>Loisy</strong>
                  <span className="font-mono text-xs block" style={{ color: "#9CA3AF" }}>Abuja, Nigeria 🇳🇬</span>
                  <span className="font-mono text-xs" style={{ color: "#9CA3AF" }}>Open to remote & relocation</span>
                </div>
              </div>
              {[
                { icon: <Award size={16}/>,    title: "Google UX Design",      sub: "Professional Certificate", color: "#C54B8C" },
                { icon: <BookOpen size={16}/>, title: "Educational Psychology", sub: "Academic Background",      color: "#993366" },
                { icon: <Code2 size={16}/>,    title: "Frontend Engineering",  sub: "React · Tailwind · Vite",  color: "#B03060" },
                 { icon: <BrainCircuit size={16}/>,    title: "Huma-Computer-Interaction",  sub: "Heuristic Evaluation · Usability Principles · Qualitative Research",  color: "#B03060" },
              ].map(c => (
                <div key={c.title} className="bg-white border rounded-xl p-4 flex items-center gap-3" style={{ borderColor: "#F0DDE0" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: c.color + "15", color: c.color }}>
                    {c.icon}
                  </div>
                  <div>
                    <strong className="block text-sm" style={{ color: "#2C2C2C" }}>{c.title}</strong>
                    <span className="font-mono text-xs" style={{ color: "#9CA3AF" }}>{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FFF9FC" }}>
        <div className="max-w-[1200px] mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "#9CA3AF" }}>Capabilities</span>
          <h2 className="font-serif font-normal mb-10" style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)", color: "#2C2C2C" }}>Skills & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map(s => (
              <div key={s.cat} className="bg-white rounded-2xl p-6 border"
                style={{ borderLeft: `3px solid ${s.color}`, borderTop: "1px solid #F0DDE0", borderRight: "1px solid #F0DDE0", borderBottom: "1px solid #F0DDE0" }}>
                <h3 className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: s.color }}>{s.cat}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map(item => (
                    <span key={item} className="text-xs px-2 py-0.5 rounded border"
                      style={{ backgroundColor: "#FFF9FC", color: "#6B7280", borderColor: "#F0DDE0" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "#9CA3AF" }}>Journey</span>
          <h2 className="font-serif font-normal mb-10" style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)", color: "#2C2C2C" }}>How I got here</h2>
          <div className="max-w-2xl">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center w-16 shrink-0">
                  <span className="font-mono text-xs pt-0.5 whitespace-nowrap" style={{ color: "#9CA3AF" }}>{t.year}</span>
                  {i < timeline.length - 1 && <div className="w-px flex-1 my-2 min-h-6" style={{ backgroundColor: "#F0DDE0" }} />}
                </div>
                <div className="flex items-start gap-3 pb-8">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "#F8EFF1", color: "#C54B8C" }}>
                    {t.icon}
                  </div>
                  <p className="text-sm leading-relaxed pt-1.5" style={{ color: "#6B7280" }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2C2C2C" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>What's Next</span>
              <h2 className="font-serif font-normal text-white mb-5" style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)" }}>Career Goals</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                I'm actively pursuing opportunities in{" "}
                <strong style={{ color: "#C54B8C", fontWeight: 500 }}>HCI research</strong>,{" "}
                <strong style={{ color: "#C54B8C", fontWeight: 500 }}>Applied AI</strong>,{" "}
                <strong style={{ color: "#C54B8C", fontWeight: 500 }}>UX engineering</strong>, and{" "}
                <strong style={{ color: "#C54B8C", fontWeight: 500 }}>interaction design</strong> — at tech companies,
                design studios, or academic labs where design meets cognitive science. I'm also exploring MSc and PhD 
                 programs in  Educational technologies and in Human-Computer Interaction and Design Research.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                If your team values research-backed design, inclusive interfaces, or the rare designer who
                can both prototype in Figma and ship in React — let's talk.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Open to",       items: ["UX/Interaction Design roles","Frontend Engineering roles","Design Research positions","MSc/PhD programs (Human-Centered))"] },
                { label: "Ideal context", items: ["Tech companies & startups","Design agencies","Academic / research labs","Inclusive / accessibility focus"] },
              ].map(g => (
                <div key={g.label} className="rounded-2xl p-5 border" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: "#C54B8C" }}>{g.label}</h4>
                  <ul className="space-y-1.5">
                    {g.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                        <span className="text-xs mt-0.5 shrink-0" style={{ color: "#C54B8C" }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
