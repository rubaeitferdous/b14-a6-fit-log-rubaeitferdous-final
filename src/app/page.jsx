import Hero from "@/components/home/Hero";
import WorkoutGrid from "@/components/home/WorkoutGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#0c0d0f]">
      <Hero />
      <WorkoutGrid />
    </main>
  );
}
