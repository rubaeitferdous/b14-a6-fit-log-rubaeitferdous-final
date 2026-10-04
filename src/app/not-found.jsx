import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] flex-col items-center justify-center bg-[#0b0c0f] px-6 text-center text-white">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#caff00] sm:text-sm">
        404 — Page not found
      </p>
      <h1 className="font-display text-4xl font-medium uppercase sm:text-6xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-[#9ba2ae]">
        The link may be broken, or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-[#caff00] px-6 py-3 text-xs font-semibold uppercase text-[#11120e] transition-colors hover:bg-[#dcff64]"
      >
        Back to workouts
      </Link>
    </main>
  );
}