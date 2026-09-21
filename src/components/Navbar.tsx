import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

interface NavbarProps {
  onContactClick: () => void;
  currentView: "home" | "projects" | "admin";
  onNavigate: (view: "home" | "projects" | "admin", sectionId?: string) => void;
}

export default function Navbar({ onContactClick, currentView, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    if (currentView !== "home") return;

    const handleScroll = () => {
      // Background glow/blur transition
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy for active link
      const scrollPosition = window.scrollY + 120; // Offset for navbar height
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (currentView !== "home") {
      onNavigate("home", id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="navbar-premium"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || currentView !== "home"
          ? "bg-[#0F172B]/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo (Left-aligned) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            if (currentView !== "home") {
              onNavigate("home", "home");
            } else {
              handleLinkClick("home");
            }
          }}
          className="group flex items-center gap-3 relative z-50"
        >
          {/* Custom Logo Image with fail-safe text fallback */}
          {!logoError ? (
            <img
              src="https://dev-alystic.pantheonsite.io/wp-content/uploads/2026/09/images-4.png"
              alt="Rayhan Rana Logo"
              className="w-16 md:w-20 h-8 md:h-9 object-contain group-hover:scale-105 transition-all duration-300"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="font-display text-sm md:text-base font-extrabold tracking-wider text-white group-hover:text-accent-pink transition-colors">
              RAYHAN <span className="text-accent-pink">RANA</span>
            </span>
          )}
        </a>

        {/* Desktop Navigation Links (Centered) */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className={`font-display text-sm font-medium tracking-wider uppercase transition-all duration-300 relative py-1 ${
                currentView === "home" && activeSection === link.id
                  ? "text-accent-pink"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              {currentView === "home" && activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-pink shadow-[0_0_8px_rgba(8,102,255,0.6)]" />
              )}
            </a>
          ))}

          {/* Link to Dedicated Projects */}
          <button
            onClick={() => onNavigate("projects")}
            className={`font-display text-xs font-bold uppercase tracking-wider py-1.5 px-3.5 rounded-full border transition-all cursor-pointer ${
              currentView === "projects"
                ? "bg-accent-pink/10 border-accent-pink text-accent-pink"
                : "bg-transparent border-white/10 text-gray-400 hover:text-white"
            }`}
          >
            All Projects
          </button>
        </div>

        {/* Right Side Container: Premium CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Premium CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-2 bg-dark-surface-1 hover:bg-accent-pink text-white font-display text-sm font-semibold tracking-wide py-3 px-6 rounded-full border border-white/10 hover:border-transparent shadow-[0_0_20px_rgba(8,102,255,0.15)] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle (Right-aligned on mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors relative z-50"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Drawer Menu - Premium Left-Aligned Side Panel */}
      <div
        className={`fixed top-0 left-0 w-72 h-screen bg-[#070913]/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-between pt-22 pb-10 px-6 border-r border-white/5 shadow-2xl transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleLinkClick(link.id);
              }}
              className={`font-display text-xs font-semibold uppercase tracking-widest py-1.5 transition-all duration-300 text-left ${
                currentView === "home" && activeSection === link.id
                  ? "text-accent-pink font-bold border-b border-accent-pink/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* All Projects link */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onNavigate("projects");
            }}
            className={`font-display text-xs font-semibold uppercase tracking-widest py-1.5 transition-all duration-300 text-left ${
              currentView === "projects" ? "text-accent-pink font-bold" : "text-gray-400 hover:text-white"
            }`}
          >
            All Projects
          </button>
        </div>

        <div className="w-full flex flex-col items-start gap-3 text-left">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full flex items-center justify-center gap-2 bg-accent-pink text-white font-display text-xs font-bold py-3 rounded-full shadow-[0_0_20px_rgba(8,102,255,0.2)] hover:opacity-90 transition-all duration-300 cursor-pointer"
          >
            Let's Talk <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <p className="text-[10px] text-gray-400/60 tracking-widest font-display uppercase">
            Available for Hire
          </p>
        </div>
      </div>
    </nav>
  );
}
