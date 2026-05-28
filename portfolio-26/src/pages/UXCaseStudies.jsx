import ProjectCard from "../components/ProjectCard";
import { uxProjects } from "../data/projects";

export default function UXCaseStudies() {
  return (
    <main className="pt-[calc(72px+4rem)] pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-xl mb-14">
          <span className="block font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: "#9CA3AF" }}>
            Craft / Research
          </span>
          <h1 className="font-serif font-normal leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", color: "#2C2C2C" }}>
            UX Case Studies
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
            End-to-end design work grounded in user research, HCI principles, and
            iterative testing — from discovery to polished prototype.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {uxProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} basePath="/ux-case-studies" index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
