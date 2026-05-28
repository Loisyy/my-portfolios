import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "#2C2C2C" }} className="text-white mt-24">
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10">
        <div>
          <span className="font-serif text-3xl block mb-2">
            <em className="italic" style={{ color: "#C54B8C" }}>L</em>oisy
          </span>
          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
            Interaction Designer & Frontend Developer
          </p>
        </div>
        <nav className="flex flex-col gap-2.5">
          {[
            { to: "/ux-case-studies", label: "UX Case Studies" },
            { to: "/frontend-projects", label: "Frontend Projects" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to}
              className="text-sm transition-colors hover:opacity-100"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={e => e.target.style.color = "#C54B8C"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2.5 md:items-end">
          {[
            { href: "https://www.linkedin.com/in/nkeirulois", label: "LinkedIn" },
            { href: "https://github.com/Loisyy", label: "GitHub" },
            { href: "https://www.figma.com/design/rt4qAMgmF6bEb0OzAkEhMT/Nkeiruka-Lois---UI-Portfolio?node-id=1-641&t=5U8ji3N7WOUq2q8U-1", label: "Figma" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={e => e.target.style.color = "#C54B8C"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center py-5 text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
        © {year} Loisy. Designed & built with intention.
      </div>
    </footer>
  );
}
