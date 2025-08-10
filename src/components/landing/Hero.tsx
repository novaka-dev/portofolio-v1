import {
  concert_one,
  heroConfig,
  skillComponents,
  socialLinks,
} from "@/config/Hero";
import { parseTemplate } from "@/lib/hero";
import { Container } from "../common/Container";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Skill from "../common/Skill";
import Link from "next/link";
import { CardSpotlight } from "../ui/card-spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Button } from "../ui/button";
import CV from "../svgs/CV";
import Chat from "../svgs/Chat";
import { AuroraText } from "../magicui/aurora-text";
import { Spotlight } from "../ui/spotlight";
import { cn } from "@/lib/utils";

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

      <Container className="mb-14">
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

        <div className="relative z-10">
          {/* Area Text Heading */}
          <div className=" flex flex-col gap-y-2 items-center md:items-start text-center md:text-left">
            {/* Badge */}
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white dark:bg-black text-dark dark:text-white flex items-center space-x-2 shadow-md text-xs sm:text-sm md:text-base"
            >
              {badge}
            </HoverBorderGradient>

            {/* Judul efek ketik */}
            <TextGenerateEffect
              words={title}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            />

            {/* Deskripsi */}
            <div className="mt-2 sm:mt-3 md:mt-4 flex flex-wrap gap-y-2 gap-x-1.5 justify-center md:justify-start text-neutral-500 text-sm sm:text-base md:text-lg">
              {renderDescription()}
            </div>
          </div>

          {/* Area GetTouch */}
          <div className="mt-8 w-full ">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Text + Button */}
              <div className=" flex flex-col items-center text-center lg:items-center lg:text-center w-full lg:w-[300px]">
                <h1
                  className={`${concert_one.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold `}
                >
                  Get In <AuroraText speed={2}>Toutch</AuroraText>
                </h1>

                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 py-4 ">
                  {buttons.map((button, index) => {
                    const IconComponent =
                      buttonIcons[button.icon as keyof typeof buttonIcons];
                    return (
                      <Button
                        asChild
                        key={index}
                        variant={(button.variant as "outline") || "default"}
                      >
                        <Link href={button.href}>
                          {IconComponent && <IconComponent />}
                          {button.text}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Card Sosial Media */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 w-full lg:w-auto">
                {socialLinks.map((link) => (
                  <Link href={link.href} key={link.name}>
                    <CardSpotlight className="lg:min-w-[140px] md:min-w-[150px] max-w-[140px] shadow-xl light:bg-neutral-800">
                      <span className="text-white flex items-center justify-center mx-auto w-14 h-14 ">
                        {link.icon}
                      </span>
                      <p className="text-center text-white">{link.name}</p>
                    </CardSpotlight>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
