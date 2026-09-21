import React, { useEffect, useState } from "react";
import { ArrowRight, Linkedin, Github, Mail, HelpCircle, Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";

const profileImg = "/profile.webp";

interface HeroProps {
  onStartProjectClick: () => void;
  onViewPortfolioClick: () => void;
}

export default function Hero({ onStartProjectClick, onViewPortfolioClick }: HeroProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 pb-10 sm:pb-14 flex flex-col justify-center overflow-hidden bg-dark-bg-1 futuristic-grid"
    >
      {/* Background Topographic Wave Contours (Aesthetic design match) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M -100 250 C 200 150, 300 450, 600 300 C 900 150, 800 550, 1200 350 C 1400 250, 1500 400, 1600 300"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <path
          d="M -50 350 C 250 250, 350 550, 650 400 C 950 250, 850 650, 1250 450 C 1450 350, 1550 500, 1650 400"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1"
        />
        <path
          d="M -150 180 C 150 80, 250 380, 550 230 C 850 80, 750 480, 1150 280 C 1350 180, 1450 330, 1550 230"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="2"
        />
        <path
          d="M 100 650 C 350 550, 450 850, 750 700 C 1050 550, 950 950, 1350 750"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>

      {/* Radial soft ambient backdrop lightings */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-accent-pink/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] rounded-full bg-accent-pink-dark/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Core Conversion Pitch */}
        <div 
          className={`lg:col-span-6 flex flex-col justify-center transition-all duration-1000 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Eyebrow label matching designer template */}
          <span className="font-display text-sm font-semibold tracking-wide text-accent-pink-light mb-3 block">
            Welcome to my portfolio!
          </span>

          {/* Main Title matching Ben Parker layout precisely */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Hey I'm <span className="text-accent-pink">Rayhan Rana</span> <br />
            a WordPress <br />
            web developer.
          </h1>

          {/* Core Custom Content for Rayhan */}
          <p className="font-sans text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 sm:mb-10">
            I'm a premium WordPress Developer & WooCommerce Expert with 2.5+ years of experience crafting high-performance, bespoke custom-coded websites and high-converting e-commerce stores.
          </p>

          {/* Custom Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-6 sm:mb-8">
            {/* Download CV with premium drop-shadow glow */}
            <button
              onClick={onStartProjectClick}
              className="relative inline-flex items-center justify-center bg-accent-pink hover:bg-accent-pink-hover text-white font-display text-xs sm:text-sm font-bold tracking-wide py-3 sm:py-3.5 px-6 sm:px-8 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Download cv
            </button>

            {/* Outlined "See my work" button with elongated arrow */}
            <button
              onClick={onViewPortfolioClick}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-transparent hover:bg-white/5 text-white font-display text-xs sm:text-sm font-bold tracking-wide py-3 sm:py-3.5 px-6 sm:px-8 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <span>See my work</span>
              <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300 font-mono">
                ————&gt;
              </span>
            </button>
          </div>

          {/* Quick Social Links row for Mobile/Tablet */}
          <div className="flex xl:hidden items-center gap-3 mb-4">
            <a
              href="https://www.linkedin.com/in/developer-rayhan-rana/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-dark-surface-2 hover:bg-accent-pink border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all text-xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/rayahana.rana.373035"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-dark-surface-2 hover:bg-accent-pink border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all text-xs"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/developer__rana/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-dark-surface-2 hover:bg-accent-pink border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all text-xs"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:mahmudrayhan386@gmail.com"
              className="w-8 h-8 rounded-full bg-dark-surface-2 hover:bg-accent-pink border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all text-xs"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Animated Scroll Down indicator (bottom left) */}
          <div className="hidden sm:flex items-center gap-3 mt-4 opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-accent-pink-light" 
              />
            </div>
            <span className="font-sans text-xs tracking-widest text-gray-400 uppercase select-none">
              Scroll down
            </span>
          </div>
        </div>

        {/* Right Column - Stadium Frame & Floating 3D Assets */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
          
          <div 
            className={`relative w-full max-w-[280px] sm:max-w-[340px] aspect-[1/1.4] transition-all duration-1000 delay-300 transform ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Ambient Back Glow behind Arch Frame */}
            <div className="absolute -inset-12 bg-radial-gradient from-accent-pink/20 to-transparent blur-3xl pointer-events-none" />

            {/* Mathematically precise Stadium Arch shape container */}
            <div className="w-full h-full rounded-[140px] sm:rounded-[170px] overflow-hidden border-2 border-white/10 relative shadow-[0_25px_60px_rgba(0,0,0,0.7)] bg-dark-surface-1/90">
              <img
                src={profileImg}
                alt="Rayhan Rana"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== "/profile.png") {
                    target.src = "/profile.png";
                  }
                }}
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg-1/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating 3D Geometric Shapes matching layout screenshot exactly */}
            
            {/* 3D WordPress Badge - top left */}
            <motion.div
              animate={{ 
                y: [0, -14, 0],
                rotateZ: [0, 8, 0],
                rotateY: [0, 15, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5, 
                ease: "easeInOut" 
              }}
              className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 z-20 cursor-grab active:cursor-grabbing select-none scale-75 sm:scale-100"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#005a87] via-[#0073aa] to-[#21759b] flex items-center justify-center p-3 sm:p-3.5 shadow-[0_12px_24px_rgba(0,115,170,0.5)] border border-white/20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 4.3c21.8 0 39.9 15.6 44 36.4l-11.8 33.1L64.4 20C73.8 24.3 80.9 32.3 84 42L72.2 74.4 56.4 31c2-1 3.5-3.3 3.5-5.2 0-2.3-1.9-4.2-4.2-4.2h-11c2.3 0 4.2 1.9 4.2 4.2 0 1.9-1.5 4.2-3.5 5.2l-3.3 9.1-8.5-25.5c4-.6 8.1-1.3 12.1-1.3zm-39.7 45c0-16.7 9.5-31.2 23.3-38.3L15.3 64.9C11.5 60.5 10.3 55.4 10.3 49.3zm38.1 46.2c-15.6 0-29.3-8.1-37.4-20.4l24-69c.8 2.3 1.5 4.7 1.5 7 0 2.8-.7 5.6-2.1 8.4l-12 25.2c-1.4 2.8-2.1 5.6-2.1 8.4 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.8-.7-5.6-2.1-8.4L37.1 27.5C39.4 22 40.8 16.5 40.8 11c0-2.8-.7-5.6-2.1-8.4l11.7 33.1L62 11c-1.4 2.8-2.1 5.6-2.1 8.4 0 5.5 1.4 11 3.7 16.5l-15.2 45.4zm34.2-41.2l-13.3 37.3c9.9-6.3 16.5-17.3 16.5-29.8 0-2.6-.3-5.2-.9-7.5z"/>
                </svg>
              </div>
            </motion.div>

            {/* 3D Elementor Badge - bottom right */}
            <motion.div
              animate={{ 
                y: [0, 16, 0],
                rotateZ: [0, -8, 0],
                rotateX: [0, 15, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4.5, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 z-20 cursor-grab active:cursor-grabbing select-none scale-75 sm:scale-100"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#92003B] via-[#D30C5C] to-[#E31B6D] flex items-center justify-center p-3.5 sm:p-4 shadow-[0_12px_25px_rgba(211,12,92,0.45)] border border-white/20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm22 72H58V40h14v32zm-18 0H40V28h14v44zm-18 0H22V40h14v32z" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Rightmost Border Follow Dock Panel */}
        <div className="hidden xl:flex xl:col-span-1 flex-col items-center justify-center gap-10 relative h-full">
          {/* Vertical Writing "FOLLOW ME ON" with neat long dash */}
          <div className="flex items-center gap-3 rotate-90 origin-center whitespace-nowrap">
            <span className="font-display text-[10px] tracking-[0.25em] text-gray-500 font-bold uppercase">
              FOLLOW ME ON
            </span>
            <span className="text-gray-600 tracking-tighter font-mono">—&gt;</span>
          </div>

          {/* Premium Floating Round Social Handles */}
          <div className="flex flex-col gap-3.5 mt-8">
            <a
              href="https://www.linkedin.com/in/developer-rayhan-rana/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-dark-surface-2 hover:bg-accent-pink border border-white/5 hover:border-transparent flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-0.5"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/rayahana.rana.373035"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-dark-surface-2 hover:bg-accent-pink border border-white/5 hover:border-transparent flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-0.5"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/developer__rana/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-dark-surface-2 hover:bg-accent-pink border border-white/5 hover:border-transparent flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-0.5"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:mahmudrayhan386@gmail.com"
              className="w-9 h-9 rounded-full bg-dark-surface-2 hover:bg-accent-pink border border-white/5 hover:border-transparent flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-0.5"
              aria-label="Email Rayhan"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Hero Statistics Row (Blended beautifully at bottom) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-10 sm:mt-14 relative z-10">
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {/* Stats Card 1 */}
          <div className="glass-panel p-3 sm:p-5 rounded-2xl text-center border border-white/5 relative group overflow-hidden transition-all duration-300 hover:border-accent-pink/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-display text-lg sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-pink-light">
                50+
              </span>
            </h3>
            <p className="font-sans text-[8px] sm:text-[10px] lg:text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Projects Done
            </p>
          </div>

          {/* Stats Card 2 */}
          <div className="glass-panel p-3 sm:p-5 rounded-2xl text-center border border-white/5 relative group overflow-hidden transition-all duration-300 hover:border-accent-pink/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-display text-lg sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-pink-light">
                99%
              </span>
            </h3>
            <p className="font-sans text-[8px] sm:text-[10px] lg:text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Success Rate
            </p>
          </div>

          {/* Stats Card 3 */}
          <div className="glass-panel p-3 sm:p-5 rounded-2xl text-center border border-white/5 relative group overflow-hidden transition-all duration-300 hover:border-accent-pink/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-display text-lg sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-pink-light">
                2.5+
              </span>
            </h3>
            <p className="font-sans text-[8px] sm:text-[10px] lg:text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Years Exp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
