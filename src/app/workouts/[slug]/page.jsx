import { notFound } from "next/navigation";
import ActionButtons from "@/components/workout/ActionButtons";
import InstructionsList from "@/components/workout/InstructionsList";
import WorkoutSpecs from "@/components/workout/WorkoutSpecs";
import getWorkouts from "@/data/workouts";

export default async function WorkoutDetailsPage({ params }) {
  const { slug } = await params;
  const workouts = await getWorkouts();
  const workout = workouts.find((item) => item.slug === slug);

  if (!workout) {
    notFound();
  }

  return (
    <main
      className="min-h-screen bg-[#0b0c0f] px-5 pb-12 pt-8 text-white sm:px-8 sm:pt-12"
    >
      <article className="mx-auto grid w-full max-w-[1232px] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <div
          role="img"
          aria-label={`${workout.name} workout`}
          className="aspect-[4/3] w-full overflow-hidden bg-[#15161b] bg-cover bg-center sm:aspect-[588/735]"
          style={{ backgroundImage: `url("${workout.image}")` }}
        />

        <div className="min-w-0 font-sans">
          <header>
            <h1 className="m-0 font-display text-[36px] font-semibold uppercase leading-[1.12] tracking-[0.025em] text-white sm:text-[40px]">
              {workout.name}
            </h1>
            <p className="mb-0 mt-3 text-[14px] leading-[1.7] text-[#9ca3af] sm:text-[15px]">
              {workout.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#343a20] bg-[#191e0d] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#caff00]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <WorkoutSpecs workout={workout} />
          <InstructionsList instructions={workout.instructions} />

          <ActionButtons workout={workout} />
        </div>
      </article>
    </main>
  );
}
