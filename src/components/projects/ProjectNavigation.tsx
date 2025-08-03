import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import ArrowLeft from "../svgs/ArrowLeft";

interface ProjectNavigationProps {
  previous: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  return (
    <div>
      <Separator />

      <div className="grid gap-4 md:grid-cols-2">
        {/* Previous Project */}
        <div className={`${next ? "" : "md:col-span-2"}`}>
          {previous ? (
            <Button className="" asChild variant={"outline"}>
              <Link href={`/projects/${previous.slug}`}>
                <div>
                  <ArrowLeft className="size-4" />
                </div>
              </Link>
            </Button>
          ) : (
            <div className="h-12" />
          )}
        </div>
      </div>
    </div>
  );
}
