import ProjectCard from "../components/ProjectCard";
import { frontendProjects } from "../data/projects";

export default function FrontendProjects() {
  return (
    <main className="pt-[calc(72px+4rem)] pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-xl mb-14">
          <span className="block font-mono text-[11px] text-ink-mute uppercase tracking-widest mb-3">Code / Build</span>
          <h1 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight tracking-tight text-ink mb-4">
            Frontend Projects
          </h1>
          <p className="text-base text-ink-soft leading-relaxed">
            Production-quality React applications with API integrations, responsive design,
            and UX thinking embedded in every implementation decision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {frontendProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} basePath="/frontend-projects" index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
