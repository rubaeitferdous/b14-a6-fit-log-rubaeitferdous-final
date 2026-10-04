"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/plan/EmptyState";
import MetricCard from "@/components/plan/MetricCard";
import PlanItem from "@/components/plan/PlanItem";
import PlanTabs from "@/components/plan/PlanTabs";
import { usePlan } from "@/context/PlanContext";

export default function PlanDashboard({ workouts }) {
  const [activeTab, setActiveTab] = useState("plan");
  const [sort, setSort] = useState("duration");
  const {
    plan,
    saved,
    done,
    hydrated,
    markDone,
    removeFromPlan,
    removeSaved,
  } = usePlan();

  const planWorkouts = useMemo(
    () =>
      plan
        .map((id) => workouts.find((workout) => workout.id === id))
        .filter(Boolean),
    [plan, workouts],
  );
  const savedWorkouts = useMemo(
    () =>
      saved
        .map((id) => workouts.find((workout) => workout.id === id))
        .filter(Boolean),
    [saved, workouts],
  );
  const visibleWorkouts = useMemo(() => {
    const current = activeTab === "plan" ? planWorkouts : savedWorkouts;
    return [...current].sort((first, second) => {
      const firstValue = sort === "calories" ? first.calories : first[sort];
      const secondValue = sort === "calories" ? second.calories : second[sort];
      return firstValue - secondValue;
    });
  }, [activeTab, planWorkouts, savedWorkouts, sort]);
  const totalMinutes = planWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalCalories = planWorkouts.reduce(
    (total, workout) => total + workout.calories,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-10 text-white sm:px-8 sm:py-14">
      <div className="mx-auto w-full max-w-[1232px]">
        <header className="mb-8 sm:mb-10">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#caff00]">
            Training log
          </p>
          <h1 className="m-0 font-display text-[42px] font-semibold uppercase leading-none sm:text-[52px]">
            My Plan
          </h1>
          <p className="mb-0 mt-3 text-[14px] text-[#9ba2ae] sm:text-[15px]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        <section
          aria-label="Today's plan summary"
          className="mb-8 grid grid-cols-3 divide-x divide-[#232732] border-y border-[#232732] py-3 sm:mb-10"
        >
          <MetricCard label="Exercises" value={plan.length} />
          <MetricCard label="Minutes" value={totalMinutes} unit="min" />
          <MetricCard label="Calories" value={totalCalories} unit="kcal" />
        </section>

        <PlanTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          sort={sort}
          onSortChange={setSort}
          planCount={plan.length}
          savedCount={saved.length}
        />

        <section
          aria-label={activeTab === "plan" ? "Today's Plan workouts" : "Saved workouts"}
          role="tabpanel"
          className="space-y-3 pt-5 sm:pt-6"
        >
          {!hydrated ? (
            <p
              role="status"
              className="py-12 text-center text-sm text-[#9ba2ae]"
            >
              <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#424751] border-t-[#caff00] align-[-3px]" />
              Loading workouts…
            </p>
          ) : visibleWorkouts.length ? (
            visibleWorkouts.map((workout) => (
              <PlanItem
                key={workout.id}
                workout={workout}
                isDone={done.includes(workout.id)}
                onMarkDone={
                  activeTab === "plan" ? () => markDone(workout.id) : undefined
                }
                onRemove={() =>
                  activeTab === "plan"
                    ? removeFromPlan(workout.id)
                    : removeSaved(workout.id)
                }
              />
            ))
          ) : (
            <EmptyState saved={activeTab === "saved"} />
          )}
        </section>
      </div>
    </main>
  );
}
