import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { getStoredTestimonials } from "../data/projectStore";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTestimonials(getStoredTestimonials());
  }, []);

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    if (totalSlides === 0) return;
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (totalSlides === 0) return;
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (totalSlides === 0) return;
    if (!isHovered) {
      autoSlideInterval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    } else {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [isHovered, totalSlides]);

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-32 bg-dark-bg-1 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative glows */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-16">
          <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-4">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Awesome Clients
          </h2>
          <p className="font-sans text-sm text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            My awesome clients’ satisfaction in WordPress development and design is my key for creating fast, secure, and responsive websites.
          </p>
        </div>

        {/* Carousel Outer Container */}
        <div className="relative overflow-hidden py-4">
          
          {/* Slides Viewport wrapper */}
          <div className="hidden lg:grid grid-cols-3 gap-6 transition-all duration-500">
            {/* On desktop show 3 cards side-by-side but shift indices using state */}
            {testimonials.map((item, index) => {
              // Highlight active slides or let them stand normally
              const isLead = index === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`glass-panel p-8 rounded-2xl border transition-all duration-500 relative flex flex-col justify-between h-full bg-[#0a0a0c]/60 ${
                    isLead ? "border-accent-pink/35 shadow-[0_10px_30px_rgba(255,0,102,0.1)] scale-[1.02]" : "border-white/5 opacity-60"
                  }`}
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />

                  <div>
                    {/* Stars Rating Row */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                      ))}
                    </div>

                    {/* Feedback Text */}
                    <p className="font-sans text-sm text-gray-300 leading-relaxed italic mb-8">
                      "{item.feedback}"
                    </p>
                  </div>

                  {/* Profile Row */}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent-pink/30"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-display text-sm font-bold text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="font-sans text-xs text-gray-500 mt-0.5">
                        {item.role}, <span className="text-gray-600">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tablet Layout (Visible on MD screens, hidden on other) */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="glass-panel p-8 rounded-2xl border border-white/5 relative flex flex-col justify-between h-full bg-dark-surface-1/60"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed italic mb-8">
                    "{item.feedback}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white leading-tight">
                      {item.name}
                    </h4>
                    <p className="font-sans text-xs text-gray-500 mt-0.5">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout (Slide 1 by 1) */}
          <div className="md:hidden block">
            {testimonials.map((item, index) => {
              if (index !== activeIndex) return null;
              return (
                <div
                  key={item.id}
                  className="glass-panel p-6 rounded-2xl border border-accent-pink/20 relative flex flex-col justify-between bg-dark-surface-1/80 transition-all duration-500"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5" />
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                      "{item.feedback}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-accent-pink/30"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-display text-xs font-bold text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="font-sans text-[10px] text-gray-500 mt-0.5">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls Section */}
          <div className="flex items-center justify-between mt-12">
            
            {/* Pagination Dots Indicator */}
            <div className="flex gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-accent-pink w-6 shadow-[0_0_8px_#3B82F6]"
                      : "bg-white/10 hover:bg-white/25"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-dark-surface-1 hover:bg-accent-pink text-gray-400 hover:text-white flex items-center justify-center border border-white/5 hover:border-transparent transition-all duration-300 shadow-md"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-dark-surface-1 hover:bg-accent-pink text-gray-400 hover:text-white flex items-center justify-center border border-white/5 hover:border-transparent transition-all duration-300 shadow-md"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
