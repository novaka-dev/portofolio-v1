import Css from "@/components/technologies/Css";
import Github from "@/components/technologies/Github";
import Html from "@/components/technologies/Html";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import Postman from "@/components/technologies/Postman";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import Springboot from "@/components/technologies/Springboot";

import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Webpack from "@/components/technologies/Webpack";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface ExperienceDescription {
  title: string;
  date: string;
  description: string;
  technologies: Technology[];
}

type ExperienceType = "Training" | "Internship" | "Full-time" | "Freelance";

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  useTimeline?: boolean;
  description: ExperienceDescription[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies?: Technology[];
  typ?: ExperienceType;
  isCurrent: boolean;
  type?: ExperienceType;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: "Dicoding x DBS Foundation",
    position: "Fullstack Web Developer Trainee",
    location: "Remote",
    image: "/company/dicoding-dbs.png",
    useTimeline: true,
    description: [
      {
        title: "Front-End Developer",
        date: "Jan 2025 - Apr 2025",
        description:
          "Participated in the Front-End Developer Cohort program focused on foundational web development using HTML, CSS, and JavaScript. Gained practical experience in creating responsive, user-centric interfaces that perform seamlessly across various devices and screen sizes. Leveraged Webpack for modular bundling to improve project scalability and maintainability. Applied Git and GitHub for effective version control and collaboration workflows within a team setting.",
        technologies: [
          {
            name: "Html",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            icon: <Html />,
          },
          {
            name: "Css",
            href: "",
            icon: <Css />,
          },
          {
            name: "Javascript",
            href: "",
            icon: <JavaScript />,
          },
          {
            name: "Webpack",
            href: "",
            icon: <Webpack />,
          },
          {
            name: "Github",
            href: "",
            icon: <Github />,
          },
        ],
      },
      {
        title: "Back-End Developer",
        date: "Jan 2025 - Apr 2025",
        description:
          "Joined the Back-End Developer Cohort program and developed RESTful APIs using Node.js, enhancing my understanding of server-side JavaScript. Implemented routing logic, handled HTTP requests and responses, and explored how to build robust back-end systems that integrate seamlessly with front-end applications. This experience equipped me with the ability to build complete and functional full-stack web applications.",
        technologies: [
          {
            name: "Javascript",
            href: "",
            icon: <JavaScript />,
          },
          {
            name: "Node Js",
            href: "",
            icon: <NodeJs />,
          },
          {
            name: "Postman",
            href: "",
            icon: <Postman />,
          },
        ],
      },
      {
        title: "Capstone Project",
        date: "Jan 2025 - Apr 2025",
        description:
          "As part of the final capstone project, I collaborated with a team to build a web-based cancer prediction platform. I was responsible for developing the front-end of the application using Next.js, Tailwind CSS, and ShadCN UI, focusing on clean UI design, responsiveness, and performance optimization. This project strengthened my skills in front-end architecture, teamwork, and real-world web development using modern frameworks and component libraries.",
        technologies: [
          {
            name: "Next Js",
            href: "https://nextjs.org/",
            icon: <NextJs />,
          },
          {
            name: "React Js",
            href: "",
            icon: <ReactIcon />,
          },
          {
            name: "Tailwind CSS",
            href: "",
            icon: <TailwindCss />,
          },
          {
            name: "TypeScript",
            href: "",
            icon: <TypeScript />,
          },
          {
            name: "ShadCN UI",
            href: "",
            icon: <Shadcn />,
          },
          {
            name: "MongoDB",
            href: "",
            icon: <MongoDB />,
          },
          {
            name: "Node Js",
            href: "",
            icon: <NodeJs />,
          },
          {
            name: "Postman",
            href: "",
            icon: <Postman />,
          },
        ],
      },
    ],
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    type: "Training",
    website: "https://www.dbs.com/spark/index/id_id/site/codingcamp/index.html",
    github: "https://www.dbs.com/spark/index/id_id/site/codingcamp/index.html",
    technologies: [],
  },
  {
    isCurrent: false,
    company: "CV. Teknologi Nusantara",
    position: "Front-end Web Developer",
    location: "Bekasi City, Indonesia (On-site)",
    image: "/company/loginusa.png",
    useTimeline: false,
    description: [
      {
        title: "Front-End Developer Cohort",
        date: "Mei 2024 - Agu 2024",
        description:
          "Completed a front-end web development internship at CV. Teknologi Nusantara, gaining practical experience in building responsive landing pages and a simple e-commerce platform using React.js. Worked on client-side state management, routing, and API integration. Explored Java Spring Boot fundamentals, including REST API development and database configuration. Also contributed to application testing for Desapedia, identifying bugs, performing functionality tests, and delivering feedback for improvements.",
        technologies: [
          {
            name: "React",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            icon: <ReactIcon />,
          },
          {
            name: "Tailwind CSS",
            href: "",
            icon: <TailwindCss />,
          },
          {
            name: "Springboot",
            href: "",
            icon: <Springboot />,
          },
          {
            name: "Javascript",
            href: "",
            icon: <JavaScript />,
          },
          {
            name: "Postman",
            href: "",
            icon: <Postman />,
          },
          {
            name: "Github",
            href: "",
            icon: <Github />,
          },
        ],
      },
    ],
    startDate: "Mei 2024",
    endDate: "Agu 2024",
    type: "Internship",
    website: "https://www.dbs.com/spark/index/id_id/site/codingcamp/index.html",
    github: "https://www.dbs.com/spark/index/id_id/site/codingcamp/index.html",
  },
];
