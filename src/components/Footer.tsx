import React, { useState } from "react";
import { Facebook, Linkedin, Github, Instagram, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onNavigate?: (view: "home" | "projects" | "admin") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    { label: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, url: "https://www.linkedin.com/in/developer-rayhan-rana/" },
    { label: "Facebook", icon: <Facebook className="w-4 h-4" />, url: "https://www.facebook.com/rayahana.rana.373035" },
    { label: "Instagram", icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/developer__rana/" },
  ];

  return (
    <footer className="relative bg-[#0F172B] pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-white/5 overflow-hidden">
      
      {/* Decorative glowing background elements */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Logo (Sizing: col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center">
              {/* Custom Logo Image with fail-safe text fallback */}
              {!logoError ? (
                <img
                  src="https://dev-alystic.pantheonsite.io/wp-content/uploads/2026/09/images-4.png"
                  alt="Rayhan Rana Logo"
                  className="w-16 md:w-20 h-8 md:h-9 object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-display text-sm md:text-base font-extrabold tracking-wider text-white">
                  RAYHAN <span className="text-accent-pink">RANA</span>
                </span>
              )}
            </div>
            <p className="font-sans text-sm text-gray-400 max-w-xs leading-relaxed">
              WordPress Developer crafting high-performance, conversion-focused digital experiences for businesses worldwide.
            </p>
            
            {/* Social Icons row */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-dark-surface-1 hover:bg-accent-pink text-gray-400 hover:text-white flex items-center justify-center border border-white/5 hover:border-transparent transition-all duration-300 shadow-sm"
                  aria-label={`Visit Rayhan Rana on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick links (Sizing: col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-display text-sm font-bold tracking-widest text-white uppercase">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "services", label: "Services" },
                { id: "portfolio", label: "Portfolio" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-left font-sans text-sm text-gray-400 hover:text-accent-pink transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter subscribe (Sizing: col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="font-display text-sm font-bold tracking-widest text-white uppercase">
              NEWSLETTER
            </h4>
            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">
              Subscribe to stay updated with performance optimization tricks, WP strategies, and custom code guides.
            </p>
            
            {/* Subscribed Success Box */}
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscription successful! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mt-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-dark-surface-2/80 border border-white/5 rounded-xl py-3.5 pl-4 pr-16 text-sm text-white placeholder-gray-500 outline-none focus:border-accent-pink transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-accent-pink hover:bg-accent-pink-hover text-white px-4 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom credits row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <div className="font-sans text-xs text-gray-500">
            © 2026 RAYHAN RANA<button type="button" onClick={() => onNavigate?.("admin")} className="focus:outline-none cursor-default select-none bg-transparent border-0 p-0 text-inherit inline">.</button> All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-6 font-sans text-xs text-gray-500">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo("about"); }} className="hover:text-accent-pink transition-colors">
              Privacy Policy
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo("services"); }} className="hover:text-accent-pink transition-colors">
              Terms & Conditions
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo("contact"); }} className="hover:text-accent-pink transition-colors">
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
