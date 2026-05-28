import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/ux-case-studies", label: "UX Case Studies" },
    { to: "/frontend-projects", label: "Frontend Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(197,75,140,0.1)]" : "bg-transparent"
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-medium tracking-tight flex items-baseline gap-0">
          <span className="bold text-2xl" style={{ color: "#C54B8C" }}>Lois</span>
          
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? "font-medium"
                    : "text-ink-soft hover:bg-paper-warm"
                }`
              }
              style={({ isActive }) => isActive ? { color: "#C54B8C" } : {}}
            >
              {l.label}
            </NavLink>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            className="ml-3 px-4 py-2 text-white text-xs font-medium rounded-md tracking-wide transition-all duration-200 hover:-translate-y-px hover:opacity-90"
            style={{ backgroundColor: "#C54B8C" }}>
            Resume ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-paper-warm transition-colors"
          onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{ color: "#2C2C2C" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-paper-warm shadow-lg px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) =>
                `text-base px-3 py-2.5 rounded-md transition-all ${
                  isActive ? "font-medium bg-paper-warm" : "text-ink-soft hover:bg-paper-warm"
                }`
              }
              style={({ isActive }) => isActive ? { color: "#C54B8C" } : {}}>
              {l.label}
            </NavLink>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            className="mt-2 px-4 py-2.5 text-white text-sm font-medium rounded-md text-center hover:opacity-90 transition-all"
            style={{ backgroundColor: "#C54B8C" }}>
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}
