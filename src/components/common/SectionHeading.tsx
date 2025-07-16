import { SparklesText } from "../magicui/sparkles-text";

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  heading,
  subHeading,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-neutral-500 text-md">{subHeading}</p>
      <SparklesText sparklesCount={5} className="text-4xl">{heading}</SparklesText>
    </div>
  );
}
