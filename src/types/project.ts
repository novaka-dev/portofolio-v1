export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: { name: string; icon: React.ReactNode }[];
  github?: string;
  live: string;
  projectDetailsPageSlug: string;
  detail: boolean;
  isWorking: boolean;
}

export interface ProjectCaseStudyFrontmatter {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live: string;
  timeline: string;
  role: string;
  team?: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  featured: boolean;
  challenges: string[];
  learnings: string[];
  isPublished: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export interface ProjectCaseStudyPreview {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
}
