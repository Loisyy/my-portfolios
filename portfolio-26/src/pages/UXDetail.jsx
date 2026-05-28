import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, User, Wrench } from "lucide-react";
import { uxProjects } from "../data/projects";


// Label is defined outside — accepts color as prop
const Label = ({ n, text, color }) => (
  <span
    className="block font-mono text-[11px] uppercase tracking-widest mb-2"
    style={{ color }}
  >
    {n} — {text}
  </span>
);

export default function UXDetail() {
  const { id } = useParams();
  const p = uxProjects.find((x) => x.id === id);
  if (!p) return <Navigate to="/ux-case-studies" />;

  return (
    <main className="pt-[72px] bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="py-14 px-6" style={{ backgroundColor: p.bgLight }}>
        <div className="max-w-[1200px] mx-auto">
          <Link
            to="/ux-case-studies"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-all duration-200 hover:gap-3"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={e => e.currentTarget.style.color = p.color}
            onMouseLeave={e => e.currentTarget.style.color = "#9CA3AF"}
          >
            <ArrowLeft size={15} /> Back to UX Case Studies
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map(t => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/90 border font-medium"
                  style={{ color: p.color, borderColor: p.color }}
                >
                  {t}
                </span>
              ))}
            </div>

            <h1
              className="font-serif font-normal leading-tight tracking-tight mb-3"
              style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#2C2C2C" }}
            >
              {p.title}
            </h1>
            <p className="text-lg mb-6" style={{ color: "#6B7280" }}>{p.subtitle}</p>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: <Clock size={13} />, val: p.duration },
                { icon: <User size={13} />,  val: p.role },
                { icon: <Wrench size={13} />,val: p.tools },
                { icon: "📅",                val: p.year },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-1.5 font-mono text-xs" style={{ color: "#9CA3AF" }}>
                  {m.icon}{m.val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 space-y-16">

        {/* 01 Overview */}
        <section>
          <Label n="01" text="Overview" color={p.color} />
          <h2 className="font-serif text-3xl font-normal mb-5" style={{ color: "#2C2C2C" }}>Project Overview</h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#6B7280" }}>{p.overview}</p>
        </section>

        <hr style={{ borderColor: "#F0DDE0" }} />

        {/* 02 Problem */}
        <section>
          <Label n="02" text="Problem" color={p.color} />
          <h2 className="font-serif text-3xl font-normal mb-5" style={{ color: "#2C2C2C" }}>The Problem / Context</h2>
          <div
            className="rounded-r-2xl p-8 border-l-4"
            style={{ borderColor: p.color, backgroundColor: p.bgLight }}
          >
            <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>{p.problem}</p>
          </div>
        </section>

        <hr style={{ borderColor: "#F0DDE0" }} />

        {/* 03 Research */}
        <section>
          <Label n="03" text="Research" color={p.color} />
          <h2 className="font-serif text-3xl font-normal mb-6" style={{ color: "#2C2C2C" }}>User Research & Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {p.research.map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-5 flex gap-4 transition-shadow hover:shadow-md"
                style={{ borderColor: "#F0DDE0", boxShadow: "0 2px 8px rgba(125,41,83,0.05)" }}
              >
                <span className="font-mono text-lg font-light shrink-0 mt-0.5" style={{ color: p.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{item}</p>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-xl font-normal mb-4" style={{ color: "#2C2C2C" }}>User Personas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {p.persona.map((p) => (
              <div key={p.name} className="bg-white border rounded-xl p-5" style={{ borderColor: "#F0DDE0" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-medium shrink-0"
                    style={{ backgroundColor: p.bgLight, color: p.color }}
                  >
                    {p.name[0]}
                  </div>
                  <div>
                    <strong className="block text-sm" style={{ color: "#2C2C2C" }}>{p.name}</strong>
                    <span className="font-mono text-[11px]" style={{ color: "#9CA3AF" }}>{p.role}</span>
                  </div>
                </div>
                <p className="text-xs mb-1" style={{ color: "#6B7280" }}>
                  <strong style={{ color: "#2C2C2C" }}>Need:</strong> {p.need}
                </p>
                <p className="text-xs" style={{ color: "#6B7280" }}>
                  <strong style={{ color: "#2C2C2C" }}>Pain:</strong> {p.pain}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ borderColor: "#F0DDE0" }} />

        {/* 04 Design */}
        <section>
          <Label n="04" text="Design" color={p.color} />
          <h2 className="font-serif text-3xl font-normal mb-6" style={{ color: "#2C2C2C" }}>Wireframes & UI Design</h2>

          {/* Project image / wireframe */}
          <div className="rounded-2xl overflow-hidden mb-3" style={{ boxShadow: "0 4px 24px rgba(197,75,140,0.1)" }}>
            {/* Browser chrome bar */}
            <div
              className="flex items-center gap-1.5 px-3 py-2.5 border-b"
              style={{ backgroundColor: p.color, borderColor: "#F0DDE0" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            </div>
        
            <div className="w-full h-[320px] bg-paper-warm overflow-hidden">
              <img
                src={p.wireframe || p.image}
                alt={`${p.title} design`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <p className="text-center font-mono text-xs mb-8" style={{ color: "#9CA3AF" }}>
            Figma design — {p.title}
          </p>

          {/* Design decisions */}
          <h3 className="font-serif text-xl font-normal mb-4" style={{ color: "#2C2C2C" }}>Key Design Decisions</h3>
          <ul className="space-y-3">
            {p.designDecisions.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white border rounded-xl px-5 py-4 text-sm leading-relaxed"
                style={{ borderColor: "#F0DDE0", color: "#6B7280" }}
              >
                <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: p.color }} />
                {d}
              </li>
            ))}
          </ul>
        </section>

        <hr style={{ borderColor: "#F0DDE0" }} />

        {/* 05 Prototype */}
        <section>
          <Label n="05" text="Prototype" color={p.color} />
          <h2 className="font-serif text-3xl font-normal mb-6" style={{ color: "#2C2C2C" }}>Interactive Prototype</h2>
          <div className="rounded-2xl p-12 flex justify-center" style={{ backgroundColor: "#FFF9FC" }}>
            <div className="text-center max-w-sm">
              <ExternalLink size={28} className="mx-auto mb-4" style={{ color: p.color }} />
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B7280" }}>
                View the interactive Figma prototype to explore the full user flow, transitions, and component interactions.
              </p>
              <a
                href={p.figmaLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-white text-sm font-medium rounded-lg hover:opacity-85 transition-opacity"
                style={{ backgroundColor: p.color }}
              >
                Open in Figma ↗
              </a>
            </div>
          </div>
        </section>

        <hr style={{ borderColor: "#F0DDE0" }} />

        {/* 06 Outcome */}
        <section>
          <Label n="06" text="Outcome" color={p.color} />
          <h2 className="font-serif text-3xl font-normal mb-6" style={{ color: "#2C2C2C" }}>Testing & Reflection</h2>
          <div className="rounded-2xl px-10 py-8" style={{ backgroundColor: "#2C2C2C" }}>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{p.outcome}</p>
          </div>
        </section>

        {/* Back link */}
        <div className="pt-8 border-t" style={{ borderColor: "#F0DDE0" }}>
          <Link
            to="/ux-case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 border rounded-lg text-sm transition-all"
            style={{ borderColor: "#F0DDE0", color: "#6B7280" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#C54B8C"; e.currentTarget.style.color = "#C54B8C"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#F0DDE0"; e.currentTarget.style.color = "#6B7280"; }}
          >
            <ArrowLeft size={15} /> All UX Case Studies
          </Link>
        </div>

      </div>
    </main>
  );
}
