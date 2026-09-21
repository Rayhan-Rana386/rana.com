import { ProjectItem, TestimonialItem } from "../types";
import { projectsData, testimonialsData } from "../data";

// Extends ProjectItem with optional management fields
export interface ManagedProject extends ProjectItem {
  shortDescription?: string;
  isFeatured?: boolean;
  status?: "Published" | "Draft";
  orderIndex: number;
}

const STORAGE_KEY = "rayhan_rana_projects_db";

// Standard preset category mapping for dynamic allocation
export const CATEGORY_MAP: Record<string, string> = {
  "wordpress": "WordPress",
  "woocommerce": "WooCommerce",
  "elementor": "Elementor",
  "landing-page": "Landing Page",
  "redesign": "Website Redesign",
  "performance": "Speed Optimization",
  "custom-development": "Custom Development"
};

// Seed default projects to ManagedProject format
function getInitialSeededProjects(): ManagedProject[] {
  return projectsData.map((p, index) => ({
    ...p,
    shortDescription: p.description.substring(0, 100) + "...",
    isFeatured: index < 3, // mark first 3 as featured by default
    status: "Published",
    orderIndex: index,
  }));
}

export function getStoredProjects(): ManagedProject[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      const seeded = getInitialSeededProjects();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    const parsed = JSON.parse(data) as ManagedProject[];
    // Ensure all have orderIndex
    return parsed.map((p, i) => ({
      ...p,
      orderIndex: p.orderIndex !== undefined ? p.orderIndex : i,
      status: p.status || "Published",
      isFeatured: p.isFeatured !== undefined ? p.isFeatured : true,
    })).sort((a, b) => a.orderIndex - b.orderIndex);
  } catch (err) {
    console.error("Failed to load projects from storage", err);
    return getInitialSeededProjects();
  }
}

export function saveProjects(projects: ManagedProject[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error("Failed to save projects to storage", err);
  }
}

export function addProject(project: Omit<ManagedProject, "id" | "orderIndex">): ManagedProject {
  const current = getStoredProjects();
  const nextOrder = current.length > 0 ? Math.max(...current.map(p => p.orderIndex)) + 1 : 0;
  const newProj: ManagedProject = {
    ...project,
    id: `project-${Date.now()}`,
    orderIndex: nextOrder,
  };
  const updated = [...current, newProj];
  saveProjects(updated);
  return newProj;
}

export function updateProject(project: ManagedProject): void {
  const current = getStoredProjects();
  const updated = current.map(p => p.id === project.id ? project : p);
  saveProjects(updated);
}

export function deleteProject(id: string): void {
  const current = getStoredProjects();
  const updated = current.filter(p => p.id !== id);
  saveProjects(updated);
}

export function reorderProjects(id: string, direction: "up" | "down"): ManagedProject[] {
  const current = getStoredProjects();
  const index = current.findIndex(p => p.id === id);
  if (index === -1) return current;

  if (direction === "up" && index > 0) {
    // Swap index and index - 1
    const temp = current[index].orderIndex;
    current[index].orderIndex = current[index - 1].orderIndex;
    current[index - 1].orderIndex = temp;
  } else if (direction === "down" && index < current.length - 1) {
    // Swap index and index + 1
    const temp = current[index].orderIndex;
    current[index].orderIndex = current[index + 1].orderIndex;
    current[index + 1].orderIndex = temp;
  }

  // Sort again and update orderIndex to continuous sequence to avoid drift
  const sorted = [...current].sort((a, b) => a.orderIndex - b.orderIndex);
  const resequenced = sorted.map((p, idx) => ({ ...p, orderIndex: idx }));
  saveProjects(resequenced);
  return resequenced;
}

// ================= TESTIMONIALS CRUDS =================
const TESTIMONIALS_STORAGE_KEY = "rayhan_rana_testimonials_db";

export function getStoredTestimonials(): TestimonialItem[] {
  try {
    const data = localStorage.getItem(TESTIMONIALS_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(testimonialsData));
      return testimonialsData;
    }
    return JSON.parse(data) as TestimonialItem[];
  } catch (err) {
    console.error("Failed to load testimonials from storage", err);
    return testimonialsData;
  }
}

export function saveTestimonials(testimonials: TestimonialItem[]): void {
  try {
    localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(testimonials));
  } catch (err) {
    console.error("Failed to save testimonials to storage", err);
  }
}

export function addTestimonial(testimonial: Omit<TestimonialItem, "id">): TestimonialItem {
  const current = getStoredTestimonials();
  const newTest: TestimonialItem = {
    ...testimonial,
    id: `test-${Date.now()}`,
  };
  const updated = [...current, newTest];
  saveTestimonials(updated);
  return newTest;
}

export function updateTestimonial(testimonial: TestimonialItem): void {
  const current = getStoredTestimonials();
  const updated = current.map(t => t.id === testimonial.id ? testimonial : t);
  saveTestimonials(updated);
}

export function deleteTestimonial(id: string): void {
  const current = getStoredTestimonials();
  const updated = current.filter(t => t.id !== id);
  saveTestimonials(updated);
}
