import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, User, Wrench } from "lucide-react";
import { uxProjects } from "../data/projects";

export default function UXDetail() {
  const { id } = useParams();
  const project = uxProjects.find((p) => p.id === id);
  if (!project) return <Navigate to="/ux-case-studies" />;

  const SectionLabel = ({ n, text }) => (
    <span className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: project.color }}>
      {n} — {text}
    </span>
  );

  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="py-14 px-6" style={{ backgroundColor: project.bgLight }}>
        <div className="max-w-[1200px] mx-auto">
          <Link to="/ux-case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-ink-mute mb-8 hover:gap-3 transition-all duration-200"
            style={{ color: "var(--color-ink-mute)" }}
            onMouseEnter={e => e.currentTarget.style.color = project.color}
            onMouseLeave={e => e.currentTarget.style.color = ''}>
            <ArrowLeft size={15} /> Back to UX Case Studies
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((t) => (
                <span key={t} className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/80 border font-medium"
                  style={{ color: project.color, borderColor: project.color }}>
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight tracking-tight text-ink mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-ink-soft mb-6">{project.subtitle}</p>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: <Clock size={13} />, val: project.duration },
                { icon: <User size={13} />, val: project.role },
                { icon: <Wrench size={13} />, val: project.tools },
                { icon: <span>📅</span>, val: project.year },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-1.5 font-mono text-xs text-ink-mute">{m.icon}{m.val}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 space-y-16">

        {/* Overview */}
        <section>
          <SectionLabel n="01" text="Overview" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-5">Project Overview</h2>
          <p className="text-base text-ink-soft leading-relaxed max-w-2xl">{project.overview}</p>
        </section>

        <hr className="border-paper-warm" />

        {/* Problem */}
        <section>
          <SectionLabel n="02" text="Problem" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-5">The Problem / Context</h2>
          <div className="rounded-r-xl p-8 border-l-4" style={{ borderColor: project.color, backgroundColor: project.bgLight }}>
            <p className="text-base text-ink-soft leading-relaxed">{project.problem}</p>
          </div>
        </section>

        <hr className="border-paper-warm" />

        {/* Research */}
        <section>
          <SectionLabel n="03" text="Research" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-6">User Research & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {project.research.map((item, i) => (
              <div key={i} className="bg-white border border-paper-warm rounded-xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                <span className="font-mono text-lg font-light shrink-0 mt-0.5" style={{ color: project.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-ink-soft leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Personas */}
          <h3 className="font-serif text-xl font-normal text-ink mb-4">User Personas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Adaeze, 22", role: "University Student", need: "Screen-reader compatible learning", pain: "Navigation complexity" },
              { name: "Emeka, 17", role: "Secondary School Learner", need: "Dyslexia-friendly reading mode", pain: "Dense text without formatting" },
              { name: "Fatima, 30", role: "Rural Educator", need: "Offline-first content", pain: "High data usage on mobile" },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-paper-warm rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-medium shrink-0"
                    style={{ backgroundColor: project.bgLight, color: project.color }}>
                    {p.name[0]}
                  </div>
                  <div>
                    <strong className="block text-sm">{p.name}</strong>
                    <span className="font-mono text-xs text-ink-mute">{p.role}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-ink-soft"><strong className="text-ink">Need:</strong> {p.need}</p>
                  <p className="text-xs text-ink-soft"><strong className="text-ink">Pain:</strong> {p.pain}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-paper-warm" />

        {/* Design */}
        <section>
          <SectionLabel n="04" text="Design" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-6">Wireframes & UI Design</h2>

          {/* Wireframe mockup */}
          <div className="rounded-xl p-8 mb-8 overflow-hidden" style={{ backgroundColor: project.bgLight }}>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="h-10 flex items-center px-3 gap-1.5 border-b border-paper-warm" style={{ backgroundColor: project.color }}>
                {[1,2,3].map(i => <span key={i} className="w-2.5 h-2.5 rounded-full bg-white/40" />)}
              </div>
              <div className="flex">
                <div className="w-36 bg-paper p-4 border-r border-paper-warm flex flex-col gap-2.5">
                  {[70,55,65,50,60].map((w,i) => <div key={i} className="h-2 rounded bg-paper-warm" style={{ width: `${w}%` }} />)}
                </div>
                <div className="flex-1 p-4 grid grid-cols-3 gap-3">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="h-16 rounded-md border border-paper-warm bg-paper/50" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center font-mono text-xs text-ink-mute mt-3">Figma design — {project.title}</p>
          </div>

          {/* Design decisions */}
          <h3 className="font-serif text-xl font-normal text-ink mb-4">Key Design Decisions</h3>
          <ul className="space-y-3">
            {project.designDecisions.map((d, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-paper-warm rounded-lg px-5 py-4 text-sm text-ink-soft leading-relaxed">
                <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: project.color }} />
                {d}
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-paper-warm" />

        {/* Prototype */}
        <section>
          <SectionLabel n="05" text="Prototype" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-6">Interactive Prototype</h2>
          <div className="bg-paper-warm rounded-xl p-12 flex justify-center">
            <div className="text-center max-w-sm">
              <ExternalLink size={28} className="mx-auto mb-4" style={{ color: project.color }} />
              <p className="text-sm text-ink-soft leading-relaxed mb-6">
                View the interactive Figma prototype to explore the full user flow, transitions, and component interactions.
              </p>
              <a href={project.figmaLink} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-white text-sm font-medium rounded-md hover:opacity-85 transition-opacity"
                style={{ backgroundColor: project.color }}>
                Open in Figma ↗
              </a>
            </div>
          </div>
        </section>

        <hr className="border-paper-warm" />

        {/* Outcome */}
        <section>
          <SectionLabel n="06" text="Outcome" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-6">Testing & Reflection</h2>
          <div className="bg-ink rounded-xl px-10 py-8">
            <p className="text-base text-paper/80 leading-relaxed">{project.outcome}</p>
          </div>
        </section>

        <div className="pt-8 border-t border-paper-warm">
          <Link to="/ux-case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-paper-warm rounded-lg text-sm text-ink-soft hover:border-ink hover:text-ink transition-all">
            <ArrowLeft size={15} /> All UX Case Studies
          </Link>
        </div>
      </div>
    </main>
  );
}
