import React from "react";
import { FileCode, Cpu, CheckCircle2, Star, Sparkles } from "lucide-react";

export default function Expertise() {
  const wordpressList = [
    "WordPress Custom Development",
    "Elementor Pro Integration",
    "WooCommerce Tailored Ecosystem",
    "Advanced Custom Hooks & Filters",
    "Sub-Second Speed Performance",
    "Fluid Adaptive Responsive Styling",
  ];

  const aiList = [
    "AI-powered Intelligent Workflows",
    "Smart AI-assisted Code Structuring",
    "Web Task Process Automation",
    "Modern Productive AI Tooling",
    "Dynamic Context-aware Chat Widgets",
    "Intelligent Algorithmic Optimization",
  ];

  return (
    <section
      id="expertise"
      className="relative py-24 md:py-32 bg-dark-bg-2 border-t border-white/5 overflow-hidden"
    >
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-pink-dark/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-4">
            EXPERTISE SPHERES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            My Expert Areas <br />
            <span className="bg-gradient-to-r from-accent-pink to-accent-pink-light bg-clip-text text-transparent">
              Where I Gained Skill
            </span>
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-400 mt-4 leading-relaxed">
            My journey of continuous learning and skill development has enabled me to master modern web technologies and create innovative solutions for startups, agencies, and businesses worldwide.
          </p>
        </div>

        {/* Dual Large Futuristic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card 1 - Core WordPress */}
          <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 bg-dark-surface-1/60 group relative overflow-hidden transition-all duration-500 hover:border-accent-pink/30 hover:shadow-[0_20px_45px_rgba(59,130,246,0.1)]">
            
            {/* Animated slow gradient block inside card */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-accent-pink/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-pink/20 transition-colors duration-500" />
            
            {/* Floating particles decoration */}
            <div className="absolute top-6 right-6 flex gap-1 items-center opacity-30 group-hover:opacity-80 transition-opacity">
              <Sparkles className="w-4 h-4 text-accent-pink animate-pulse" />
              <span className="font-mono text-[9px] text-gray-400">WP_ENGINE_1.0</span>
            </div>

            {/* Header Content */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-accent-pink/10 flex items-center justify-center text-accent-pink border border-accent-pink/20 transition-transform duration-500 group-hover:scale-110">
                <FileCode className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                  WORDPRESS
                </h3>
                <p className="font-sans text-xs text-gray-500 font-semibold tracking-widest uppercase">
                  Custom Platform Architect
                </p>
              </div>
            </div>

            {/* Bullets List */}
            <div className="space-y-4">
              {wordpressList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110" />
                  <span className="font-sans text-sm text-gray-300 group-hover/item:text-white transition-colors duration-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Card Frame Visual Decor */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-accent-pink transition-all duration-500 group-hover:w-full" />
          </div>

          {/* Card 2 - Next-Gen AI Integration */}
          <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 bg-dark-surface-1/60 group relative overflow-hidden transition-all duration-500 hover:border-accent-pink-light/30 hover:shadow-[0_20px_45px_rgba(59,130,246,0.1)]">
            
            {/* Animated slow gradient block inside card */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-accent-pink-light/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-pink-light/20 transition-colors duration-500" />
            
            {/* Floating particles decoration */}
            <div className="absolute top-6 right-6 flex gap-1 items-center opacity-30 group-hover:opacity-80 transition-opacity">
              <Sparkles className="w-4 h-4 text-accent-pink-light animate-pulse" />
              <span className="font-mono text-[9px] text-gray-400">AI_CORE_2.5</span>
            </div>

            {/* Header Content */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-accent-pink-light/10 flex items-center justify-center text-accent-pink-light border border-accent-pink-light/20 transition-transform duration-500 group-hover:scale-110">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                  AI INTEGRATION
                </h3>
                <p className="font-sans text-xs text-gray-500 font-semibold tracking-widest uppercase">
                  Automation & Modern Flows
                </p>
              </div>
            </div>

            {/* Bullets List */}
            <div className="space-y-4">
              {aiList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <CheckCircle2 className="w-5 h-5 text-accent-pink-light shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110" />
                  <span className="font-sans text-sm text-gray-300 group-hover/item:text-white transition-colors duration-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Card Frame Visual Decor */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-accent-pink-light transition-all duration-500 group-hover:w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
