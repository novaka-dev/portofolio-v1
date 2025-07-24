export interface Project {
  titile: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: { name: string; icon: React.ReactNode }[];
  github?: string;
  live: string;
  projectDetailSlug: string;
  detail: boolean;
  isWorking: boolean;
}
