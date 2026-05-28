import { Link } from "react-router-dom";
import { ArrowRight, MousePointer2, Layers, Code2 } from "lucide-react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { uxProjects, frontendProjects } from "../data/projects";

const featured = [
  ...uxProjects.slice(0, 3),
  ...frontendProjects.slice(0, 3)
];
export default function Home() {
  return (
    <main className="overflow-hidden">
      {/*─ HERO —*/}
      <Hero />

      {/* ── DISCIPLINES ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FFF9FC" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span
              className="block font-mono text-[11px] uppercase tracking-widest mb-2"
              style={{ color: "#9CA3AF" }}
            >
              What I do
            </span>
            <h2
              className="font-serif font-normal"
              style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#2C2C2C" }}
            >
              My Disciplines
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <MousePointer2 size={22} />,
                label: "UX Research & Design",
                desc: "User interviews, journey mapping, wireframes, and Figma prototypes grounded in HCI principles.",
                color: "#C54B8C",
              },
              {
                icon: <Layers size={22} />,
                label: "Design Systems",
                desc: "Scalable component libraries, token-based color systems, and accessible typography hierarchies.",
                color: "#993366",
              },
              {
                icon: <Code2 size={22} />,
                label: "Frontend Engineering",
                desc: "React, Tailwind CSS, REST API integration — turning design intent into living, breathing interfaces.",
                color: "#B03060",
              },
            ].map((d) => (
              <div
                key={d.label}
                className="bg-white rounded-2xl p-8 border transition-all duration-200 hover:-translate-y-1"
                style={{
                  borderLeft: `3px solid ${d.color}`,
                  borderTop: "1px solid #F0DDE0",
                  borderRight: "1px solid #F0DDE0",
                  borderBottom: "1px solid #F0DDE0",
                  boxShadow: "0 2px 12px rgba(125,41,83,0.05)",
                }}
              >
                <div className="mb-4" style={{ color: d.color }}>
                  {d.icon}
                </div>
                <h3
                  className="font-serif text-xl font-medium mb-2"
                  style={{ color: "#2C2C2C" }}
                >
                  {d.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B7280" }}
                >
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span
                className="block font-mono text-[11px] uppercase tracking-widest mb-2"
                style={{ color: "#9CA3AF" }}
              >
                Selected Work
              </span>
              <h2
                className="font-serif font-normal"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.5rem)",
                  color: "#2C2C2C",
                }}
              >
                Featured Projects
              </h2>
            </div>
            <div className="flex gap-5">
              {[
                { to: "/ux-case-studies", label: "All UX Studies" },
                { to: "/frontend-projects", label: "All Frontend" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="inline-flex items-center gap-1.5 text-sm pb-0.5 border-b transition-all duration-200 hover:gap-2.5"
                  style={{ color: "#6B7280", borderColor: "#F0DDE0" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C54B8C";
                    e.currentTarget.style.borderColor = "#C54B8C";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6B7280";
                    e.currentTarget.style.borderColor = "#F0DDE0";
                  }}
                >
                  {l.label} <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                basePath={p.type === "ux" ? "/ux-case-studies" : "/frontend-projects"}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#2C2C2C" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-serif font-normal text-white mb-5"
                style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}
              >
                Where psychology meets
                <br />
                <em className="italic" style={{ color: "#C54B8C" }}>
                  interface design.
                </em>
              </h2>
              <p
                className="text-sm leading-relaxed max-w-[420px] mb-8"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                I hold a background in Educational Psychology, a Google UX
                Design Certification, and a Certification in Frontend
                Engineering from the African Leadership Experience–Holberton
                Software Engineering program — a combination that shapes how I
                think about every screen, interaction, and moment of friction or
                delight. My work sits at the intersection of UX design, frontend
                engineering, and human behaviour. <br />
                I am an emerging
                Human–Computer Interaction (HCI) researcher, with a focus on UX
                research, accessibility, and human-centred AI. My goal is to
                bridge the gap between how people think, learn, and interact
                with digital systems, and how intelligent technologies are
                designed to better support how people{" "}
                <em className="italic" style={{ color: "#C54B8C" }}>
                  think
                </em>{" "}
                and how software{" "}
                <em className="italic" style={{ color: "#C54B8C" }}>
                  behaves
                </em>
                .
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                style={{ backgroundColor: "#C54B8C" }}
              >
                More about me <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { num: "6+", label: "Live Projects" },
                { num: "3", label: "Design Challenges" },
                { num: "WCAG", label: "AA Compliant Work" },
                { num: "HCI and AI", label: "Research Focus" },
              ].map((s) => (
                <div key={s.label}>
                  <span
                    className="font-serif font-light text-white block leading-none mb-1"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-[1200px] mx-auto">
          <p
            className="font-mono text-[11px] uppercase tracking-widest mb-4"
            style={{ color: "#C54B8C" }}
          >
            Let's build something together
          </p>
          <h2
            className="font-serif font-normal mb-10"
            style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", color: "#2C2C2C" }}
          >
            Open to internships, collaborations,
            <br />
            and MSc and PhD opportunities.
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              style={{ backgroundColor: "#C54B8C" }}
            >
              Get in touch <ArrowRight size={15} />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-8 py-3.5 text-sm font-medium rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: "1.5px solid #2C2C2C", color: "#2C2C2C" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2C2C2C";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#2C2C2C";
              }}
            >
              View Resume ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
