import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, basePath, index }) {
  return (
    <Link
      to={`${basePath}/${project.id}`}
      className="group flex flex-col rounded-xl overflow-hidden bg-white border border-paper-warm hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 0.12}s`, backgroundColor: "#ffffff" }}
    >
      {/* Visual */}
      <div className="relative p-6 pb-0 min-h-[200px] flex items-end" style={{ backgroundColor: project.bgLight }}>
        {/* Browser mockup */}
        <div className="w-full bg-white rounded-t-lg shadow-lg overflow-hidden">
          <div className="flex gap-1.5 px-3 py-2.5 bg-[#f0eeec] border-b border-black/5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6057]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="p-3">
            <div className="h-3 rounded mb-2.5 w-[60%] opacity-80" style={{ backgroundColor: project.color }} />
            <div className="flex flex-col gap-1.5 mb-3">
              <div className="h-1.5 rounded-sm bg-paper-warm w-[90%]" />
              <div className="h-1.5 rounded-sm bg-paper-warm w-[75%]" />
              <div className="h-1.5 rounded-sm bg-paper-warm w-[55%]" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1,2,3].map(i => (
                <div key={i} className="h-10 rounded border border-black/5" style={{ backgroundColor: project.bgLight }} />
              ))}
            </div>
          </div>
        </div>
        {/* Badge */}
        <span className="absolute top-3 right-3 text-[10px] font-medium tracking-widest uppercase bg-white/90 text-ink-soft px-2.5 py-1 rounded-full backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] font-mono text-ink-mute bg-paper border border-paper-warm px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-2xl font-medium leading-tight mb-1.5 text-ink">{project.title}</h3>
        <p className="text-sm text-ink-soft leading-relaxed flex-1 mb-5">{project.subtitle}</p>
        <div className="flex items-center justify-between pt-4 border-t border-paper-warm">
          <span className="font-mono text-xs text-ink-mute">{project.year}</span>
          <span className="flex items-center gap-1 text-xs font-medium transition-all duration-200 group-hover:gap-2"
            style={{ color: project.color }}>
            View project <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
