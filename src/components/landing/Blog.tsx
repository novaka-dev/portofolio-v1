import { videos } from "@/data/videos";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import VideoList from "../video/VideoList";

export default function Blog() {
  return (
    <Container className="mt-20">
      <SectionHeading
        heading="Blogs"
        subHeading="Timeline of thoughts"
        className="text-center"
      />
      <div className="mt-8">
        <VideoList className="mt-8" projects={videos} />
      </div>
    </Container>
  );
}
