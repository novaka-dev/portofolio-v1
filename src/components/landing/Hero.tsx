import { heroConfig, skillComponents, socialLinks } from "@/config/Hero";
import { parseTemplate } from "@/lib/hero";
import { Container } from "../common/Container";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Skill from "../common/Skill";
import Link from "next/link";

import { Button } from "../ui/button";
import CV from "../svgs/CV";
import Chat from "../svgs/Chat";

import { Spotlight } from "../ui/spotlight";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { title, skills, description, buttons, badge } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return <span key={part.key}>{part.text}</span>;
      }

      return null;
    });
  };

  // Aceternity component
  // Link preview,

  return (
    <section className="relative isolate overflow-hidden py-10">
      {/* ✅ Grid Background (penuh layar) */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 opacity-50",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      {/* ✅ Radial Mask center */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* ✅ Bottom Gradient untuk transisi ke About */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-36 bg-gradient-to-b from-transparent to-transparent dark:to-black z-10" />

      <Container className="mb-14 py-10">
        {/* ✅ Spotlight (masih bisa pakai absolute) */}
        <Spotlight
          className={cn(
            "absolute z-20",
            "-top-44 left-[-50px]", // Default (mobile)
            "sm:-top-36 sm:left-10", // Small screen
            "md:-top-28 md:left-32", // Medium screen
            "lg:-top-20 lg:left-60", // Large screen
          )}
        />

        <div className="relative z-30">
          {/* Area Text Heading */}
          <div className=" flex flex-col gap-y-2 md:items-start md:text-left">
            {/* Badge */}
            <div
              className={cn(
                " group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ {badge}</span>
              </AnimatedShinyText>
            </div>

            {/* Judul efek ketik */}
            <TextGenerateEffect
              words={title}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            />

            {/* Deskripsi */}
            <div className="mt-2 sm:mt-3 md:mt-4 flex flex-wrap gap-y-2 gap-x-1.5 md:justify-start text-neutral-500 text-sm sm:text-base md:text-lg">
              {renderDescription()}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            {buttons.map((button, index) => {
              const IconComponent =
                buttonIcons[button.icon as keyof typeof buttonIcons];
              return (
                <Button
                  key={index}
                  variant={button.variant as "outline" | "default"}
                >
                  {IconComponent && <IconComponent />}
                  <Link href={button.href}>{button.text}</Link>
                </Button>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-2">
            {socialLinks.map((link) => (
              <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    key={link.name}
                    className="text-neutral-500 flex items-center gap-2"
                  >
                    <span className="size-6">{link.icon}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
