import { Container } from "@/components/common/Container";
import ProjectContent from "@/components/projects/ProjectContent";
import { Button } from "@/components/ui/button";
import { getProjectCaseStudyBySlug } from "@/lib/project";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectCaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getProjectCaseStudyBySlug(slug);
  if (!caseStudy || !caseStudy.frontmatter.isPublished) {
    notFound();
  }

  return (
    <Container className="py-16">
      <div className="space-y-12">
        {/* back button */}
        <div>
          <Button asChild variant="ghost" className="group">
            <Link href="/projects" className="flex items-center space-x-2">
              <ArrowLeft className="size-4" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>

        {/* Project content */}
        <ProjectContent
          frontmatter={caseStudy.frontmatter}
          content={caseStudy.content}
        />
      </div>
    </Container>
  );
}
