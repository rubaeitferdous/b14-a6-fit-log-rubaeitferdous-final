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
    <article className="flex flex-col gap-4 rounded-2xl border border-[#232732] bg-[#14171e] p-4 sm:flex-row sm:items-center sm:gap-5">
      <div
        role="img"
        aria-label={`${workout.name} workout`}
        className="h-28 w-full shrink-0 rounded-lg bg-[#20232a] bg-cover bg-center sm:h-20 sm:w-36"
        style={{ backgroundImage: `url("${workout.image}")` }}
      />

      <div className="min-w-0 flex-1">
        <h3 className="m-0 font-[Oswald,Impact,sans-serif] text-base font-semibold uppercase tracking-[0.04em] text-white">
          {workout.name}
        </h3>
        <p className="mb-0 mt-1 text-xs text-[#8a92a0]">{equipment}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#8a92a0]">
          <span className="inline-flex items-center gap-1.5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 stroke-current"
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
              className="h-4 w-4"
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
              className="h-4 w-4 stroke-current"
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
          className="inline-flex h-[34px] items-center justify-center rounded-md border border-[#343a45] px-3 text-xs text-white transition-colors hover:border-[#caff00] hover:text-[#caff00]"
        >
          View Details
        </Link>
        {onMarkDone && (
          <button
            type="button"
            onClick={onMarkDone}
            disabled={isDone}
            className="inline-flex h-[34px] items-center justify-center gap-1.5 rounded-md bg-[#caff00] px-3 text-xs font-semibold text-[#11120e] transition-colors hover:bg-[#dcff64] disabled:cursor-default disabled:opacity-60"
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
            className="grid h-[34px] w-[34px] place-items-center rounded-md border border-[#343a45] text-lg leading-none text-[#8a92a0] transition-colors hover:border-red-400 hover:text-red-300"
          >
            ×
          </button>
        )}
      </div>
    </article>
  );
}
