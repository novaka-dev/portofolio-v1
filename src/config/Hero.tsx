import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import JavaScript from "@/components/technologies/JavaScript";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import { Concert_One, Lilita_One } from "next/font/google";

export const monoton = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});
export const concert_one = Concert_One({
  weight: "400",
  subsets: ["latin"],
});

export const skillComponents = {
  TypeScript: TypeScript,
  NextJs: NextJs,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Tailwind: TailwindCss,
};

export const heroConfig = {
  // Personal information
  badge: "Not Just Another Dev",
  name: "Vaka",
  title: "Where Engineering Meets Storytelling",
  avatar: "",

  // My Skils
  skills: [
    {
      name: "TypeScript",
      href: "https://typescriptlang.org/",
      component: "TypeScript",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "Node.js",
      href: "https://nodejs.org/",
      component: "NodeJs",
    },
    {
      name: "Prisma",
      href: "https://www.prisma.io/",
      component: "Prisma",
    },
    {
      name: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      component: "Tailwind",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
  ],

  // Descriptions Configurations
  description: {
    template: `I'm Vaka, a <b>Software Engineer</b> specializing in {skills:0}, {skills:1}, and {skills:2}, with a strong eye for <b>clean UI</b> through {skills:4} and <b>robust data handling</b> using {skills:5}.Beyond development, I bring <b>creative ideas to life</b> through <b>visual design</b> and <b>storytelling-driven video editing</b>.`,
  },

  // Buttons Configuration
  buttons: [
    {
      variant: "outline",
      text: "Resume / CV",
      href: "/resume",
      icon: "CV",
    },
    {
      variant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
    },
  ],
};

export const socialLinks = [
  {
    name: "X",
    href: "",
    icon: <X />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/novaka-saputra-a56229322/",
    icon: <LinkedIn />,
  },
  {
    name: "Github",
    href: "https://github.com/novaka-dev",
    icon: <Github />,
  },
  {
    name: "Email",
    href: "mailto:novakarizkyhs@gmail.com",
    icon: <Mail />,
  },
];
