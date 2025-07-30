import { Project } from "@/types/project";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import Website from "../svgs/Website";
import Github from "../svgs/Github";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group h-full w-full overflow-hidden p-0 transition-all border-gray-200 dark:border-gray-800 shadow-none">
      <CardHeader className="p-0">
        <div className="group aspect-video overflow-hidden relative">
          <Image
            className="w-full h-full object-cover"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />
          {project.video && (
            <Dialog>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:backdrop-blur-xs backdrop-blur-none">
                  <button className="flex items-center size-12 justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 group-hover:cursor-pointer hover:bg-white/30">
                    <PlayCircle className="size-10" />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 border-0">
                <div className="aspect-video w-full">
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    controls
                    loop
                    src={project.video}
                  />
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-4">
          {/* project title and title */}
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-xl font-semibold leading-tight group-hover:text-primary">
              {project.title}
            </h2>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex size-6 text-muted-foreground items-center justify-center hover:text-primary transition-colors"
                  >
                    <Website />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Website</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  {project.github && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className={
                        "flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      }
                    >
                      <Github className="size-6" />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Github</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          {/* Descriptions */}
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold mb-2 ">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-5 hover:scale-120 transition-all duration-300 hover:cursor-pointer">
                      {tech.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      {/* Progress Web */}
      {project.detail && (
        <CardFooter className="p-6 pt-0 flex justify-between">
          <div
            className={` flex items-center gap-2 rounded-md px-2 py-1 text-xs ${project.isWorking ? "border-green-300 bg-green-500/10" : "border-red-300 bg-red-500/10"} `}
          >
            {project.isWorking ? (
              <>
                <div className="size-2 bg-green-500 animate-pulse rounded-full" />{" "}
                All System Working
              </>
            ) : (
              <>
                <div className="size-2 bg-red-500 animate-pulse rounded-full" />
                Building
              </>
            )}
          </div>
          <Link
            href={project.projectDetailsPageSlug}
            className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors hover:underline underline-offset-4"
          >
            View Details <ArrowRight className="size-4" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
