import { projects } from "@/config/Projects";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectList from "../projects/ProjectList";

export default function Projects() {
  return (
    <Container className="mt-15 min-h-screen">
      <SectionHeading heading="Projects" subHeading="My Works" />
      <ProjectList className="mt-8" projects={projects.slice(0, 3)} />
    </Container>
  );
}
