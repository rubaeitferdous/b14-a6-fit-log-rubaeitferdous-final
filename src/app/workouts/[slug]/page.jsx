import { Inter, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import getWorkouts from "@/data/workouts";

const inter = Inter({ subsets: ["latin"], variable: "--font-detail-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-detail-oswald" });

export default async function WorkoutDetailsPage({ params }) {
  const { slug } = await params;
  const workouts = await getWorkouts();
  const workout = workouts.find((item) => item.slug === slug);

  if (!workout) {
    notFound();
  }

  const specs = [
    ["Equipment", workout.equipment.join(", ")],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.calories} kcal`],
    ["Rating", `${Number(workout.rating).toFixed(1)} / 5`],
  ];

  return (
    <main
      className={`${inter.variable} ${oswald.variable} min-h-screen bg-[#0b0c0f] px-5 pb-12 pt-8 text-white sm:px-8 sm:pt-12`}
    >
      <article className="mx-auto grid w-full max-w-[1232px] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <div
          role="img"
          aria-label={`${workout.name} workout`}
          className="aspect-[588/735] w-full overflow-hidden bg-[#15161b] bg-cover bg-center"
          style={{ backgroundImage: `url("${workout.image}")` }}
        />

        <div className="min-w-0 font-[var(--font-detail-inter)]">
          <header>
            <h1 className="m-0 font-[var(--font-detail-oswald)] text-[32px] font-bold uppercase leading-[1.12] tracking-[0.025em] text-white sm:text-[40px]">
              {workout.name}
            </h1>
            <p className="mb-0 mt-3 text-[13px] leading-[1.65] text-[#9ca3af] sm:text-[14px]">
              {workout.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#343a20] bg-[#191e0d] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#caff00]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <section className="mt-7" aria-label="Workout key specifications">
            <dl className="m-0 divide-y divide-[#30343c] border border-[#30343c] bg-[#14161b] px-4 sm:px-6">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="grid min-h-[48px] grid-cols-[minmax(112px,0.7fr)_minmax(0,1.3fr)] items-center gap-4 py-2"
                >
                  <dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#9ca3af]">
                    {label}
                  </dt>
                  <dd className="m-0 text-right text-[12px] font-medium text-white">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-7" aria-labelledby="instructions-heading">
            <h2
              id="instructions-heading"
              className="m-0 font-[var(--font-detail-oswald)] text-[18px] font-bold uppercase leading-6 tracking-[0.06em] text-white"
            >
              Instructions
            </h2>
            <ol className="mb-0 mt-3 list-none border-t border-[#30343c] p-0">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={`${index}-${instruction}`}
                  className="grid grid-cols-[28px_1fr] items-start gap-3 border-b border-[#30343c] py-2.5"
                >
                  <span className="font-[var(--font-detail-oswald)] text-[14px] font-semibold text-[#caff00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="m-0 text-[11px] leading-[1.55] text-[#c4c7ce]">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex h-[44px] w-[203px] items-center justify-center gap-2 rounded-[3px] bg-[#caff00] px-4 text-[10px] font-bold text-[#11120e] transition-colors hover:bg-[#dcff64]"
            >
              <span aria-hidden="true" className="text-[15px] leading-none">+</span>
              Add to today&apos;s plan
            </button>
            <button
              type="button"
              className="inline-flex h-[46px] w-[163px] items-center justify-center gap-2 rounded-[3px] border border-[#454a54] bg-transparent px-4 text-[10px] font-semibold text-white transition-colors hover:border-[#caff00] hover:text-[#caff00]"
            >
              <span aria-hidden="true" className="text-[14px] leading-none">☆</span>
              Save for later
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
