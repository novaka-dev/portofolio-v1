import Clerk from "@/components/technologies/Clerk";
import NextJs from "@/components/technologies/NextJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Redis from "@/components/technologies/Redis";
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
      "A role-based financial management platform for the mosque at SMKN 2 Kota Bekasi. Tracks daily infaq, expenses, and provides real-time analytics for transparency.",
    image: "/project/masjidfinance.png",
    // video: "https://ik.imagekit.io/youraccount/masjid-finance.mp4?tr=orig", // ganti dengan link video demo kalo ada
    link: "https://masjid-finance.vercel.app",
    technologies: [
      { name: "Next.js", icon: <NextJs key={"nextjs"} /> },
      { name: "React", icon: <ReactIcon key={"react"} /> },
      { name: "TailwindCSS", icon: <TailwindCss key={"tailwind"} /> },
      { name: "TypeScript", icon: <TypeScript key={"typeScript"} /> },
      { name: "Supabase", icon: <Supabase key={"supabase"} /> },
      { name: "PostgreSQL", icon: <PostgreSQL key={"postgresql"} /> },
      { name: "Shadcn/UI", icon: <Shadcn key={"shadcn"} /> },
      { name: "Prisma", icon: <Prisma key={"prisma"} /> },
      { name: "Clerk", icon: <Clerk key={"clerk"} /> },
      { name: "Vercel", icon: <Vercel key={"vercel"} /> },
    ],
    github: "https://github.com/novaka-dev/masjid-finance",
    live: "https://masjid-finance.vercel.app",
    projectDetailsPageSlug: "/projects/masjid-finance",
    detail: true,
    isWorking: true,
  },

  {
    title: "Vayanime",
    description:
      "A modern anime streaming website featuring spotlight carousel, episode lists, search functionality, and multi-server support. Built with cutting-edge web technologies for a smooth viewing experience.",
    image: "/project/vayanime.png",
    link: "https://chillguy.ramx.in",
    technologies: [
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
      { name: "Redis", icon: <Redis key="redis" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: "https://github.com/novaka-dev/vayanime",
    live: "https://chillguy.ramx.in",
    detail: true,
    projectDetailsPageSlug: "/projects/vayanime",
    isWorking: false,
  },

  // {
  //   title: "Intent JS",
  //   description:
  //     "Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation",
  //   image: "/project/intent.png",
  //   video: "https://ik.imagekit.io/hokb3mrdr/intent.mp4",
  //   link: "https://intent-js.ramx.in",
  //   technologies: [
  //     { name: "Next.js", icon: <NextJs key="nextjs" /> },
  //     { name: "TypeScript", icon: <TypeScript key="typescript" /> },
  //     { name: "React", icon: <ReactIcon key="react" /> },

  //     { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
  //     { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
  //   ],
  //   github: "https://github.com/ramxcodes/intent-js",
  //   live: "https://intent-js.ramx.in",
  //   detail: true,
  //   projectDetailsPageSlug: "/projects/intent-js",
  //   isWorking: true,
  // },
];
