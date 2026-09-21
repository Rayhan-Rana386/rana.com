import React, { useEffect, useState, useRef } from "react";
import { CheckCircle2, Star, BadgeAlert } from "lucide-react";
import { skillsCategories } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Simple intersection observer to trigger skill bar animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Fallback if observer not supported or delayed
    const timer = setTimeout(() => setAnimated(true), 1500);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-12 md:py-20 bg-dark-bg-2 border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-3">
              MY POWERHOUSE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Skills & Expertise
            </h2>
            <p className="font-sans text-sm text-gray-500 mt-2 max-w-lg leading-relaxed">
              Engineered with modern responsive techniques, custom hooks, speed diagnostics, and intuitive UI/UX design.
            </p>
          </div>
        </AnimatedSection>

        {/* Dual Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {skillsCategories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={0.2 + index * 0.1}
            >
              <div
                className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/5 bg-dark-surface-1/50 relative h-full"
              >
                {/* Category Eyebrow title */}
                <h3 className="font-display text-lg font-bold text-white tracking-widest uppercase mb-8 pb-3 border-b border-white/5 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="text-xs font-mono text-accent-pink">{category.skills.length} Areas</span>
                </h3>

                {/* Skills Bars Stack */}
                <div className="space-y-6">
                  {category.skills.map((skill) => {
                    const animatedWidth = animated ? `${skill.percentage}%` : "0%";
                    return (
                      <div key={skill.name} className="group">
                        
                        {/* Name and percentage counter label */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-sans text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
                            {skill.name}
                          </span>
                          <span className="font-display text-xs font-bold text-accent-pink bg-accent-pink/10 py-0.5 px-2 rounded-md">
                            {skill.percentage}%
                          </span>
                        </div>

                        {/* Custom Progress Track & Glow Fill */}
                        <div className="h-2.5 w-full bg-dark-surface-2 rounded-full overflow-hidden border border-white/5 relative">
                          <div
                            style={{
                              width: animatedWidth,
                              transition: "width 1.8s cubic-bezier(0.1, 0.8, 0.2, 1)"
                            }}
                            className="h-full bg-gradient-to-r from-accent-pink via-accent-pink-light to-accent-pink rounded-full relative"
                          >
                            {/* Inner soft pulse indicator */}
                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 rounded-full animate-pulse" />
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Decorative Corner Lights */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/10" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/10" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Static Badges Row for extra technical stack credibility */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-8 md:mt-12 bg-dark-surface-1/80 border border-white/5 p-4 sm:p-6 rounded-2xl flex flex-wrap justify-around items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-accent-pink" />
              <span className="font-mono text-xs font-semibold tracking-wider">SECURE WORDPRESS API</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-accent-pink" />
              <span className="font-mono text-xs font-semibold tracking-wider">WP MULTILINGUAL</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-accent-pink" />
              <span className="font-mono text-xs font-semibold tracking-wider">GUTENBERG CUSTOM BLOCK</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-accent-pink" />
              <span className="font-mono text-xs font-semibold tracking-wider">REST API INTEGRATIONS</span>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
