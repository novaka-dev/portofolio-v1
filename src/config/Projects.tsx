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
];
