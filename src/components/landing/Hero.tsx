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
    <Container>
      {/* Area Text Heading */}
      <div className="flex flex-col gap-y-2 items-center md:items-start text-center md:text-left">
        {/* Badge */}
        <HoverBorderGradient
          containerClassName="rounded-full"
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
      <div className="mt-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Text + Button */}
          <div className="flex flex-col items-center text-center lg:items-center lg:text-center w-full lg:w-[300px]">
            <h1
              className={`${concert_one.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`}
            >
              Get In <AuroraText speed={2}>Toutch</AuroraText>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 py-4">
              {buttons.map((button, index) => {
                const IconComponent =
                  buttonIcons[button.icon as keyof typeof buttonIcons];
                return (
                  <Button key={index}>
                    {IconComponent && <IconComponent />}
                    <Link href={button.href}>{button.text}</Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Card Sosial Media */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 w-full lg:w-auto">
            {socialLinks.map((link) => (
              <CardSpotlight
                key={link.name}
                className="lg:min-w-[140px] md:min-w-[150px] max-w-[140px] shadow-xl"
              >
                <Link href={link.href}>
                  <span className="text-white flex items-center justify-center">
                    {link.icon}
                  </span>
                </Link>
                <p className="text-center text-white">{link.name}</p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
