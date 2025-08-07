import { getPublishedBlogPosts } from "@/lib/blog";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { BlogTimelineGrouped } from "../blog/BlogTimeline";

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-20 min-h-screen">
      <SectionHeading heading="Blogs" subHeading="Timeline of thoughts" />
      <div className="mt-8">
        <BlogTimelineGrouped posts={posts} />
      </div>
    </Container>
  );
}
