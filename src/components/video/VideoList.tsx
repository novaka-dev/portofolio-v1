"use client";

import { Video } from "@/types/video";
import VideoCard from "./VideoCard";

interface VideoListProps {
  projects: Video[];
  className?: string;
}

export default function VideoList({ projects, className }: VideoListProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No videos found.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${className}`}>
      {projects.map((project) => (
        <VideoCard key={project.id} video={project} />
      ))}
    </div>
  );
}
