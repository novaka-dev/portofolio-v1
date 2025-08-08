import { getPublishedBlogPosts } from "@/lib/blog";
import { Container } from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { BlogList } from "../blog/BlogList";

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-20 min-h-screen">
      <SectionHeading
        heading="Blogs"
        subHeading="Timeline of thoughts"
        className="text-center"
      />
      <div className="mt-8">
        <BlogList posts={posts} />
      </div>
    </Container>
  );
}
