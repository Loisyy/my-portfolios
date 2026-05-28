import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Code2, Layers } from "lucide-react";

const skills = [
  { cat: "UX & Research", color: "#2d7d72", items: ["User Interviews", "Journey Mapping", "Persona Creation", "Usability Testing", "Wireframing", "Prototyping"] },
  { cat: "Design Tools", color: "#6b3fa0", items: ["Figma", "FigJam", "Miro", "Adobe XD", "Notion", "Loom"] },
  { cat: "Frontend", color: "#c8533a", items: ["React 18", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "CSS Modules", "Vite"] },
  { cat: "APIs & Integrations", color: "#c9a84c", items: ["REST APIs", "Amadeus API", "Paystack", "Unsplash API", "Web Speech API"] },
];

const timeline = [
  { year: "2025", event: "Sabi Designers Challenge — VoguePen homepage design", icon: <Layers size={15} /> },
  { year: "2025", event: "AccessNaija — Accessibility-first EdTech platform for Nigerian learners", icon: <Award size={15} /> },
  { year: "2024", event: "RouteWise — Full-stack travel planner app (React + Amadeus API)", icon: <Code2 size={15} /> },
  { year: "2024", event: "Google UX Design Professional Certificate completed", icon: <Award size={15} /> },
  { year: "2023", event: "Started software engineering & frontend development", icon: <Code2 size={15} /> },
  { year: "2022", event: "Educational Psychology — academic foundation in human learning & cognition", icon: <BookOpen size={15} /> },
];

export default function About() {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="py-16 px-6"
        style={{ background: "radial-gradient(ellipse 50% 60% at 90% 30%, rgba(45,125,114,0.06) 0%, transparent 60%), #f7f5f0" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <span className="block font-mono text-[11px] text-ink-mute uppercase tracking-widest mb-4">About Me</span>
              <h1 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-tight tracking-tight text-ink mb-6">
                Designer who codes.<br />
                <em className="italic text-accent">Engineer who researches.</em>
              </h1>
              <p className="text-[15px] text-ink-soft leading-relaxed max-w-xl mb-4">
                I'm Loisy — an Interaction Designer and Frontend Developer based in Abuja, Nigeria.
                My work lives at the intersection of human psychology, visual design, and frontend engineering.
                I believe the best digital products are those that feel effortless — because someone worked
                very hard to understand how people actually think.
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed max-w-xl mb-8">
                My background in Educational Psychology gives me a lens that most designers don't have:
                I think in mental models, cognitive load, and behavioural patterns before I think in pixels.
                Combined with hands-on frontend development skills, I bridge the gap between design intent
                and production reality.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/resume.pdf" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm font-medium rounded-md hover:bg-accent hover:-translate-y-0.5 transition-all">
                  Download Resume ↗
                </a>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-paper-warm text-ink-soft text-sm rounded-md hover:border-ink hover:text-ink transition-all">
                  Get in touch <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Aside */}
            <div className="flex flex-col gap-4">
              <div className="bg-white border border-paper-warm rounded-xl p-5 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #2d7d72, #c8533a)" }}>
                  <span className="font-serif text-3xl text-white italic">L</span>
                </div>
                <div>
                  <strong className="block text-base">Loisy</strong>
                  <span className="font-mono text-xs text-ink-mute block">Abuja, Nigeria 🇳🇬</span>
                  <span className="font-mono text-xs text-ink-mute">Open to remote & relocation</span>
                </div>
              </div>
              {[
                { icon: <Award size={16} />, title: "Google UX Design", sub: "Professional Certificate", color: "#2d7d72" },
                { icon: <BookOpen size={16} />, title: "Educational Psychology", sub: "Academic Background", color: "#6b3fa0" },
                { icon: <Code2 size={16} />, title: "Frontend Engineering", sub: "React · Tailwind · Vite", color: "#c8533a" },
              ].map((c) => (
                <div key={c.title} className="bg-white border border-paper-warm rounded-xl p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: c.color + "15", color: c.color }}>
                    {c.icon}
                  </div>
                  <div>
                    <strong className="block text-sm">{c.title}</strong>
                    <span className="font-mono text-xs text-ink-mute">{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 bg-paper-warm">
        <div className="max-w-[1200px] mx-auto">
          <span className="block font-mono text-[11px] text-ink-mute uppercase tracking-widest mb-2">Capabilities</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-normal text-ink mb-10">Skills & Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((s) => (
              <div key={s.cat} className="bg-white rounded-xl p-6 border border-transparent"
                style={{ borderLeft: `3px solid ${s.color}` }}>
                <h3 className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: s.color }}>{s.cat}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span key={item} className="text-xs bg-paper text-ink-soft px-2 py-0.5 rounded border border-paper-warm">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <span className="block font-mono text-[11px] text-ink-mute uppercase tracking-widest mb-2">Journey</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-normal text-ink mb-10">How I got here</h2>
          <div className="max-w-2xl">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center w-16 shrink-0">
                  <span className="font-mono text-xs text-ink-mute pt-0.5 whitespace-nowrap">{t.year}</span>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-paper-warm my-2 min-h-6" />}
                </div>
                <div className="flex items-start gap-3 pb-8">
                  <div className="w-8 h-8 rounded-full bg-paper-warm flex items-center justify-center text-accent shrink-0 mt-0.5">
                    {t.icon}
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed pt-1.5">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="py-20 px-6 bg-ink text-paper">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="block font-mono text-[11px] text-paper/40 uppercase tracking-widest mb-2">What's Next</span>
              <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-normal text-paper mb-5">Career Goals</h2>
              <p className="text-sm text-paper/70 leading-relaxed mb-4">
                I'm actively pursuing opportunities in <strong className="text-accent-soft font-medium">HCI research</strong>,{" "}
                <strong className="text-accent-soft font-medium">UX engineering</strong>, and{" "}
                <strong className="text-accent-soft font-medium">interaction design</strong> — at tech companies, design studios,
                or academic labs where design meets cognitive science. I'm also exploring MSc programs in
                Human-Computer Interaction and Design Research.
              </p>
              <p className="text-sm text-paper/70 leading-relaxed">
                If your team values research-backed design, inclusive interfaces, or the rare designer who
                can both prototype in Figma and ship in React — let's talk.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Open to", items: ["UX/Interaction Design roles", "Frontend Engineering roles", "Design Research positions", "MSc programs (HCI)"] },
                { label: "Ideal context", items: ["Tech companies & startups", "Design agencies", "Academic / research labs", "Inclusive / accessibility focus"] },
              ].map((g) => (
                <div key={g.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="font-mono text-[11px] text-accent-soft uppercase tracking-widest mb-3">{g.label}</h4>
                  <ul className="space-y-1.5">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-paper/70">
                        <span className="text-accent-soft text-xs mt-0.5 shrink-0">→</span>
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
