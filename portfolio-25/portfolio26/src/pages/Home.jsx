import { Link } from "react-router-dom";
import { ArrowRight, MousePointer2, Layers, Code2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { uxProjects, frontendProjects } from "../data/projects";

const featured = [uxProjects[0], uxProjects[1], frontendProjects[0]];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="min-h-screen pt-[calc(72px+4rem)] pb-16 px-6 flex flex-col"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(200,83,58,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(45,125,114,0.06) 0%, transparent 60%), #f7f5f0" }}>
        <div className="max-w-[1200px] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="flex items-center gap-2 text-[11px] font-mono text-teal uppercase tracking-widest mb-6 animate-fade-up delay-100">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
              Available for opportunities
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-normal leading-[1.1] tracking-tight text-ink mb-6 animate-fade-up delay-200">
              Interaction Designer<br />
              <em className="italic text-accent">&amp; Frontend Developer</em>
            </h1>
            <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-ink-soft leading-relaxed max-w-[480px] mb-10 animate-fade-up delay-300">
              Blending research, psychology, and code to build immersive digital experiences
              that are accessible, purposeful, and grounded in human behaviour.
            </p>
            <div className="flex gap-4 flex-wrap animate-fade-up delay-400">
              <Link to="/ux-case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm font-medium rounded-md hover:bg-accent hover:-translate-y-0.5 transition-all duration-200">
                View UX Case Studies <ArrowRight size={16} />
              </Link>
              <Link to="/frontend-projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-paper-warm text-ink-soft text-sm rounded-md hover:border-ink hover:text-ink hover:-translate-y-0.5 transition-all duration-200">
                View Frontend Projects
              </Link>
            </div>
          </div>

          {/* Art Card */}
          <div className="hidden lg:block relative animate-fade-up delay-300">
            <div className="bg-white rounded-2xl border border-paper-warm shadow-[0_12px_60px_rgba(0,0,0,0.08)] overflow-hidden animate-float">
              <div className="flex gap-1.5 px-4 py-3.5 bg-paper border-b border-paper-warm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6057]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="p-6 flex flex-col gap-4">
                {[
                  { label: "Research", w: "88%", color: "#2d7d72" },
                  { label: "UX Design", w: "95%", color: "#6b3fa0" },
                  { label: "Frontend", w: "82%", color: "#c8533a" },
                  { label: "Accessibility", w: "90%", color: "#c9a84c" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-mute w-24 shrink-0">{item.label}</span>
                    <div className="h-2 rounded-full opacity-80" style={{ width: item.w, backgroundColor: item.color }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between px-6 py-3 bg-paper border-t border-paper-warm text-xs font-mono text-ink-mute">
                <span>3 Live Projects</span>
                <span>Google UX Certified</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-6 flex items-center gap-2 bg-ink text-paper px-3.5 py-2 rounded-full text-xs font-medium shadow-xl">
              <MousePointer2 size={13} /> Research-driven
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex flex-col items-center gap-2 mt-16 text-ink-mute text-xs font-mono">
          <span>Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-ink-mute to-transparent animate-scroll-bob" />
        </div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section className="py-20 bg-paper-warm">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: <MousePointer2 size={22} />, label: "UX Research & Design", desc: "User interviews, journey mapping, wireframes, and Figma prototypes grounded in HCI principles.", color: "#2d7d72" },
              { icon: <Layers size={22} />, label: "Design Systems", desc: "Scalable component libraries, token-based color systems, and accessible typography hierarchies.", color: "#6b3fa0" },
              { icon: <Code2 size={22} />, label: "Frontend Engineering", desc: "React, Tailwind CSS, REST API integration — turning design intent into living, breathing interfaces.", color: "#c8533a" },
            ].map((d) => (
              <div key={d.label}
                className="bg-white rounded-xl p-8 border border-transparent hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                style={{ borderLeft: `3px solid ${d.color}` }}>
                <div className="mb-4" style={{ color: d.color }}>{d.icon}</div>
                <h3 className="font-serif text-xl font-medium mb-2 text-ink">{d.label}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="block text-[11px] font-mono text-ink-mute uppercase tracking-widest mb-2">Selected Work</span>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-normal text-ink">Featured Projects</h2>
            </div>
            <div className="flex gap-5">
              <Link to="/ux-case-studies" className="inline-flex items-center gap-1.5 text-sm text-ink-soft border-b border-paper-warm pb-0.5 hover:text-accent hover:border-accent hover:gap-2.5 transition-all">
                All UX Studies <ArrowRight size={13} />
              </Link>
              <Link to="/frontend-projects" className="inline-flex items-center gap-1.5 text-sm text-ink-soft border-b border-paper-warm pb-0.5 hover:text-accent hover:border-accent hover:gap-2.5 transition-all">
                All Frontend <ArrowRight size={13} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} basePath={i < 2 ? "/ux-case-studies" : "/frontend-projects"} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24 bg-ink text-paper">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-normal text-paper mb-5">
                Where psychology meets<br /><em className="italic text-accent-soft">interface design.</em>
              </h2>
              <p className="text-sm text-paper/70 leading-relaxed max-w-[420px] mb-8">
                I hold a background in Educational Psychology and a Google UX Design Certification —
                a combination that shapes how I think about every screen, every interaction, every
                moment of friction or delight. My goal is to bridge the gap between how people{" "}
                <em className="italic text-accent-soft">think</em> and how software{" "}
                <em className="italic text-accent-soft">behaves</em>.
              </p>
              <Link to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-md hover:bg-paper hover:text-ink hover:-translate-y-0.5 transition-all duration-200">
                More about me <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { num: "3+", label: "Live Projects" },
                { num: "2", label: "Design Challenges" },
                { num: "WCAG", label: "AA Compliant Work" },
                { num: "HCI", label: "Research Focus" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-serif text-4xl font-light text-paper block leading-none mb-1">{s.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-24 text-center"
        style={{ background: "radial-gradient(ellipse 40% 60% at 50% 50%, rgba(200,83,58,0.06) 0%, transparent 70%), #f7f5f0" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-mono text-accent uppercase tracking-widest mb-4">Let's build something together</p>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-normal text-ink mb-10">
            Open to internships, collaborations,<br />and MSc opportunities.
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-medium rounded-md hover:bg-ink hover:-translate-y-0.5 transition-all duration-200">
              Get in touch <ArrowRight size={15} />
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer"
              className="inline-flex items-center px-8 py-3.5 border border-ink text-ink text-sm rounded-md hover:bg-ink hover:text-paper hover:-translate-y-0.5 transition-all duration-200">
              View Resume ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
