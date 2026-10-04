"use client";

import Link from "next/link";

export default function PlanItem({
  workout,
  isDone = false,
  onMarkDone,
  onRemove,
}) {
  const equipment = Array.isArray(workout.equipment)
    ? workout.equipment.join(", ")
    : workout.equipment;
  const calories = workout.calories ?? workout.caloriesBurned;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[#252a33] bg-[#14171e] p-4 transition-colors hover:border-[#3a414d] sm:flex-row sm:items-center sm:gap-5 sm:p-5">
      <div
        role="img"
        aria-label={`${workout.name} workout`}
        className="h-36 w-full shrink-0 rounded-lg bg-[#20232a] bg-cover bg-center sm:h-24 sm:w-36"
        style={{ backgroundImage: `url("${workout.image}")` }}
      />

      <div className="min-w-0 flex-1">
        <h3 className="m-0 font-display text-lg font-medium uppercase tracking-[0.04em] text-white">
          {workout.name}
        </h3>
        <p className="mb-0 mt-1 text-[13px] text-[#9ba2ae]">{equipment}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#9ba2ae]">
          <span className="inline-flex items-center gap-1.5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-[18px] w-[18px] stroke-current"
            >
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <path d="M12 7v5l3 2" strokeLinecap="round" strokeWidth="2" />
            </svg>
            {workout.duration} min
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[18px] w-[18px]"
            >
              <path d="M13.5 2.5c.4 3-2 4.2-2 6.2 0 1.1.7 1.8 1.6 1.8 1.3 0 2.2-1.2 2-3.1 2.5 2 4.1 4.4 4.1 7.2A7.2 7.2 0 0 1 12 22a7.2 7.2 0 0 1-7.2-7.4c0-3.5 2.3-6.4 6.1-9.7-.1 2.3.4 3.3 1.1 3.3 1.2 0 1.7-2.3 1.5-5.7Z" />
            </svg>
            {calories} kcal
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-[18px] w-[18px] stroke-current"
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

      <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
        <Link
          href={`/workouts/${workout.slug}`}
          className="inline-flex h-10 items-center justify-center rounded-md border border-[#343a45] px-3.5 text-xs text-white transition-colors hover:border-[#caff00] hover:text-[#caff00]"
        >
          View Details
        </Link>
        {onMarkDone && (
          <button
            type="button"
            onClick={onMarkDone}
            disabled={isDone}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-[#caff00] px-3.5 text-xs font-medium text-[#11120e] transition-colors hover:bg-[#dcff64] disabled:cursor-default disabled:opacity-60"
          >
            {isDone && <span aria-hidden="true">✓</span>}
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${workout.name}`}
            className="grid h-10 w-10 place-items-center rounded-md border border-[#343a45] text-lg leading-none text-[#8a92a0] transition-colors hover:border-red-400 hover:text-red-300"
          >
            ×
          </button>
        )}
      </div>
    </article>
  );
}
