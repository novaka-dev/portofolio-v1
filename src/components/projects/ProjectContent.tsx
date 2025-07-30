import { ProjectCaseStudyFrontmatter } from "@/types/project";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ProjectComponents } from "./ProjectComponents";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import Website from "../svgs/Website";
import Github from "../svgs/Github";
import { Separator } from "../ui/separator";
import rehypeHighlight from "@shikijs/rehype";

interface ProjectContentProps {
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export default function ProjectContent({
  frontmatter,
  content,
}: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    timeline,
    role,
    team,
    status,
    challenges,
    learnings,
  } = frontmatter;

  const statusVariant =
    status === "Completed"
      ? "default"
      : status === "Ongoing"
        ? "secondary"
        : "outline";

  return (
    <article className="mx-auto max-w-5xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          {/* Project status & technologies */}
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant={statusVariant} className="text-sm">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            {technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant={"outline"} className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant={"outline"} className="text-xs">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>
          <h1 className="text-4xl font-bold leading-tight lg:text-7xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-2xl">{description}</p>

          {/* Project meta information */}
          <div className="grid gap-4 bg-muted/20 p-4 border rounded-md sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h5 className="text-sm font-semibold text-muted-foreground">
                Timeline
              </h5>
              <p className="text-sm">{timeline}</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-muted-foreground">
                Role
              </h5>
              <p>{role}</p>
            </div>
            {team && (
              <div>
                <h5 className="text-sm font-semibold text-muted-foreground">
                  Team
                </h5>
                <p>{team}</p>
              </div>
            )}
            <div>
              <h5 className="text-sm font-semibold text-muted-foreground">
                Status
              </h5>
              <Badge variant={"outline"} className="text-sm">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex  flex-wrap gap-3">
            {live && (
              <Button asChild>
                <Link
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Website className="size-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {github && (
              <Button asChild variant={"outline"}>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="size-4" /> Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Separator />
      </header>

      {/* Technology Stack */}
      <div className="mb-8">
        <div className="rounded-lg border bg-muted/20 p-4">
          <h3 className="mb-3 text-lg font-semibold">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="items-center gap-2 bg-muted/50 px-3 py-1.5 text-sm font-medium inline-flex"
              >
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges and Learnings */}
      {(challenges?.length || learnings?.length) && (
        <div className="grid mb-8 gap-6 md:grid-cols-2">
          {challenges && challenges.length > 0 && (
            <div className="border-yellow-200 bg-yellow-50 p-4 rounded-lg border dark:border-yellow-800 dark:bg-yellow-950/20">
              <h3 className="text-yellow-800 dark:text-yellow-200 mb-3 text-lg font-semibold">
                Key Challenges
              </h3>
              <ul className="space-y-2">
                {challenges.map((challenge, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-yellow-700 dark:text-yellow-300"
                  >
                    <span className="mt-1 block size-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {learnings && learnings.length > 0 && (
            <div className="border-green-200 bg-green-50 p-4 rounded-lg border dark:border-green-800 dark:bg-green-950/20">
              <h3 className="text-green-800 dark:text-green-200 mb-3 text-lg font-semibold">
                Key Learnings
              </h3>
              <ul className="space-y-2">
                {learnings.map((learning, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300"
                  >
                    <span className="mt-1 block size-1.5 rounded-full bg-green-500 dark:bg-green-400" />
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <MDXRemote
          source={content}
          components={ProjectComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    theme: "tokyo-night",
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
