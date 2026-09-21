import React, { useState, useEffect } from "react";
import { 
  Lock, ArrowLeft, Plus, Edit2, Trash2, ArrowUp, ArrowDown, 
  Check, Save, Eye, Layers, Star, Zap, EyeOff, ShieldAlert, LogOut 
} from "lucide-react";
import { 
  getStoredProjects, saveProjects, addProject, updateProject, deleteProject, reorderProjects, ManagedProject, CATEGORY_MAP,
  getStoredTestimonials, saveTestimonials, addTestimonial, updateTestimonial, deleteTestimonial
} from "../data/projectStore";
import { TestimonialItem } from "../types";

interface AdminDashboardProps {
  onBackToHome: () => void;
}

export default function AdminDashboard({ onBackToHome }: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  
  // Active Management Tab
  const [activeTab, setActiveTab] = useState<"projects" | "testimonials">("projects");

  // Projects State
  const [projects, setProjects] = useState<ManagedProject[]>([]);
  
  // Form States
  const [isEditing, setIsEditing] = useState(false);
  const [formId, setFormId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("wordpress");
  const [formDescription, setFormDescription] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formLiveUrl, setFormLiveUrl] = useState("");
  const [formPerformanceScore, setFormPerformanceScore] = useState<number>(98);
  const [formIsFeatured, setFormIsFeatured] = useState(true);
  const [formStatus, setFormStatus] = useState<"Published" | "Draft">("Published");
  const [formTechnologies, setFormTechnologies] = useState("");

  // Testimonials State
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [isEditingTestimonial, setIsEditingTestimonial] = useState(false);
  const [testFormId, setTestFormId] = useState<string | null>(null);
  const [testName, setTestName] = useState("");
  const [testRole, setTestRole] = useState("");
  const [testCompany, setTestCompany] = useState("");
  const [testRating, setTestRating] = useState<number>(5);
  const [testFeedback, setTestFeedback] = useState("");
  const [testAvatar, setTestAvatar] = useState("");

  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    // Check if previously logged in this session
    const authStatus = sessionStorage.getItem("rayhan_admin_logged_in");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    loadProjects();
    loadTestimonials();
  }, []);

  const loadProjects = () => {
    setProjects(getStoredProjects());
  };

  const loadTestimonials = () => {
    setTestimonials(getStoredTestimonials());
  };

  const resetTestimonialForm = () => {
    setIsEditingTestimonial(false);
    setTestFormId(null);
    setTestName("");
    setTestRole("");
    setTestCompany("");
    setTestRating(5);
    setTestFeedback("");
    setTestAvatar("");
  };

  const handleEditTestimonialClick = (t: TestimonialItem) => {
    setIsEditingTestimonial(true);
    setTestFormId(t.id);
    setTestName(t.name);
    setTestRole(t.role);
    setTestCompany(t.company);
    setTestRating(t.rating);
    setTestFeedback(t.feedback);
    setTestAvatar(t.avatar || "");
    
    // Scroll form into view
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testName.trim()) {
      triggerNotification("Client Name is required", "error");
      return;
    }
    if (!testFeedback.trim()) {
      triggerNotification("Feedback message is required", "error");
      return;
    }

    const payload = {
      name: testName,
      role: testRole || "Client",
      company: testCompany || "Independent",
      rating: Number(testRating) || 5,
      feedback: testFeedback,
      avatar: testAvatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop",
    };

    if (isEditingTestimonial && testFormId) {
      updateTestimonial({
        id: testFormId,
        ...payload,
      });
      triggerNotification("Client review updated successfully!");
    } else {
      addTestimonial(payload);
      triggerNotification("New client review added successfully!");
    }

    resetTestimonialForm();
    loadTestimonials();
  };

  const handleDeleteTestimonial = (id: string) => {
    if (confirm("Are you sure you want to delete this client review? This cannot be undone.")) {
      deleteTestimonial(id);
      triggerNotification("Client review deleted successfully.");
      loadTestimonials();
      if (testFormId === id) resetTestimonialForm();
    }
  };

  const triggerNotification = (msg: string, type: "success" | "error" = "success") => {
    setNotification({ message: msg, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple, secure credentials gate
    if (password === "admin123" || password === "rayhan@wp") {
      setIsAuthenticated(true);
      sessionStorage.setItem("rayhan_admin_logged_in", "true");
      setPassError("");
      triggerNotification("Admin Authentication Successful!");
    } else {
      setPassError("Invalid administrator passcode. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("rayhan_admin_logged_in");
    setPassword("");
  };

  // Reset all fields
  const resetForm = () => {
    setIsEditing(false);
    setFormId(null);
    setFormTitle("");
    setFormCategory("wordpress");
    setFormDescription("");
    setFormImage("");
    setFormLiveUrl("");
    setFormPerformanceScore(98);
    setFormIsFeatured(true);
    setFormStatus("Published");
    setFormTechnologies("WordPress, PHP, Custom Theme, Tailwind CSS");
  };

  const handleEditClick = (proj: ManagedProject) => {
    setIsEditing(true);
    setFormId(proj.id);
    setFormTitle(proj.title);
    setFormCategory(proj.category);
    setFormDescription(proj.description);
    setFormImage(proj.image);
    setFormLiveUrl(proj.liveUrl || "");
    setFormPerformanceScore(proj.performanceScore || 98);
    setFormIsFeatured(proj.isFeatured || false);
    setFormStatus(proj.status || "Published");
    setFormTechnologies(proj.technologies ? proj.technologies.join(", ") : "");
    
    // Scroll form into view
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      triggerNotification("Project Title is required", "error");
      return;
    }

    const techArray = formTechnologies
      .split(",")
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const projectPayload = {
      title: formTitle,
      category: formCategory as any,
      categoryLabel: CATEGORY_MAP[formCategory] || "Custom Project",
      technologies: techArray.length > 0 ? techArray : ["Custom Development"],
      description: formDescription,
      image: formImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      liveUrl: formLiveUrl || "#",
      performanceScore: Number(formPerformanceScore) || 98,
      isFeatured: formIsFeatured,
      status: formStatus,
    };

    if (isEditing && formId) {
      const match = projects.find(p => p.id === formId);
      if (match) {
        const updatedObj: ManagedProject = {
          ...match,
          ...projectPayload,
        };
        updateProject(updatedObj);
        triggerNotification("Project details updated successfully!");
      }
    } else {
      addProject(projectPayload);
      triggerNotification("New project launched successfully!");
    }

    resetForm();
    loadProjects();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you absolute sure you want to delete this project? This cannot be undone.")) {
      deleteProject(id);
      triggerNotification("Project deleted successfully.");
      loadProjects();
      if (formId === id) resetForm();
    }
  };

  const handleMove = (id: string, direction: "up" | "down") => {
    const updated = reorderProjects(id, direction);
    setProjects(updated);
    triggerNotification("Display order shifted successfully!");
  };

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen bg-dark-bg-1 text-[#F3F4F6] flex items-center justify-center py-20 px-6 futuristic-grid">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-pink/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-full max-w-md glass-panel p-8 sm:p-10 rounded-2xl border border-white/5 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-accent-pink/10 text-accent-pink mb-6 border border-accent-pink/20 animate-pulse">
            <Lock className="w-8 h-8" />
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Admin Workspace
          </h1>
          <p className="font-sans text-xs sm:text-sm text-gray-400 mb-8 max-w-xs mx-auto">
            This workspace is locked. Please enter your secret admin passcode to manage website projects.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4 text-left">
            <div>
              <label className="block font-display text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                ADMIN PASSCODE
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-dark-surface-2 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 outline-none focus:border-accent-pink transition-all"
              />
              {passError && (
                <p className="text-rose-500 font-sans text-xs mt-2.5 flex items-center gap-1.5 bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">
                  <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{passError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 bg-accent-pink hover:bg-accent-pink-hover text-white py-3.5 px-6 rounded-xl font-display text-sm font-bold tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(8,102,255,0.25)] hover:shadow-[0_4px_30px_rgba(8,102,255,0.4)] cursor-pointer"
            >
              Sign In to Workspace
            </button>
          </form>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-sans text-gray-500 hover:text-white transition-colors mt-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Public Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-dark-bg-1 text-[#F3F4F6] py-24 futuristic-grid">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/5 mb-12 gap-6">
          <div>
            <button
              onClick={onBackToHome}
              className="group inline-flex items-center gap-2 text-sm font-display font-medium text-gray-400 hover:text-accent-pink transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to Public Homepage</span>
            </button>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>Admin Project Panel</span>
              <span className="text-xs bg-accent-pink/10 border border-accent-pink/20 text-accent-pink py-1 px-3 rounded-full uppercase tracking-wider font-mono">
                Administrator
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 bg-dark-surface-1 hover:bg-rose-500/10 border border-white/10 hover:border-rose-500/20 text-gray-400 hover:text-rose-400 px-4 py-2.5 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Lock Workspace</span>
            </button>
          </div>
        </div>

        {/* Management Tabs Selector */}
        <div className="flex border-b border-white/5 mb-8 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab("projects")}
            className={`pb-4 px-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all relative cursor-pointer ${
              activeTab === "projects"
                ? "border-accent-pink text-white"
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Manage Projects</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("testimonials")}
            className={`pb-4 px-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all relative cursor-pointer ${
              activeTab === "testimonials"
                ? "border-accent-pink text-white"
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Manage Client Reviews</span>
          </button>
        </div>

        {/* Global Floating Alert Notification */}
        {notification && (
          <div className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 py-4 px-6 rounded-xl shadow-2xl border transition-all ${
            notification.type === "success" 
              ? "bg-[#0d1f14] border-emerald-500/30 text-emerald-400" 
              : "bg-[#1f0d0d] border-rose-500/30 text-rose-400"
          }`}>
            <Check className="w-5 h-5 flex-shrink-0" />
            <span className="font-sans text-sm font-semibold">{notification.message}</span>
          </div>
        )}

        {activeTab === "projects" ? (
          /* Dynamic Two Column Grid Workspace for Projects */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Column A: Project Creater/Editor Form (Sizing: 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5">
                <h2 className="font-display text-xl font-extrabold text-white mb-6 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-accent-pink" />
                  <span>{isEditing ? "Modify Project Registry" : "Register New Project"}</span>
                </h2>

                <form onSubmit={handleSave} className="flex flex-col gap-5">
                  {/* Title */}
                  <div>
                    <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                      PROJECT TITLE *
                    </label>
                    <input
                      type="text"
                      required
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="e.g. LuxeEstates Premium Commerce"
                      className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  {/* Category Selector */}
                  <div>
                    <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                      PROJECT CATEGORY
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white outline-none transition-all"
                    >
                      <option value="wordpress">WordPress Development</option>
                      <option value="woocommerce">WooCommerce Store</option>
                      <option value="elementor">Elementor Professional</option>
                      <option value="landing-page">Landing Page Optimization</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="performance">Speed Optimization</option>
                      <option value="custom-development">Custom Bespoke Project</option>
                    </select>
                  </div>

                  {/* Cover Image Input with Upload & URL options */}
                  <div>
                    <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                      PROJECT COVER IMAGE
                    </label>
                    <div className="flex flex-col gap-3">
                      {/* Drag & Drop / Click Upload Container */}
                      <div className="relative border border-dashed border-white/10 hover:border-accent-pink/40 rounded-xl p-4 transition-colors bg-dark-surface-2 flex flex-col items-center justify-center text-center group cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setFormImage(reader.result as string);
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <svg className="w-6 h-6 text-gray-500 group-hover:text-accent-pink transition-colors mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-display text-[11px] font-bold text-gray-300">
                          Upload Local Image
                        </span>
                        <span className="text-[9px] text-gray-500 mt-0.5">
                          Click to browse image files
                        </span>
                      </div>

                      {/* URL input alternative */}
                      <div className="flex items-center gap-2 my-1">
                        <div className="h-[1px] bg-white/5 flex-grow" />
                        <span className="text-[9px] font-display font-bold text-gray-500 tracking-wider">OR ENTER URL</span>
                        <div className="h-[1px] bg-white/5 flex-grow" />
                      </div>

                      <input
                        type="text"
                        value={formImage}
                        onChange={(e) => setFormImage(e.target.value)}
                        placeholder="e.g. https://images.unsplash.com/..."
                        className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all"
                      />

                      {formImage && (
                        <div className="relative rounded-xl overflow-hidden aspect-video w-full mt-1 border border-white/5 bg-black/40">
                          <img
                            src={formImage}
                            alt="Project Cover Preview"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <button
                            type="button"
                            onClick={() => setFormImage("")}
                            className="absolute top-2 right-2 bg-black/80 hover:bg-rose-600 text-white rounded-full p-1 transition-colors"
                            title="Clear Image"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Live URL Link */}
                  <div>
                    <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                      PROJECT URL / LINK
                    </label>
                    <input
                      type="text"
                      value={formLiveUrl}
                      onChange={(e) => setFormLiveUrl(e.target.value)}
                      placeholder="e.g. https://luxeestates.com"
                      className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  {/* Technologies List */}
                  <div>
                    <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                      TECHNOLOGIES (COMMA SEPARATED)
                    </label>
                    <input
                      type="text"
                      value={formTechnologies}
                      onChange={(e) => setFormTechnologies(e.target.value)}
                      placeholder="WordPress, WooCommerce, Elementor Pro, AJAX, PHP"
                      className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  {/* Performance Speed rating */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                        SPEED SCORE (0 - 100)
                      </label>
                      <input
                        type="number"
                        min="50"
                        max="100"
                        value={formPerformanceScore}
                        onChange={(e) => setFormPerformanceScore(Number(e.target.value))}
                        className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                        DISPLAY STATUS
                      </label>
                      <select
                        value={formStatus}
                        onChange={(e) => setFormStatus(e.target.value as any)}
                        className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white outline-none transition-all"
                      >
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </div>
                  </div>

                  {/* Featured Toggles */}
                  <div className="flex items-center justify-between p-3 bg-white/3 rounded-xl border border-white/5">
                    <div className="flex flex-col">
                      <span className="font-display text-xs font-bold text-white">Featured Project</span>
                      <span className="font-sans text-[10px] text-gray-500">Showcase this item on the homepage</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={formIsFeatured}
                      onChange={(e) => setFormIsFeatured(e.target.checked)}
                      className="w-4 h-4 accent-accent-pink"
                    />
                  </div>

                  {/* Description Text */}
                  <div>
                    <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                      PROJECT DESCRIPTION
                    </label>
                    <textarea
                      rows={4}
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Enter project summary details..."
                      className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-grow inline-flex items-center justify-center gap-2 bg-accent-pink hover:bg-accent-pink-hover text-white py-3 px-5 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isEditing ? "Update Project" : "Add Project"}</span>
                    </button>

                    {isEditing && (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center justify-center gap-1.5 bg-dark-surface-2 hover:bg-white/5 border border-white/5 text-gray-400 hover:text-white py-3 px-4 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    )}
                  </div>

                </form>
              </div>
            </div>

            {/* Column B: Project List & Management Row (Sizing: 7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-extrabold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-accent-pink" />
                    <span>Existing Project Registries</span>
                  </h2>
                  <span className="font-mono text-xs text-gray-500 bg-white/5 py-1 px-3 rounded-full">
                    {projects.length} Total
                  </span>
                </div>

                {/* Grid List */}
                <div className="flex flex-col gap-4 max-h-[750px] overflow-y-auto pr-1 no-scrollbar">
                  {projects.map((proj, idx) => (
                    <div
                      key={proj.id}
                      className={`p-4 bg-dark-surface-1 border rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
                        formId === proj.id 
                          ? "border-accent-pink bg-accent-pink/5" 
                          : "border-white/5 hover:border-white/10"
                      }`}
                    >
                      {/* Thumbnail and Info */}
                      <div className="flex items-center gap-3.5 flex-grow min-w-0">
                        <div className="w-16 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-black/40 border border-white/10">
                          <img
                            src={proj.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"}
                            alt={proj.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="min-w-0 flex-grow">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-display text-sm font-bold text-white truncate max-w-[180px] sm:max-w-[220px]">
                              {proj.title}
                            </h3>
                            
                            {proj.isFeatured && (
                              <span className="inline-flex items-center gap-0.5 bg-amber-500/10 text-amber-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-amber-500/20">
                                <Star className="w-2.5 h-2.5 fill-amber-400 stroke-none" />
                                <span>Featured</span>
                              </span>
                            )}

                            {proj.status === "Draft" ? (
                              <span className="bg-white/5 text-gray-500 text-[9px] font-bold px-1.5 py-0.5 rounded border border-white/5">
                                Draft
                              </span>
                            ) : (
                              <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
                                Active
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-mono text-[9px] text-accent-pink uppercase font-semibold">
                              {CATEGORY_MAP[proj.category] || proj.categoryLabel || proj.category}
                            </span>
                            <span className="text-gray-600 text-[10px]">•</span>
                            <span className="font-sans text-[10px] text-gray-500">
                              {proj.technologies ? proj.technologies.slice(0, 3).join(", ") : "Web"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Sequential Sorter & Action Triggers */}
                      <div className="flex items-center gap-1.5 self-end sm:self-auto ml-auto sm:ml-0">
                        
                        {/* Sorters */}
                        <button
                          type="button"
                          onClick={() => handleMove(proj.id, "up")}
                          disabled={idx === 0}
                          title="Move Up"
                          className="p-1.5 rounded bg-white/3 border border-white/5 text-gray-500 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleMove(proj.id, "down")}
                          disabled={idx === projects.length - 1}
                          title="Move Down"
                          className="p-1.5 rounded bg-white/3 border border-white/5 text-gray-500 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>

                        <div className="w-[1px] h-6 bg-white/5 mx-1" />

                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => handleEditClick(proj)}
                          title="Edit Project"
                          className="p-2 rounded bg-accent-pink/10 hover:bg-accent-pink text-accent-pink hover:text-white transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => handleDelete(proj.id)}
                          title="Delete Project"
                          className="p-2 rounded bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Dynamic Two Column Grid Workspace for Testimonials (Client Reviews) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Column A: Testimonial Creator/Editor Form */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5">
                <h2 className="font-display text-xl font-extrabold text-white mb-6 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-accent-pink" />
                  <span>{isEditingTestimonial ? "Modify Client Review" : "Register Client Review"}</span>
                </h2>

                <form onSubmit={handleSaveTestimonial} className="flex flex-col gap-5">
                  {/* Client Name */}
                  <div>
                    <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                      CLIENT NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={testName}
                      onChange={(e) => setTestName(e.target.value)}
                      placeholder="e.g. Steven Wilson"
                      className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  {/* Client Role & Company */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                        ROLE / DESIGNATION
                      </label>
                      <input
                        type="text"
                        value={testRole}
                        onChange={(e) => setTestRole(e.target.value)}
                        placeholder="e.g. Founder"
                        className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        value={testCompany}
                        onChange={(e) => setTestCompany(e.target.value)}
                        placeholder="e.g. LuxeEstates"
                        className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                   {/* Star Rating & Avatar URL */}
                   <div className="flex flex-col gap-4">
                     <div>
                       <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                         RATING (1 - 5 STARS)
                       </label>
                       <select
                         value={testRating}
                         onChange={(e) => setTestRating(Number(e.target.value))}
                         className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white outline-none transition-all"
                       >
                         <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                         <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                         <option value="3">⭐⭐⭐ (3 Stars)</option>
                         <option value="2">⭐⭐ (2 Stars)</option>
                         <option value="1">⭐ (1 Star)</option>
                       </select>
                     </div>

                     <div>
                       <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                         CLIENT AVATAR IMAGE
                       </label>
                       
                       <div className="flex flex-col gap-3">
                         {/* File Uploader */}
                         <div className="relative border border-dashed border-white/10 hover:border-accent-pink/40 rounded-xl p-3 transition-colors bg-dark-surface-2 flex flex-col items-center justify-center text-center group cursor-pointer">
                           <input
                             type="file"
                             accept="image/*"
                             onChange={(e) => {
                               const file = e.target.files?.[0];
                               if (file) {
                                 const reader = new FileReader();
                                 reader.onloadend = () => {
                                   setTestAvatar(reader.result as string);
                                 };
                                 reader.readAsDataURL(file);
                               }
                             }}
                             className="absolute inset-0 opacity-0 cursor-pointer z-10"
                           />
                           <svg className="w-5 h-5 text-gray-500 group-hover:text-accent-pink transition-colors mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                           </svg>
                           <span className="font-display text-[10px] font-bold text-gray-300">
                             Upload Client Photo
                           </span>
                         </div>

                         {/* URL option */}
                         <input
                           type="text"
                           value={testAvatar}
                           onChange={(e) => setTestAvatar(e.target.value)}
                           placeholder="e.g. Avatar URL..."
                           className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2 px-3 text-xs text-white placeholder-gray-600 outline-none transition-all"
                         />

                         {testAvatar && (
                           <div className="flex items-center gap-3 p-2 bg-white/3 rounded-xl border border-white/5">
                             <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-black/40">
                               <img
                                 src={testAvatar}
                                 alt="Avatar Preview"
                                 className="w-full h-full object-cover"
                                 referrerPolicy="no-referrer"
                               />
                             </div>
                             <div className="min-w-0 flex-grow">
                               <span className="text-[10px] text-gray-400 block truncate">Image loaded successfully</span>
                             </div>
                             <button
                               type="button"
                               onClick={() => setTestAvatar("")}
                               className="text-gray-500 hover:text-rose-400 p-1"
                             >
                               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                               </svg>
                             </button>
                           </div>
                         )}
                       </div>
                     </div>
                   </div>

                  {/* Feedback description text */}
                  <div>
                    <label className="block font-display text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                      CLIENT FEEDBACK / REVIEW *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={testFeedback}
                      onChange={(e) => setTestFeedback(e.target.value)}
                      placeholder="Rayhan completely redefined our brand experience..."
                      className="w-full bg-dark-surface-2 border border-white/5 focus:border-accent-pink rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-grow inline-flex items-center justify-center gap-2 bg-accent-pink hover:bg-accent-pink-hover text-white py-3 px-5 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isEditingTestimonial ? "Update Review" : "Add Review"}</span>
                    </button>

                    {isEditingTestimonial && (
                      <button
                        type="button"
                        onClick={resetTestimonialForm}
                        className="inline-flex items-center justify-center gap-1.5 bg-dark-surface-2 hover:bg-white/5 border border-white/5 text-gray-400 hover:text-white py-3 px-4 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    )}
                  </div>

                </form>
              </div>
            </div>

            {/* Column B: Testimonials List */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-extrabold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400 stroke-none" />
                    <span>Existing Client Reviews</span>
                  </h2>
                  <span className="font-mono text-xs text-gray-500 bg-white/5 py-1 px-3 rounded-full">
                    {testimonials.length} Total
                  </span>
                </div>

                {/* Grid List */}
                <div className="flex flex-col gap-4 max-h-[750px] overflow-y-auto pr-1 no-scrollbar">
                  {testimonials.map((test) => (
                    <div
                      key={test.id}
                      className={`p-4 bg-dark-surface-1 border rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
                        testFormId === test.id 
                          ? "border-accent-pink bg-accent-pink/5" 
                          : "border-white/5 hover:border-white/10"
                      }`}
                    >
                      {/* Avatar and Info */}
                      <div className="flex items-center gap-3.5 min-w-0 flex-grow">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-black/40 border-2 border-accent-pink/30">
                          <img
                            src={test.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop"}
                            alt={test.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="min-w-0 flex-grow">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-display text-sm font-bold text-white truncate">
                              {test.name}
                            </h4>
                            <div className="flex gap-0.5">
                              {[...Array(test.rating)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 fill-amber-400 stroke-none" />
                              ))}
                            </div>
                          </div>

                          <p className="font-sans text-xs text-gray-500 mt-0.5">
                            {test.role} at <span className="text-gray-400">{test.company}</span>
                          </p>

                          <p className="font-sans text-xs text-gray-400 leading-normal italic mt-2 line-clamp-2">
                            "{test.feedback}"
                          </p>
                        </div>
                      </div>

                      {/* Action Triggers */}
                      <div className="flex items-center gap-1.5 self-end sm:self-auto ml-auto sm:ml-0 flex-shrink-0">
                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => handleEditTestimonialClick(test)}
                          title="Edit Review"
                          className="p-2 rounded bg-accent-pink/10 hover:bg-accent-pink text-accent-pink hover:text-white transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => handleDeleteTestimonial(test.id)}
                          title="Delete Review"
                          className="p-2 rounded bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
