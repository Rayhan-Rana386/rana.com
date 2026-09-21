import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate rapid premium submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form values
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-12 md:py-20 bg-dark-bg-1 overflow-hidden"
    >
      {/* Background radial glowing gradients */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-accent-pink/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-pink-dark/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Location Details & Pitch */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-display text-xs font-bold tracking-[0.25em] text-accent-pink uppercase block mb-3">
              LET'S WORK TOGETHER
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Get Ready <br />
              <span className="bg-gradient-to-r from-accent-pink to-accent-pink-light bg-clip-text text-transparent">
                To Create Great
              </span>
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-sm">
              Have a project in mind? Let's turn your idea into a fast, modern, and high-performing digital experience.
            </p>

            {/* Contact cards detail column */}
            <div className="space-y-4 sm:space-y-5">
              
              {/* Location Card */}
              <div className="glass-panel p-5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-accent-pink/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-accent-pink/10 flex items-center justify-center text-accent-pink border border-accent-pink/15">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">Location</div>
                  <div className="text-sm font-semibold text-white">Dhaka, Bangladesh</div>
                </div>
              </div>

              {/* Email Card */}
              <a
                href="mailto:mahmudrayhan386@gmail.com"
                className="glass-panel p-5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-accent-pink/25 transition-all duration-300 block"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-pink/10 flex items-center justify-center text-accent-pink border border-accent-pink/15">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">Email</div>
                  <div className="text-sm font-semibold text-white hover:text-accent-pink transition-colors">
                    mahmudrayhan386@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone / WhatsApp Card */}
              <a
                href="https://wa.me/8801731389828"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-accent-pink/20 transition-all duration-300 block"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-pink/10 flex items-center justify-center text-accent-pink border border-accent-pink/15">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">WhatsApp / Phone</div>
                  <div className="text-sm font-semibold text-white hover:text-accent-pink transition-colors">
                    +880 1731-389828
                  </div>
                </div>
              </a>

            </div>
          </AnimatedSection>

          {/* Right Column: Premium Contact Form */}
          <AnimatedSection direction="left" delay={0.2} className="lg:col-span-7">
            <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl border border-white/5 bg-dark-surface-1/80 relative overflow-hidden shadow-2xl">
              
              {isSubmitted ? (
                /* Elegant Success Animation state */
                <div className="py-12 text-center flex flex-col items-center justify-center animate-float-fast">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-sans text-sm text-gray-400 max-w-sm mb-8 leading-relaxed">
                    Thank you for reaching out, Rayhan. I have received your request and will respond within the next 24 hours. Let's create something premium!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="font-display text-xs font-bold uppercase tracking-wider text-accent-pink hover:text-white transition-colors py-2 px-5 rounded-full border border-accent-pink/20 hover:border-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Interactive Form fields */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                        Your Name <span className="text-accent-pink">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-dark-surface-2/60 border rounded-xl py-3 px-4 text-sm text-white font-sans outline-none focus:border-accent-pink focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 ${
                          errors.name ? "border-red-500" : "border-white/5"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-dark-surface-2/60 border border-white/5 rounded-xl py-3 px-4 text-sm text-white font-sans outline-none focus:border-accent-pink focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                        placeholder="+880 1700-000000"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                        Your Email <span className="text-accent-pink">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-dark-surface-2/60 border rounded-xl py-3 px-4 text-sm text-white font-sans outline-none focus:border-accent-pink focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 ${
                          errors.email ? "border-red-500" : "border-white/5"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                        Subject <span className="text-accent-pink">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full bg-dark-surface-2/60 border rounded-xl py-3 px-4 text-sm text-white font-sans outline-none focus:border-accent-pink focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 ${
                          errors.subject ? "border-red-500" : "border-white/5"
                        }`}
                        placeholder="Project Consultation"
                      />
                      {errors.subject && (
                        <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                      Your Message <span className="text-accent-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full bg-dark-surface-2/60 border rounded-xl py-3 px-4 text-sm text-white font-sans outline-none focus:border-accent-pink focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 ${
                        errors.message ? "border-red-500" : "border-white/5"
                      }`}
                      placeholder="Describe your premium site idea, required features, and timeline..."
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-pink to-accent-pink-light text-white font-display text-sm font-bold tracking-wider uppercase py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                </form>
              )}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
