import { projects } from "@/config/Projects";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectList from "../projects/ProjectList";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <Container className="mt-20">
      <SectionHeading heading="Projects" subHeading="My Works" />
      <ProjectList className="mt-8" projects={projects.slice(0, 3)} />
      <div className="mt-8 flex justify-center">
        <Button asChild variant={"outline"}>
          <Link href={"/projects"}>Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
