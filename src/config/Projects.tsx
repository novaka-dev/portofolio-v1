import NextJs from "@/components/technologies/NextJs";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import Supabase from "@/components/technologies/Supabase";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Masjid Finance",
    description:
      "Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate",
    image: "/project/quest.png",
    video: "https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig",
    link: "",
    technologies: [
      { name: "Next.js", icon: <NextJs key={"nextjs"} /> },
      { name: "React", icon: <ReactIcon key={"react"} /> },
      { name: "TailwindCss", icon: <TailwindCss key={"tailwind"} /> },
      { name: "TypeScript", icon: <TypeScript key={"typeScript"} /> },
      { name: "Supabase", icon: <Supabase key={"supabase"} /> },
      { name: "Shadcn/ui", icon: <Shadcn key={"shadcn"} /> },
      { name: "Prisma", icon: <Prisma key={"prisma"} /> },
      { name: "Vercel", icon: <Vercel key={"vercel"} /> },
    ],
    github: "",
    live: "",
    projectDetailsPageSlug: "/project/masjid-finance",
    detail: true,
    isWorking: true,
  },
  {
    title: "I'm a chill guy",
    description:
      "AI-powered GitHub profile roaster with intelligent analysis, witty commentary, and social sharing features",
    image: "/project/chillguy.png",
    link: "https://chillguy.ramx.in",
    technologies: [
      { name: "React", icon: <ReactIcon key="react" /> },

      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: "https://github.com/ramxcodes/chill-guy",
    live: "https://chillguy.ramx.in",
    detail: true,
    projectDetailsPageSlug: "/project/chill-guy",
    isWorking: true,
  },
  {
    title: "Intent JS",
    description:
      "Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation",
    image: "/project/intent.png",
    video: "https://ik.imagekit.io/hokb3mrdr/intent.mp4",
    link: "https://intent-js.ramx.in",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },

      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
    ],
    github: "https://github.com/ramxcodes/intent-js",
    live: "https://intent-js.ramx.in",
    detail: true,
    projectDetailsPageSlug: "/project/intent-js",
    isWorking: true,
  },
];
