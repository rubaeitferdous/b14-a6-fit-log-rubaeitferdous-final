import Link from "next/link";

export default function WorkoutCard({ workout }) {
  const tags = workout.tags ?? workout.muscleGroups ?? [];
  const equipment = Array.isArray(workout.equipment)
    ? workout.equipment.join(", ")
    : workout.equipment;
  const calories = workout.calories ?? workout.caloriesBurned;

  return (
    <Link
      href={`/workouts/${workout.slug}`}
      className="group block overflow-hidden rounded-[26px] border border-[#252831] bg-[#15161b] text-[#f5f5f4] transition-colors hover:border-[#454954] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#caff00]"
    >
      <div
        role="img"
        aria-label={workout.name}
        className="aspect-[2.03/1] w-full bg-[#20232a] bg-cover bg-center transition-transform duration-300 group-hover:bg-[length:105%_105%]"
        style={{ backgroundImage: `url("${workout.image}")` }}
      />

      <div className="p-6 sm:px-[42px] sm:pb-[38px] sm:pt-10">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#caff00] px-[18px] py-[7px] text-[13px] font-bold uppercase leading-[1.2] tracking-[0.02em] text-[#11120e] sm:text-[18px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mt-7 font-[Impact,'Arial_Narrow',sans-serif] text-[26px] font-bold uppercase leading-tight tracking-[0.025em] text-white sm:mt-[28px] sm:text-[34px]">
          {workout.name}
        </h2>
        <p className="mt-2 text-[16px] leading-snug text-[#a1a5b0] sm:text-[20px]">
          {equipment}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#292c34] pt-5 text-[15px] text-[#a1a5b0] sm:mt-[29px] sm:gap-x-8 sm:pt-5 sm:text-[20px]">
          <span className="inline-flex items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 shrink-0 stroke-current sm:h-6 sm:w-6"
            >
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <path d="M12 7v5l3 2" strokeLinecap="round" strokeWidth="2" />
            </svg>
            {workout.duration} min
          </span>
          <span className="inline-flex items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
            >
              <path d="M13.5 2.5c.4 3-2 4.2-2 6.2 0 1.1.7 1.8 1.6 1.8 1.3 0 2.2-1.2 2-3.1 2.5 2 4.1 4.4 4.1 7.2A7.2 7.2 0 0 1 12 22a7.2 7.2 0 0 1-7.2-7.4c0-3.5 2.3-6.4 6.1-9.7-.1 2.3.4 3.3 1.1 3.3 1.2 0 1.7-2.3 1.5-5.7Z" />
            </svg>
            {calories} kcal
          </span>
          <span className="inline-flex items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 shrink-0 stroke-current sm:h-7 sm:w-7"
            >
              <path
                d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            {Number(workout.rating).toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
