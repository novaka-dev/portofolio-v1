import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";
import Experience from "@/components/landing/Experience";
import Work from "@/components/landing/Projects";
import Blog from "@/components/landing/Blog";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Blog />
    </main>
  );
}
