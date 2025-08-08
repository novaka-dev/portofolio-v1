import { about, mySkills } from "@/config/About";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Tilt } from "../motion-primitives/tilt";
import { PointerHighlight } from "../ui/pointer-highlight";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Meteors } from "../magicui/meteors";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative isolate overflow-hidden ">
      {/* Gradasi vertikal (atas ke bawah) */}
      <div className="pointer-events-none absolute inset-0 top-0 left-0 w-full h-48 bg-gradient-to-b from-white/90 to-transparent dark:from-black/90 z-0" />

      {/* Konten dibungkus Container */}
      <Container className="relative z-10 mt-20 overflow-hidden mb-10">
        <Meteors />
        <SectionHeading heading="Me" subHeading="About" />
        <div className="flex flex-col md:flex-row gap-4">
          <Tilt rotationFactor={8} isRevese className="mt-4 flex-shrink w-75">
            <div
              style={{
                borderRadius: "12px",
              }}
              className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
            >
              <Image
                src="/assets/vaka.jpeg"
                width={500}
                height={500}
                alt="Ghost in the shell - Kôkaku kidôtai"
                className="h-64 w-full object-cover"
              />
              <div className="p-2">
                <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
                  Novaka Saputra
                </h1>
                <p className="text-zinc-700 dark:text-zinc-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </Tilt>
          <div className="mt-4 flex-1">
            <h1 className="mt-4 text-4xl font-bold leading-snug">
              {about.name}
            </h1>
            <p className="mt-4 text-lg text-neutral-500 ">
              {about.description}
            </p>
            <p className="mt-8 font-bold text-xl text-neutral-400 ">Skills</p>

            <PointerHighlight
              pointerClassName="text-purple-500"
              containerClassName="flex flex-wrap mt-4"
              rectangleClassName="bg-neutral-200 dark:bg-zinc-800 border-zinc-300 dark:border-neutral-600 z-0"
            >
              <div className="gap-2 flex z-20 mx-2 mb-1">
                {mySkills.map((skill) => (
                  <Tooltip key={skill.key}>
                    <TooltipTrigger asChild>
                      <div className="mt-2 size-6 relative flex items-center justify-center">
                        {skill}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{skill.key}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </PointerHighlight>
          </div>
        </div>
      </Container>
    </section>
  );
}
