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
    <header className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${scrolled ? "bg-paper/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,14,13,0.08)]" : ""}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-medium tracking-tight flex items-baseline">
          <span className="text-accent italic">L</span>
          <span className="text-ink">oisy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm px-3 py-1.5 rounded transition-all duration-200 ${
                  isActive
                    ? "text-ink font-medium"
                    : "text-ink-soft hover:text-ink hover:bg-paper-warm"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-4 py-1.5 bg-ink text-paper text-xs font-medium rounded tracking-wide hover:bg-accent transition-all duration-200 hover:-translate-y-px"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-ink hover:bg-paper-warm transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-paper border-b border-paper-warm shadow-lg px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-base px-3 py-2.5 rounded transition-all ${
                  isActive ? "text-ink font-medium bg-paper-warm" : "text-ink-soft hover:text-ink hover:bg-paper-warm"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-4 py-2.5 bg-ink text-paper text-sm font-medium rounded text-center hover:bg-accent transition-colors"
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}
