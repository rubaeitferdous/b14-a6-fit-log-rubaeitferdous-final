import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
        404 — Page not found
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-6xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base text-zinc-400">
        The link may be broken, or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-lime-300"
      >
        Back to workouts
      </Link>
    </main>
  );
}