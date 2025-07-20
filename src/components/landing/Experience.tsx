import { type Experience, experiences } from "@/config/Experience";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ExperienceCard from "../experience/ExperienceCard";
import { Button } from "../ui/button";
import Link from "next/link";
import GithubCard from "../experience/GithubCard";

export default function Experience() {
  return (
    <section className="relative isolate overflow-hidden min-h-screen">
      <Container className="mt-10">
        <SectionHeading heading="Experience" subHeading="My Journey" />
        <div className=" gap-8 mt-4 flex flex-col">
          {experiences.slice(0, 2).map((experience: Experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant={"outline"}>
            <Link href={"/work-experience"}> Show More Experiences</Link>
          </Button>
        </div>
        <div className="mt-8">
          <GithubCard />
        </div>
      </Container>
    </section>
  );
}
