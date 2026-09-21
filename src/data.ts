import { TimelineItem, SkillCategory, ServiceItem, ProjectItem, TestimonialItem, ExpertiseItem } from "./types";

export const timelineData: TimelineItem[] = [
  {
    year: "2022 – 2024",
    title: "Senior WordPress Developer",
    companyOrInstitution: "Apex Digital Solutions",
    description: "Led development of high-converting WooCommerce stores and custom bespoke WordPress themes. Optimized site performance across 30+ client projects, achieving an average 95+ PageSpeed score.",
    type: "experience"
  },
  {
    year: "2021 – 2022",
    title: "Web Developer",
    companyOrInstitution: "Zenith Agency",
    description: "Built client websites with tailored WordPress setups. Managed custom plugin integrations, responsive layout design, and smooth user interactions for international brands.",
    type: "experience"
  },
  {
    year: "2020 – 2021",
    title: "UI Designer & Theme Integrator",
    companyOrInstitution: "PixelCraft Studios",
    description: "Bridged the gap between high-end Figma designs and WordPress. Crafted custom Elementor widgets and modern front-end interactions utilizing responsive CSS frameworks.",
    type: "experience"
  },
  {
    year: "2019 – 2020",
    title: "Intern UI/UX Designer",
    companyOrInstitution: "Nova Media Group",
    description: "Conducted user research, wireframed interactive experiences, and developed custom landing pages using WordPress block editors.",
    type: "experience"
  },
  {
    year: "2022",
    title: "CS50: Programming Course",
    companyOrInstitution: "Harvard University (Online)",
    description: "Rigorous training in computer science foundation, algorithms, and data structures to elevate custom theme backend development quality.",
    type: "education"
  },
  {
    year: "2021",
    title: "Advanced Web & UI/UX Design Course",
    companyOrInstitution: "Creative IT Institute",
    description: "Specialized in user psychology, typographic hierarchy, spatial design patterns, and converting UI principles into functional websites.",
    type: "education"
  },
  {
    year: "2020",
    title: "WordPress Core & Plugin Development",
    companyOrInstitution: "Interactive Design Academy",
    description: "Focused on custom PHP hooks, WordPress API, custom query loops, and bespoke block editor patterns.",
    type: "education"
  },
  {
    year: "2018 – 2020",
    title: "Design & Technology Diploma",
    companyOrInstitution: "National Academy of Arts",
    description: "Academic training in graphic layouts, responsive digital formats, branding logic, and human-computer interactions.",
    type: "education"
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "DESIGN SKILLS",
    skills: [
      { name: "WordPress Design", percentage: 95 },
      { name: "Elementor Pro", percentage: 97 },
      { name: "Web Design (UI/UX)", percentage: 90 },
      { name: "Figma to WordPress", percentage: 85 }
    ]
  },
  {
    title: "DEVELOPMENT SKILLS",
    skills: [
      { name: "E-commerce Development", percentage: 98 },
      { name: "Theme Customization (PHP/CSS)", percentage: 97 },
      { name: "Speed Optimization", percentage: 94 },
      { name: "JavaScript / React", percentage: 79 }
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "service-1",
    number: "01",
    title: "WordPress Design",
    description: "Modern, responsive WordPress websites custom designed around your brand identity, target audience, and key business goals.",
    iconName: "Layout"
  },
  {
    id: "service-2",
    number: "02",
    title: "E-commerce Development",
    description: "High-performing WooCommerce stores engineered to provide smooth checkout experiences, robust security, and maximum conversions.",
    iconName: "ShoppingBag"
  },
  {
    id: "service-3",
    number: "03",
    title: "Theme Customization",
    description: "Transform existing WordPress themes or starter architectures into highly bespoke, pixel-perfect layouts tailored around your requirements.",
    iconName: "Code2"
  },
  {
    id: "service-4",
    number: "04",
    title: "Landing Page Design",
    description: "Highly focused, conversion-optimized landing pages configured with rapid load times and crisp copy to turn traffic into clients.",
    iconName: "Target"
  },
  {
    id: "service-5",
    number: "05",
    title: "Website Speed Optimization",
    description: "Advanced page speed optimization securing sub-second loading speeds, superb Core Web Vitals, and premium user experiences.",
    iconName: "Zap"
  },
  {
    id: "service-6",
    number: "06",
    title: "Responsive Design",
    description: "Meticulously tested, pixel-perfect styling that transitions seamlessly across smartphones, tablets, laptops, and ultra-wide desktop monitors.",
    iconName: "Smartphone"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "project-1",
    title: "LuxeEstates Premium",
    category: "wordpress",
    categoryLabel: "WordPress",
    technologies: ["Custom Theme", "PHP", "Tailwind CSS", "Figma", "Advanced Custom Fields"],
    description: "A highly premium estate discovery portal. Implemented advanced query hooks, interactive maps integration, custom Gutenberg blocks, and dynamic metadata schemas.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    performanceScore: 98,
    liveUrl: "#"
  },
  {
    id: "project-2",
    title: "NovaShop E-Commerce",
    category: "woocommerce",
    categoryLabel: "WooCommerce",
    technologies: ["WooCommerce", "Elementor Pro", "Custom AJAX Cart", "Stripe API", "WP Rocket"],
    description: "A luxury multi-category boutique store featuring lightning-fast product filtering, live search results, customized checkout, and premium micro-animations.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
    performanceScore: 97,
    liveUrl: "#"
  },
  {
    id: "project-3",
    title: "SaaSify Conversion Engine",
    category: "landing-page",
    categoryLabel: "Landing Page",
    technologies: ["Elementor Pro", "Tailwind CSS", "Lottie Animations", "Astra", "Contact Form 7"],
    description: "High-converting single-page application built for an AI workspace. Focused on modern light effects, magnetic CTA triggers, and crisp interactive product mockups.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    performanceScore: 99,
    liveUrl: "#"
  },
  {
    id: "project-4",
    title: "Apex Corporate Transformation",
    category: "redesign",
    categoryLabel: "Website Redesign",
    technologies: ["UnderStrap", "Bootstrap 5", "Bespoke Branding", "Custom Post Types", "GSAP"],
    description: "Re-engineered a legacy global consulting site into a sleek dark SaaS-inspired layout. Retained all legacy SEO equity while boosting user session duration by 42%.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    performanceScore: 95,
    liveUrl: "#"
  },
  {
    id: "project-5",
    title: "Velocity Speed Engine",
    category: "performance",
    categoryLabel: "Speed Optimization",
    technologies: ["Bedrock", "Asset Minification", "Redis Caching", "Cloudflare CDN", "Core Web Vitals"],
    description: "Complete performance overhaul for a high-traffic media agency. Cut initial load times from 6.4 seconds down to 0.8 seconds, optimizing image compression and script deferrals.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    performanceScore: 100,
    liveUrl: "#"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Steven Wilson",
    role: "Founder & Creative Director",
    company: "LuxeEstates Group",
    rating: 5,
    feedback: "Rayhan completely redefined our brand experience. The custom WordPress architecture he engineered is robust, lightning fast, and incredibly simple for our internal marketing team to operate. Our conversion rates spiked by 35% in the first month!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-2",
    name: "James Cooper",
    role: "E-Commerce Director",
    company: "Nova Retailers",
    rating: 5,
    feedback: "Rayhan is a WooCommerce wizard. He engineered a custom checkout workflow and asynchronous filtering that rivals top-tier SaaS platforms. Our store load times dropped to sub-second levels, and mobile checkouts became frictionless.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-3",
    name: "Sarah Johnson",
    role: "VP of Product Strategy",
    company: "SaaSify Systems",
    rating: 5,
    feedback: "The landing page Rayhan built for our product launch exceeded all expectations. Pixel-perfect translation from our Figma file combined with extremely smooth animations and beautiful layout structure. He is our go-to expert.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-4",
    name: "Michael Chen",
    role: "Technical Operations Manager",
    company: "Apex Global Consulting",
    rating: 5,
    feedback: "We brought Rayhan in to resolve severe performance issues on our global network of WordPress sites. His thorough optimizations and clean PHP structure secured 99+ ratings across mobile and desktop. Exceptional talent.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
];

export const expertiseData: ExpertiseItem[] = [
  {
    title: "WORDPRESS DEVELOPMENT",
    subtitle: "Core Architecture & Ecosystem",
    description: "Full-stack WordPress mastery focused on custom-coded PHP solutions, theme engineering, and database efficiency. Rejecting slow, bloated page builders in favor of lightweight, custom architectures.",
    bullets: [
      "Custom Theme & Plugin Development",
      "Dynamic Gutenberg Block Integration",
      "Robust WooCommerce Optimization",
      "Complex Hooks & Rest API Connections",
      "Core Web Vitals & Redis Caching Engine",
      "Responsive Fluid Mobile Development"
    ],
    iconName: "FileCode"
  },
  {
    id: "exp-2",
    title: "AI INTEGRATION",
    subtitle: "Next-Gen Web Automation",
    description: "Enriching standard websites with modern AI-powered integrations. Enhancing user interaction, dynamic personalization, and streamlining development workflows using modern intelligent tools.",
    bullets: [
      "AI Chatbots & Helpdesk Automation",
      "Semantic Search & LLM Vector Queries",
      "Automated Custom Content Pipelines",
      "Intelligent Speed & Resource Allocation",
      "Modern AI-assisted Development Tools",
      "Automated SEO & Structured JSON Schema"
    ],
    iconName: "Cpu"
  } as any // custom extend
];
