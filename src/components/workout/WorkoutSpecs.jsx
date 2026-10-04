export default function WorkoutSpecs({ workout }) {
  const specs = [
    ["Equipment", Array.isArray(workout.equipment) ? workout.equipment.join(", ") : workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.calories ?? workout.caloriesBurned} kcal`],
    ["Rating", `${Number(workout.rating).toFixed(1)} / 5`],
  ];

  return (
    <section className="mt-7" aria-label="Workout key specifications">
      <dl className="m-0 divide-y divide-[#30343c] border border-[#30343c] bg-[#14161b] px-4 sm:px-6">
        {specs.map(([label, value]) => (
          <div
            key={label}
            className="grid min-h-[48px] grid-cols-[minmax(112px,0.7fr)_minmax(0,1.3fr)] items-center gap-4 py-2"
          >
            <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9ca3af]">
              {label}
            </dt>
            <dd className="m-0 text-right text-[13px] font-medium text-white">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
