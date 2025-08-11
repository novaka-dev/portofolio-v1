import { Experience } from "@/config/Experience";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import Website from "../svgs/Website";
import Github from "../svgs/Github";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "../ui/timeline";
import Skill from "../common/Skill";
interface ExperienceCardProps {
  experience: Experience;
}
const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, "<b>$1</b>").replace(/\n/g, "<br>");
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Header Content */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        {/* Left side */}
        <div className="items-center flex gap-4">
          <Image
            src={experience.image}
            alt={experience.company}
            width={500}
            height={500}
            className="size-14 aspect-square rounded-sm"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">{experience.company}</h2>
              {experience.website && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="size-5 text-muted-foreground "
                    >
                      <Website className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={experience.github}
                      target="_blank"
                      className=" text-muted-foreground "
                    >
                      <Github className="size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit GitHub</TooltipContent>
                </Tooltip>
              )}
              {experience.isCurrent && (
                <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                  <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                  Working
                </div>
              )}
            </div>
            <p>{experience.position}</p>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col md:text-right text-muted-foreground">
          <p>
            {experience.startDate} -{" "}
            {experience.isCurrent ? "Present" : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Body Content - Timline */}
      <div className="mb-5">
        {experience.useTimeline ? (
          <Timeline defaultValue={3}>
            {experience.description.map((item, lineIndex: number) => (
              <TimelineItem key={lineIndex} step={lineIndex}>
                <TimelineHeader>
                  <TimelineSeparator />
                  <TimelineDate className="">{item.date}</TimelineDate>
                  <TimelineTitle className="text-lg">
                    {item.title}
                  </TimelineTitle>
                  <TimelineIndicator />
                </TimelineHeader>
                <TimelineContent>
                  <p className="leading-relaxed">{item.description}</p>
                  <div className="mt-4 gap-2 flex flex-wrap">
                    {item.technologies?.map((tech, techIndex: number) => (
                      <Skill key={techIndex} name={tech.name} href={tech.href}>
                        {tech.icon}
                      </Skill>
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          <div className="relative pl-10 md:pl-7 border-l-[2px] border-dashed border-zinc-700">
            <div className="flex flex-col gap-6 mt-2">
              {experience.description.map((descItem, descIndex) => (
                <div key={descIndex} className="relative group">
                  <p
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: parseDescription(descItem.description),
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.description
                ?.flatMap((desc) => desc.technologies || [])
                .map((tech, techIndex) => (
                  <Skill key={techIndex} name={tech.name} href={tech.href}>
                    {tech.icon}
                  </Skill>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
