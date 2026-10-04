import WorkoutCard from "@/components/workout/WorkoutCard";
import getWorkouts from "@/data/workouts";

export default async function WorkoutGrid() {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      aria-labelledby="library-heading"
      className="w-full bg-[#0c0d0f] px-5 py-10 text-white sm:px-8 sm:py-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-7">
          <h2
            id="library-heading"
            className="font-[Impact,'Arial_Narrow',sans-serif] text-[28px] font-bold uppercase leading-none tracking-[-0.02em] sm:text-[32px]"
          >
            The Library
          </h2>
          <p className="mt-2 text-[12px] text-[#969ba6] sm:text-[13px]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {workouts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
