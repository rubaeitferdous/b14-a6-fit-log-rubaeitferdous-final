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
    markDone,
    removeFromPlan,
    removeSaved,
  } = usePlan();

  const planWorkouts = useMemo(
    () => plan.map((id) => workouts.find((workout) => workout.id === id)).filter(Boolean),
    [plan, workouts],
  );
  const savedWorkouts = useMemo(
    () => saved.map((id) => workouts.find((workout) => workout.id === id)).filter(Boolean),
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
  const totalMinutes = planWorkouts.reduce((total, workout) => total + workout.duration, 0);
  const totalCalories = planWorkouts.reduce((total, workout) => total + workout.calories, 0);

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-10 text-white sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[1184px]">
        <header className="mb-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#caff00]">
            Training log
          </p>
          <h1 className="m-0 font-[Oswald,Impact,sans-serif] text-4xl font-bold uppercase leading-none sm:text-5xl">
            My Plan
          </h1>
          <p className="mb-0 mt-3 text-sm text-[#8a92a0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        <section
          aria-label="Today's plan summary"
          className="mb-8 flex divide-x divide-[#232732] border-y border-[#232732] py-3"
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
          role="tabpanel"
          aria-label={activeTab === "plan" ? "Today's Plan workouts" : "Saved workouts"}
          className="space-y-3 pt-5"
        >
          {visibleWorkouts.length ? (
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
