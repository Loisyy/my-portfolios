import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, basePath, index }) {
  return (
    <Link
      to={`${basePath}/${project.id}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#F0DDE0] hover:-translate-y-2 transition-all duration-300 animate-fade-up"
      style={{
        animationDelay: `${index * 0.12}s`,
        boxShadow: "0 2px 12px rgba(125,41,83,0.06)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 16px 48px rgba(197,75,140,0.12)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 2px 12px rgba(125,41,83,0.06)")
      }
    >

     {/* Visual */}
<div className="relative overflow-hidden">
  {/* Browser bar */}
  <div
    className="flex gap-1.5 px-3 py-2.5 border-b"
    style={{ backgroundColor: "#F8EFF1", borderColor: "#F0DDE0" }}
  >
    <span className="w-2.5 h-2.5 rounded-full bg-[#ff6057]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
  </div>
  
  <div className="w-full h-[220px]">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  {/* Category badge */}
  <span
    className="absolute top-3 right-3 text-[10px] font-medium tracking-widest uppercase bg-white/90 px-2.5 py-1 rounded-full backdrop-blur-sm"
    style={{ color: project.color }}
  >
    {project.category}
  </span>
</div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 bg-white">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 6).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded border"
              style={{
                color: "#993366",
                backgroundColor: "#F8EFF1",
                borderColor: "#F0DDE0",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <h3
          className="font-serif text-2xl font-medium leading-tight mb-1.5"
          style={{ color: "#2C2C2C" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: "#6B7280" }}
        >
          {project.subtitle}
        </p>
        <div
          className="flex items-center justify-between pt-4 border-t"
          style={{ borderColor: "#F0DDE0" }}
        >
          <span className="font-mono text-xs" style={{ color: "#9CA3AF" }}>
            {project.year}
          </span>
          <span
            className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all duration-200"
            style={{ color: project.color }}
          >
            View project <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
