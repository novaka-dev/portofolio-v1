import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <About />
    </main>
  );
}
