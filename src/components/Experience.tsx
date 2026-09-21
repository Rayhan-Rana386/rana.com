import React, { useState } from "react";
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";
import { timelineData } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education">("all");

  const filteredTimeline = timelineData.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  return (
    <section
      id="experience"
      className="relative py-12 md:py-20 bg-dark-bg-1 overflow-hidden"
    >
      {/* Decorative timeline radial lights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-purple-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center mb-8 md:mb-12">
            <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-3">
              MY JOURNEY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Experience & Education
            </h2>
            
            {/* Tab Filter buttons for experience vs education */}
            <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mt-6">
              <button
                onClick={() => setActiveTab("all")}
                className={`font-display text-xs font-bold uppercase tracking-wider py-2 px-4 sm:px-6 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeTab === "all"
                    ? "bg-accent-pink border-transparent text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                    : "bg-transparent border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                All Milestones
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`font-display text-xs font-bold uppercase tracking-wider py-2 px-4 sm:px-6 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeTab === "experience"
                    ? "bg-accent-pink border-transparent text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                    : "bg-transparent border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                Professional Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`font-display text-xs font-bold uppercase tracking-wider py-2 px-4 sm:px-6 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeTab === "education"
                    ? "bg-accent-pink border-transparent text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                    : "bg-transparent border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                Education & Courses
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline Visual Container */}
        <div className="relative mt-8 md:mt-12">
          
          {/* Central Glowing Vertical Line (Desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-pink via-accent-pink-light to-transparent hidden md:block opacity-30" />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[4px] bg-accent-pink blur-[4px] hidden md:block opacity-20" />

          {/* Timeline Cards */}
          <div className="space-y-12 md:space-y-16">
            {filteredTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection
                  key={item.year + item.title}
                  direction={isEven ? "right" : "left"}
                  delay={0.1 + index * 0.1}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center w-full relative transition-all duration-700 ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Central Node Indicator (Desktop only) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-dark-bg-1 border-2 border-accent-pink hidden md:flex items-center justify-center z-20 shadow-[0_0_15px_#3B82F6]">
                      <div className="w-2 h-2 rounded-full bg-accent-pink animate-ping absolute" />
                      <div className="w-2 h-2 rounded-full bg-accent-pink" />
                    </div>

                    {/* Card Container */}
                    <div
                      className={`w-full md:w-[45%] relative transition-all duration-500 group`}
                    >
                      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden hover:border-accent-pink/30 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300">
                        
                        {/* Hover subtle glow background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Header row: Year & Badge */}
                        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-pink bg-accent-pink/10 py-1 px-3 rounded-full border border-accent-pink/20">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.year}
                          </span>
                          
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                            {item.type === "experience" ? (
                              <Briefcase className="w-3.5 h-3.5 text-gray-600" />
                            ) : (
                              <GraduationCap className="w-3.5 h-3.5 text-gray-600" />
                            )}
                            {item.type}
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-accent-pink transition-colors">
                          {item.title}
                        </h3>
                        
                        <div className="font-sans text-sm font-semibold text-gray-400 mb-4 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          {item.companyOrInstitution}
                        </div>

                        {/* Paragraph details */}
                        <p className="font-sans text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Bottom indicator node (Mobile only) */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-pink md:hidden" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
