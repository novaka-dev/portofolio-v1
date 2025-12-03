"use client";

import ReactPlayer from "react-player";
import { Card, CardContent } from "@/components/ui/card";
import { Video } from "@/types/video";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Card className="flex flex-col h-full w-full overflow-hidden p-0 transition-all border-gray-200 dark:border-gray-800 shadow-none">
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
      </CardContent>

      {/* <CardContent className="p-0">
        <div className="p-4">
          <h2 className="text-lg font-semibold">{video.title}</h2>
        </div>
      </CardContent> */}
    </Card>
  );
}
