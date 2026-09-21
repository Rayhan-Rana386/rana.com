import React, { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink, Zap, Search, SlidersHorizontal, Layers, Check } from "lucide-react";
import { getStoredProjects, ManagedProject, CATEGORY_MAP } from "../data/projectStore";

interface ProjectsPageProps {
  onBackToHome: () => void;
  onContactClick: () => void;
}

export default function ProjectsPage({ onBackToHome, onContactClick }: ProjectsPageProps) {
  const [projects, setProjects] = useState<ManagedProject[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    // Load dynamic projects from store
    setProjects(getStoredProjects().filter(p => p.status !== "Draft"));
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "wordpress", label: "WordPress" },
    { id: "woocommerce", label: "WooCommerce" },
    { id: "elementor", label: "Elementor" },
    { id: "landing-page", label: "Landing Pages" },
    { id: "redesign", label: "Redesigns" },
    { id: "performance", label: "Speed Optimization" },
    { id: "custom-development", label: "Custom Development" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeCategory === "all") return matchesSearch;
    return project.category === activeCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-dark-bg-1 text-[#F3F4F6] py-24 futuristic-grid">
      
      {/* Dynamic top glow decoration */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-accent-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div>
            <button
              onClick={onBackToHome}
              className="group inline-flex items-center gap-2 text-sm font-display font-medium text-gray-400 hover:text-accent-pink transition-colors mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home Portfolio</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-3">
                FULL PORTFOLIO SHOWCASE
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Our Crafted <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-accent-pink to-accent-pink-light bg-clip-text text-transparent">
                  Digital Artifacts.
                </span>
              </h1>
              <p className="font-sans text-gray-400 mt-4 max-w-xl leading-relaxed">
                Explore our full registry of live websites, bespoke landing experiences, conversion funnels, and core speed optimizations built for global businesses.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 bg-dark-bg-2/80 border border-white/5 rounded-2xl p-6 min-w-[280px]">
              <div>
                <div className="font-display text-3xl font-extrabold text-white">
                  {projects.length}
                </div>
                <div className="font-sans text-xs text-gray-400 mt-1">Total Deliveries</div>
              </div>
              <div className="border-l border-white/5 pl-4">
                <div className="font-display text-3xl font-extrabold text-accent-pink">
                  99%
                </div>
                <div className="font-sans text-xs text-gray-400 mt-1">Speed Standard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search Panel */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
          
          {/* Categories Horizontal Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-3 lg:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const count = cat.id === "all" 
                ? projects.length 
                : projects.filter(p => p.category === cat.id).length;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 whitespace-nowrap font-display text-xs font-bold uppercase tracking-wider py-2 px-4.5 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-accent-pink border-transparent text-white shadow-[0_0_15px_rgba(8,102,255,0.25)]"
                      : "bg-dark-bg-2 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.id ? "bg-white/20 text-white" : "bg-white/5 text-gray-500"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full bg-dark-surface-1 border border-white/10 rounded-full py-2.5 pl-11 pr-5 text-sm text-white placeholder-gray-500 outline-none focus:border-accent-pink transition-all duration-300"
            />
            <Search className="w-4.5 h-4.5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>

        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-dark-bg-2/50 border border-white/5 rounded-3xl p-8">
            <Layers className="w-12 h-12 text-gray-600 mx-auto mb-4 animate-pulse" />
            <h3 className="font-display text-xl font-bold text-white mb-2">No projects found</h3>
            <p className="font-sans text-gray-400 max-w-sm mx-auto">
              We couldn't find any projects matching your selection or query. Try adjusting your filter or search search tags.
            </p>
            <button
              onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
              className="mt-6 bg-accent-pink/10 hover:bg-accent-pink text-accent-pink hover:text-white border border-accent-pink/20 hover:border-transparent py-2.5 px-6 rounded-full font-display text-xs font-bold transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 group relative flex flex-col justify-between transition-all duration-500 hover:border-accent-pink/20 hover:shadow-[0_20px_40px_rgba(8,102,255,0.1)]"
              >
                {/* Performance Speed Tag */}
                {project.performanceScore && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-dark-bg-1/95 backdrop-blur-md py-1 px-3 rounded-full border border-emerald-500/30 text-emerald-400 font-display text-[10px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <Zap className="w-3 h-3 fill-emerald-400 stroke-none animate-bounce" />
                    <span>{project.performanceScore}% GTmetrix Score</span>
                  </div>
                )}

                {/* Banner Image wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle black overlay with click action */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Category */}
                    <span className="font-mono text-[9px] font-bold tracking-widest text-accent-pink uppercase block mb-2">
                      {CATEGORY_MAP[project.category] || project.categoryLabel || "Bespoke System"}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-white mb-2.5 group-hover:text-accent-pink transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies && project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono tracking-wider font-semibold text-gray-400 bg-white/5 py-0.5 px-2 rounded border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-white hover:text-accent-pink transition-colors"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={onContactClick}
                        className="text-left inline-flex items-center gap-1.5 text-xs font-display font-bold text-white hover:text-accent-pink transition-colors cursor-pointer"
                      >
                        <span>Request Redesign</span>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                      </button>
                    )}

                    <button
                      onClick={onContactClick}
                      className="bg-accent-pink/10 hover:bg-accent-pink text-accent-pink hover:text-white font-display text-[10px] font-bold py-1.5 px-3.5 rounded-lg transition-all"
                    >
                      Hire Rayhan
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
