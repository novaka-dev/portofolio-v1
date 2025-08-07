import ArrowLeft from "@/components/svgs/ArrowLeft";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-6xl font-bold">Coming Soon</h1>
      <span className="mt-4 italic">Cihuyyyyy</span>
      <div className="mt-4">
        <Button asChild variant="outline" className="group">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="size-4" />
            <span>Back to Landing</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
