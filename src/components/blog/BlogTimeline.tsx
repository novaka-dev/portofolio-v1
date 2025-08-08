import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { BlogPostPreview } from "@/types/blog";
import Link from "next/link";
import { groupPostsByYear } from "@/lib/blog"; // helper function
import Calender from "../svgs/Calender";

interface BlogTimelineGroupedProps {
  posts: BlogPostPreview[];
}

export function BlogTimelineGrouped({ posts }: BlogTimelineGroupedProps) {
  const groupedPosts = groupPostsByYear(posts);

  // Urutkan tahun descending
  const sortedYears = Object.keys(groupedPosts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <Timeline defaultValue={posts.length}>
      {sortedYears.map((year) => {
        const yearPosts = groupedPosts[year];
        return yearPosts.map((post, index) => {
          const { slug, frontmatter } = post;
          const { title, description, date } = frontmatter;
          const formattedDate = new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });

          return (
            <TimelineItem
              key={slug}
              step={index + 1}
              className="group-data-[orientation=vertical]/timeline:sm:ms-32"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right text-muted-foreground font-semibold text-4xl">
                  {/* Show year only for the first post in the year */}
                  {index === 0 ? year : ""}
                </TimelineDate>
                <TimelineTitle className="sm:-mt-0.5 text-xl">
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent className="text-sm text-muted-foreground flex justify-between border-dashed border-zinc-700 border-b pb-3">
                <p>{description}</p>
                <time className="whitespace-nowrap text-sm flex flex-wrap gap-2 items-center">
                  <Calender className="size-4" />
                  {formattedDate}
                </time>
              </TimelineContent>
            </TimelineItem>
          );
        });
      })}
    </Timeline>
  );
}
