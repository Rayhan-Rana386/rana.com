export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  companyOrInstitution: string;
  description: string;
  type: "experience" | "education";
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "wordpress" | "woocommerce" | "landing-page" | "redesign" | "performance";
  categoryLabel: string;
  technologies: string[];
  description: string;
  image: string;
  liveUrl?: string;
  performanceScore?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  feedback: string;
  avatar: string;
}

export interface ExpertiseItem {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  iconName: string;
}
