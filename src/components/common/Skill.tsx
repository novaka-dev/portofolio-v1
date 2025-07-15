import React from "react";
import { LinkPreview } from "../ui/link-preview";

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <LinkPreview
      url={href ?? ""}
      className="inline-flex items-center gap-2 rounded border border-neutral-700 bg-neutral-800 p-1 text-sm leading-4 text-neutral-100 no-underline whitespace-nowrap"
    >
      <div className="w-4 h-4 flex-shrink-0">{children}</div>
      <p className="text-sm font-bold">{name}</p>
    </LinkPreview>
  );
}
