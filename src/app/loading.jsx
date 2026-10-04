export default function Loading() {
  return (
    <main
      aria-label="Loading workouts"
      className="min-h-screen bg-[#0b0c0f] px-5 py-12 sm:px-8"
    >
      <div className="mx-auto max-w-[1232px] animate-pulse">
        <div className="mb-8 h-9 w-52 rounded bg-[#1b1e25]" />
        <div className="mb-8 h-5 w-80 max-w-full rounded bg-[#171a20]" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#252a33] bg-[#14171e]"
            >
              <div className="aspect-[2.03/1] bg-[#20232a]" />
              <div className="space-y-4 p-5">
                <div className="h-5 w-28 rounded-full bg-[#242a31]" />
                <div className="h-6 w-3/4 rounded bg-[#242a31]" />
                <div className="h-4 w-1/2 rounded bg-[#1d2229]" />
                <div className="border-t border-[#252a33] pt-4">
                  <div className="h-4 w-full rounded bg-[#1d2229]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
