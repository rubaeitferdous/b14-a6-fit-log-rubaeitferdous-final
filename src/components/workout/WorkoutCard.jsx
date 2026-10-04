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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#252a33] bg-[#14171e] text-[#f5f5f4] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-[#414753] hover:shadow-[0_14px_32px_rgba(0,0,0,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#caff00]"
    >
      <div
        role="img"
        aria-label={workout.name}
        className="aspect-[2.03/1] w-full shrink-0 bg-[#20232a] bg-cover bg-center"
        style={{ backgroundImage: `url("${workout.image}")` }}
      />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex min-h-6 flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#caff00] px-2.5 py-1 text-[10px] font-semibold uppercase leading-tight tracking-[0.03em] text-[#11120e] sm:px-3 sm:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mt-4 font-display text-[20px] font-medium uppercase leading-tight tracking-[0.035em] text-white sm:text-[21px]">
          {workout.name}
        </h2>
        <p className="mt-1.5 min-h-5 text-[13px] leading-snug text-[#9ba2ae] sm:text-[14px]">
          {equipment}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#292c34] pt-3.5 text-[11px] text-[#a1a5b0] sm:gap-x-6 sm:text-xs">
          <span className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-[18px] w-[18px] shrink-0 stroke-current"
            >
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <path d="M12 7v5l3 2" strokeLinecap="round" strokeWidth="2" />
            </svg>
            {workout.duration} min
          </span>
          <span className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[18px] w-[18px] shrink-0"
            >
              <path d="M13.5 2.5c.4 3-2 4.2-2 6.2 0 1.1.7 1.8 1.6 1.8 1.3 0 2.2-1.2 2-3.1 2.5 2 4.1 4.4 4.1 7.2A7.2 7.2 0 0 1 12 22a7.2 7.2 0 0 1-7.2-7.4c0-3.5 2.3-6.4 6.1-9.7-.1 2.3.4 3.3 1.1 3.3 1.2 0 1.7-2.3 1.5-5.7Z" />
            </svg>
            {calories} kcal
          </span>
          <span className="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-[18px] w-[18px] shrink-0 stroke-current"
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
