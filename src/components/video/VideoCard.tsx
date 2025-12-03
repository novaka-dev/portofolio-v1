"use client";

import ReactPlayer from "react-player";
import { Video } from "@/data/videos";
import { Card, CardContent } from "@/components/ui/card";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Card className="rounded-xl overflow-hidden shadow-md">
      <CardContent className="p-0">
        <div className="relative w-full aspect-video">
          <ReactPlayer
            src={video.videoUrl}
            width="100%"
            height="100%"
            controls
            className="absolute top-0 left-0"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold">{video.title}</h2>
        </div>
      </CardContent>
    </Card>
  );
}
