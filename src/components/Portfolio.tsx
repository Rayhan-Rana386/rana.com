import React, { useState, useEffect } from "react";
import { ExternalLink, ArrowRight, Zap } from "lucide-react";
import { getStoredProjects, ManagedProject, CATEGORY_MAP } from "../data/projectStore";
import AnimatedSection from "./AnimatedSection";

interface PortfolioProps {
  onViewAllProjects: () => void;
}

export default function Portfolio({ onViewAllProjects }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [projects, setProjects] = useState<ManagedProject[]>([]);

  useEffect(() => {
    // Read dynamic projects, show only published and featured ones on homepage
    const stored = getStoredProjects().filter(p => p.status !== "Draft" && p.isFeatured);
    setProjects(stored);
  }, []);

  const categories = [
    { id: "all", label: "Featured" },
    { id: "wordpress", label: "WordPress" },
    { id: "woocommerce", label: "WooCommerce" },
    { id: "landing-page", label: "Landing Pages" },
    { id: "redesign", label: "Redesigns" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    return project.category === selectedCategory;
  });

  return (
    <section
      id="portfolio"
      className="relative py-12 md:py-20 bg-dark-bg-2 border-t border-white/5 overflow-hidden"
    >
      {/* Decorative asset highlights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
            <div>
              <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-3">
                CREATIVE WORKS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Selected Projects
              </h2>
              <p className="font-sans text-sm text-gray-400 mt-2 max-w-md">
                Digital experiences crafted with performance, precision, and purpose.
              </p>
            </div>

            {/* Filter Categories Navbar */}
            <div className="flex flex-wrap gap-2 self-start md:self-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`font-display text-xs font-bold uppercase tracking-wider py-1.5 px-3.5 sm:px-5 rounded-full border transition-all duration-300 cursor-pointer ${
                    selectedCategory === category.id
                      ? "bg-accent-pink border-transparent text-white shadow-[0_0_15px_rgba(8,102,255,0.25)]"
                      : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Dynamic Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-gray-500 font-sans text-sm">
            No featured projects available in this category. Click "View All Projects" below to browse our full registry.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.slice(0, 8).map((project, index) => (
              <AnimatedSection
                key={project.id}
                direction="up"
                delay={0.1 + (index % 4) * 0.1}
              >
                <div
                  className="glass-panel rounded-2xl overflow-hidden border border-white/5 group relative flex flex-col justify-between transition-all duration-500 hover:border-accent-pink/20 hover:shadow-[0_20px_40px_rgba(8,102,255,0.15)] h-full"
                >
                  
                  {/* Performance Score Badge */}
                  {project.performanceScore && (
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-dark-bg-1/90 backdrop-blur-md py-1 px-2.5 rounded-full border border-emerald-500/30 text-emerald-400 font-display text-[10px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                      <Zap className="w-3 h-3 fill-emerald-400 stroke-none animate-bounce" />
                      <span>{project.performanceScore}% Speed</span>
                    </div>
                  )}

                  {/* Large Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark atmospheric cover layout on hover */}
                    <div className="absolute inset-0 bg-dark-bg-1/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-accent-pink flex items-center justify-center text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <ExternalLink className="w-4.5 h-4.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Information */}
                  <div className="p-5 sm:p-6 bg-dark-surface-1/85 border-t border-white/5 relative z-10 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Category label row */}
                      <span className="font-mono text-[9px] font-bold tracking-widest text-accent-pink uppercase block mb-1.5">
                        {CATEGORY_MAP[project.category] || project.categoryLabel || "WordPress"}
                      </span>

                      {/* Project Title */}
                      <h3 className="font-display text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-accent-pink transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies List */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono tracking-wider font-semibold text-gray-400 bg-white/5 py-0.5 px-2.5 rounded-full border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Action Button */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-display font-bold text-white group-hover:text-accent-pink transition-colors relative py-1 self-start"
                    >
                      <span>Request Custom Redesign</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      <span className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-white group-hover:bg-accent-pink group-hover:w-full transition-all duration-300" />
                    </a>

                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* View All Projects Button */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="flex justify-center mt-10 md:mt-12">
            <button
              onClick={onViewAllProjects}
              className="group relative inline-flex items-center gap-3 bg-dark-surface-1 hover:bg-accent-pink text-white font-display text-sm font-bold tracking-wider uppercase py-4 px-10 rounded-full border border-white/10 hover:border-transparent transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
