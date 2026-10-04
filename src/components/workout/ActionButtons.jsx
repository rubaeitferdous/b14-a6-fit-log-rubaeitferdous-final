"use client";

import { usePlan } from "@/context/PlanContext";

export default function ActionButtons({ workout }) {
  const { plan, saved, addToPlan, saveWorkout } = usePlan();
  const isPlanned = plan.includes(workout.id);
  const isSaved = saved.includes(workout.id);
  const planFull = plan.length >= 5 && !isPlanned;

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => addToPlan(workout.id)}
        disabled={isPlanned || planFull}
        className="inline-flex h-11 min-w-[203px] flex-1 items-center justify-center gap-2 rounded-[3px] bg-[#caff00] px-4 text-xs font-semibold text-[#11120e] transition-colors hover:bg-[#dcff64] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
      >
        <span aria-hidden="true" className="text-[15px] leading-none">
          {isPlanned ? "✓" : "+"}
        </span>
        {isPlanned
          ? "In today's plan"
          : planFull
            ? "Plan is full"
            : "Add to today's plan"}
      </button>
      <button
        type="button"
        onClick={() => saveWorkout(workout.id)}
        disabled={isSaved}
        className="inline-flex h-11 min-w-[163px] flex-1 items-center justify-center gap-2 rounded-[3px] border border-[#454a54] bg-transparent px-4 text-xs font-medium text-white transition-colors hover:border-[#caff00] hover:text-[#caff00] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
      >
        <span aria-hidden="true" className="text-[14px] leading-none">
          {isSaved ? "✓" : "☆"}
        </span>
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
