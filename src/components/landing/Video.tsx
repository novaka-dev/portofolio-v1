import { videos } from "@/config/Video";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import VideoList from "../video/VideoList";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Video() {
  return (
    <Container className="mt-20">
      <SectionHeading
        heading="Videos"
        subHeading="My Edits"
        className="text-start"
      />
      <VideoList className="mt-8" projects={videos} />
      <div className="my-8 flex justify-center">
        <Button asChild variant={"outline"}>
          <Link href={"/projects"}>Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
