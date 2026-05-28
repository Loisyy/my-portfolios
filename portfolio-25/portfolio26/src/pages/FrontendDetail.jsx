import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, GitBranch, ExternalLink, User } from "lucide-react";
import { frontendProjects } from "../data/projects";

export default function FrontendDetail() {
  const { id } = useParams();
  const project = frontendProjects.find((p) => p.id === id);
  if (!project) return <Navigate to="/frontend-projects" />;

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
          <Link to="/frontend-projects"
            className="inline-flex items-center gap-1.5 text-sm text-ink-mute mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={15} /> Back to Frontend Projects
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
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-mute"><User size={13}/>{project.role}</div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-mute">📅 {project.year}</div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href={project.liveLink} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium rounded-md hover:opacity-85 hover:-translate-y-px transition-all"
                style={{ backgroundColor: project.color }}>
                <ExternalLink size={14} /> Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink text-ink text-sm rounded-md hover:bg-ink hover:text-paper transition-all">
                <GitBranch size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 space-y-16">

        {/* Stack */}
        <section>
          <SectionLabel n="01" text="Stack" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((s) => (
              <div key={s} className="flex items-center gap-2 px-4 py-2 bg-white border-[1.5px] rounded-lg font-mono text-sm text-ink-soft"
                style={{ borderColor: project.color }}>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: project.color }} />
                {s}
              </div>
            ))}
          </div>
        </section>

        <hr className="border-paper-warm" />

        {/* Features */}
        <section>
          <SectionLabel n="02" text="Features" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-6">Features Built</h2>

          {/* Browser mockup */}
          <div className="rounded-xl pb-0 mb-8 overflow-hidden" style={{ backgroundColor: project.bgLight }}>
            <div className="p-5 pb-0">
              <div className="bg-white rounded-t-lg overflow-hidden shadow-lg">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-white border-b border-paper-warm">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff6057]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 bg-paper rounded px-3 py-1 font-mono text-[11px] text-ink-mute truncate">
                    {project.liveLink}
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-paper-warm"
                  style={{ backgroundColor: project.color + "15" }}>
                  <div className="w-8 h-2 rounded" style={{ backgroundColor: project.color, opacity: 0.6 }} />
                  <div className="flex gap-3">
                    {[1,2,3,4].map(i => <div key={i} className="w-8 h-2 rounded bg-paper-warm" />)}
                  </div>
                </div>
                <div className="p-4 grid grid-cols-3 gap-3">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="h-16 rounded-md border border-paper-warm bg-paper/50" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ul className="divide-y divide-paper-warm">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-5 py-4 text-sm text-ink-soft leading-relaxed">
                <span className="font-mono text-sm font-medium shrink-0 mt-0.5" style={{ color: project.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-paper-warm" />

        {/* UX Note */}
        <section>
          <SectionLabel n="03" text="UX Thinking" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-6">UX Behind the Code</h2>
          <div className="rounded-r-xl p-8 border-l-4" style={{ borderColor: project.color, backgroundColor: project.bgLight }}>
            <p className="text-base text-ink-soft leading-relaxed">{project.uxNote}</p>
          </div>
        </section>

        <hr className="border-paper-warm" />

        {/* Links */}
        <section>
          <SectionLabel n="04" text="Links" />
          <h2 className="font-serif text-3xl font-normal text-ink mb-6">View the Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href={project.liveLink} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-6 bg-white border border-paper-warm rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all group"
              style={{ '--hover-border': project.color }}>
              <ExternalLink size={22} style={{ color: project.color }} />
              <div>
                <strong className="block text-sm mb-0.5">Live Demo</strong>
                <span className="font-mono text-xs text-ink-mute">{project.liveLink}</span>
              </div>
            </a>
            <a href={project.githubLink} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-6 bg-white border border-paper-warm rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all">
              <GitBranch size={22} className="text-ink-soft" />
              <div>
                <strong className="block text-sm mb-0.5">Source Code</strong>
                <span className="font-mono text-xs text-ink-mute">GitHub Repository</span>
              </div>
            </a>
          </div>
        </section>

        <div className="pt-8 border-t border-paper-warm">
          <Link to="/frontend-projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-paper-warm rounded-lg text-sm text-ink-soft hover:border-ink hover:text-ink transition-all">
            <ArrowLeft size={15} /> All Frontend Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
