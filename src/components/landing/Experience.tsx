import { type Experience, experiences } from "@/config/Experience";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ExperienceCard from "../experience/ExperienceCard";

export default function Experience() {
  return (
    <section className="relative isolate overflow-hidden min-h-screen">
      <Container className="mt-10">
        <SectionHeading heading="Experience" subHeading="My Journey" />
        <div className=" gap-8 mt-4 flex flex-col" >
          {experiences.slice(0, 2).map((experience: Experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </Container>
    </section>
  );
}
