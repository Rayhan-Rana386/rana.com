import React from "react";
import { Cpu, ShieldCheck, Milestone, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-20 bg-dark-bg-2 border-y border-white/5 overflow-hidden"
    >
      {/* Visual background glows */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-accent-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="mb-8 md:mb-12">
            <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-3">
              ABOUT ME
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Transforming Your Vision <br />
              <span className="bg-gradient-to-r from-accent-pink to-accent-pink-light bg-clip-text text-transparent">
                into Digital Reality
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Creative Typography & Digital Visual */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/5 overflow-hidden group">
              {/* Overlay background decorative grid */}
              <div className="absolute inset-0 bg-radial-gradient from-accent-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-[10px] font-mono text-accent-pink tracking-widest mb-6">
                  // RANA_PROFILE_OBJECT
                </div>
                
                {/* Large visual typography block */}
                <div className="font-display text-6xl md:text-7xl font-extrabold tracking-tighter text-white/5 select-none leading-none mb-4">
                  RAYHAN
                  <div className="text-white/10 outline-text text-right mr-4">RANA</div>
                </div>

                <div className="space-y-4 font-mono text-xs text-gray-500 leading-relaxed border-t border-white/5 pt-6">
                  <div><span className="text-accent-pink-light">const</span> developer = &#123;</div>
                  <div className="pl-4">name: <span className="text-emerald-400">"Rayhan Rana"</span>,</div>
                  <div className="pl-4">role: <span className="text-emerald-400">"WordPress Expert"</span>,</div>
                  <div className="pl-4">experience: <span className="text-amber-400">2.5</span>, <span className="text-gray-600">// Years</span></div>
                  <div className="pl-4">location: <span className="text-emerald-400">"Dhaka, BD"</span>,</div>
                  <div className="pl-4">vitals: &#123; speed: <span className="text-amber-400">98</span>, security: <span className="text-amber-400">100</span> &#125;</div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Glowing Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-pink/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-pink/30" />
            </div>

            {/* Micro Badge Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0d0d0f] p-4 rounded-xl border border-white/5 text-center">
                <div className="text-2xl font-display font-bold text-white">2.5+</div>
                <div className="text-[10px] text-gray-500 tracking-wider uppercase font-sans mt-1">Years Experience</div>
              </div>
              <div className="bg-[#0d0d0f] p-4 rounded-xl border border-white/5 text-center">
                <div className="text-2xl font-display font-bold text-white">100%</div>
                <div className="text-[10px] text-gray-500 tracking-wider uppercase font-sans mt-1">Client Satisfaction</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Key description and Features Grid */}
          <AnimatedSection direction="left" delay={0.3} className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-sans text-gray-300 text-base md:text-lg leading-relaxed">
              I am a WordPress Developer with 2.5+ years of experience in building modern, responsive, and high-performing websites. I specialize in custom WordPress development, theme customization, and delivering user-friendly digital experiences that help businesses grow online.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              
              {/* Feature Card 1 */}
              <div className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/5 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent-pink/30 hover:shadow-[0_15px_35px_rgba(59,130,246,0.1)]">
                {/* Background lighting */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Rotating Futuristic Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent-pink/10 flex items-center justify-center text-accent-pink mb-6 border border-accent-pink/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Cpu className="w-6 h-6" />
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-3">
                  BESPOKE ARCHITECTURE
                </h3>
                
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  Building flexible WordPress solutions tailored around your business goals, brand identity, and long-term growth.
                </p>

                {/* Subtle border bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent-pink transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Feature Card 2 */}
              <div className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/5 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent-pink-light/30 hover:shadow-[0_15px_35px_rgba(59,130,246,0.1)]">
                {/* Background lighting */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink-light/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Rotating Futuristic Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent-pink-light/10 flex items-center justify-center text-accent-pink-light mb-6 border border-accent-pink-light/20 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-3">
                  OPTIMIZED WORKFLOW
                </h3>
                
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  Combining modern development practices, performance optimization, responsive design, and streamlined workflows to deliver reliable digital experiences.
                </p>

                {/* Subtle border bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent-pink-light transition-all duration-500 group-hover:w-full" />
              </div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
