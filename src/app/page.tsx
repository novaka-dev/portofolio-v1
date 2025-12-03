import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";
import Experience from "@/components/landing/Experience";
import Work from "@/components/landing/Projects";
import Video from "@/components/landing/Video";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Work />
      {/* <Blog /> */}
      <Video />
    </main>
  );
}
