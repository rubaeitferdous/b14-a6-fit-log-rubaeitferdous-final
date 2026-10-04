import Link from "next/link";

export default function EmptyState({ saved = false }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center px-5 text-center">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-[#30343c] bg-[#14171e] text-2xl font-light text-[#caff00]">
        +
      </div>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a92a0]">
        Nothing here yet
      </p>
      <h2 className="m-0 font-display text-2xl font-medium uppercase text-white sm:text-[28px]">
        {saved ? "Save a lift for later." : "Let’s get moving."}
      </h2>
      <p className="mb-5 mt-2 max-w-sm text-[13px] leading-6 text-[#9ba2ae]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/#library"
        className="inline-flex h-11 items-center justify-center rounded-md bg-[#caff00] px-6 text-[11px] font-semibold uppercase text-[#11120e] transition-colors hover:bg-[#dcff64]"
      >
        Go to workouts
      </Link>
    </div>
  );
}
