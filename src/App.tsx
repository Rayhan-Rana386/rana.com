import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "projects" | "admin">("home");
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  // Handles dynamic page redirects to home targets
  const handleNavigate = (view: "home" | "projects" | "admin", sectionId?: string) => {
    setCurrentView(view);
    if (sectionId) {
      setScrollTarget(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (currentView === "home" && scrollTarget) {
      // Small timeout to allow home elements to mount before scrolling
      const timer = setTimeout(() => {
        scrollToSection(scrollTarget);
        setScrollTarget(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentView, scrollTarget]);

  return (
    <div className="relative bg-dark-bg-1 text-[#F3F4F6] min-h-screen selection:bg-accent-pink/30 selection:text-white">
      
      {/* Premium Navigation Header */}
      <Navbar 
        onContactClick={() => handleNavigate("home", "contact")} 
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Dynamic Views Manager */}
      {currentView === "home" && (
        <main>
          {/* Full-screen Hero Section with floating mockup workspace */}
          <Hero 
            onStartProjectClick={() => handleNavigate("home", "contact")} 
            onViewPortfolioClick={() => handleNavigate("projects")} 
          />

          {/* Filterable Portfolio Selection (Moved right after Hero as requested) */}
          <Portfolio onViewAllProjects={() => handleNavigate("projects")} />

          {/* Vision & About Section */}
          <About />

          {/* Experience & Education Vertical central glowing timeline */}
          <Experience />

          {/* Skills & Expertise interactive progress dashboard */}
          <Skills />

          {/* Grid of 6 Premium Service Cards */}
          <Services />

          {/* Awesome client dynamic feedback carousel */}
          <Testimonials />

          {/* WordPress & AI Automation expert areas */}
          <Expertise />

          {/* Location cards and conversion form with feedback states */}
          <Contact />
        </main>
      )}

      {currentView === "projects" && (
        <ProjectsPage 
          onBackToHome={() => handleNavigate("home", "home")} 
          onContactClick={() => handleNavigate("home", "contact")}
        />
      )}

      {currentView === "admin" && (
        <AdminDashboard 
          onBackToHome={() => handleNavigate("home", "home")} 
        />
      )}

      {/* Dark premium footer with newsletter subscription, links & social items */}
      <Footer onNavigate={(view) => handleNavigate(view, "home")} />

    </div>
  );
}

