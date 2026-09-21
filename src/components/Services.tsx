import React from "react";
import { ArrowUpRight, Layout, ShoppingBag, Code2, Target, Zap, Smartphone } from "lucide-react";
import { servicesData } from "../data";
import AnimatedSection from "./AnimatedSection";

// Helper to map string names to Lucide Icon components
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Layout":
      return <Layout className={className} />;
    case "ShoppingBag":
      return <ShoppingBag className={className} />;
    case "Code2":
      return <Code2 className={className} />;
    case "Target":
      return <Target className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Smartphone":
      return <Smartphone className={className} />;
    default:
      return <Layout className={className} />;
  }
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-12 md:py-20 bg-dark-bg-1 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent-pink/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-pink-light/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="text-center mb-8 md:mb-12">
            <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-3">
              WHAT I DO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Digital Solutions Built <br />
              <span className="bg-gradient-to-r from-accent-pink to-accent-pink-light bg-clip-text text-transparent">
                For Real Business Growth
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <AnimatedSection
              key={service.id}
              direction="up"
              delay={0.15 + (index % 3) * 0.1}
            >
              <div
                className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/5 bg-dark-surface-1/45 relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-accent-pink/30 hover:shadow-[0_15px_30px_rgba(59,130,246,0.12)] h-full"
              >
                {/* Back-glow layout overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Top Row: Number and Custom Arrow Link */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-sm font-bold tracking-widest text-accent-pink bg-accent-pink/10 px-3.5 py-1.5 rounded-lg border border-accent-pink/15">
                    {service.number}
                  </span>
                  
                  {/* Arrow that animates diagonally */}
                  <div className="w-9 h-9 rounded-full bg-dark-surface-2 flex items-center justify-center text-gray-500 border border-white/5 transition-all duration-300 group-hover:bg-accent-pink group-hover:text-white group-hover:border-transparent">
                    <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Service Icon with scaling animation */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 mb-6 border border-white/10 transition-all duration-300 group-hover:bg-accent-pink/10 group-hover:text-accent-pink group-hover:border-accent-pink/20 group-hover:scale-110">
                  <ServiceIcon name={service.iconName} className="w-6 h-6" />
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-4 group-hover:text-accent-pink transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle accent border bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-pink transition-all duration-500 group-hover:w-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
