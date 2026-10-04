import WorkoutCard from "@/components/workout/WorkoutCard";
import getWorkouts from "@/data/workouts";

export default async function WorkoutGrid() {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      aria-labelledby="library-heading"
      className="w-full bg-[#0b0c0f] px-5 pb-14 pt-12 text-white sm:px-8 sm:pb-20 sm:pt-16"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col gap-2 border-b border-[#252a33] pb-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between sm:pb-6">
          <h2
            id="library-heading"
            className="font-display text-[34px] font-semibold uppercase leading-none tracking-[-0.02em] sm:text-[40px]"
          >
            The Library
          </h2>
          <p className="m-0 text-[14px] text-[#9ba2ae] sm:text-[15px]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {workouts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        ) : (
          <p className="border-t border-[#252831] py-8 text-sm text-[#969ba6]">
            No workouts are available right now.
          </p>
        )}
      </div>
    </section>
  );
}
