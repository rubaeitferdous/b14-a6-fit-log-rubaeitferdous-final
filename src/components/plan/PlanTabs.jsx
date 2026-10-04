"use client";

export default function PlanTabs({
  activeTab = "plan",
  onTabChange,
  sort = "duration",
  onSortChange,
  planCount = 0,
  savedCount = 0,
}) {
  const tabs = [
    { id: "plan", label: "Today's Plan", count: planCount },
    { id: "saved", label: "Saved", count: savedCount },
  ];

  return (
    <div className="flex flex-col gap-4 border-b border-[#232732] pb-3 sm:flex-row sm:items-center sm:justify-between sm:pb-0">
      <div
        className="inline-flex w-fit items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-1"
        role="tablist"
        aria-label="Workout list"
      >
        {tabs.map((tab) => {
          const selected = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onTabChange?.(tab.id)}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                selected
                  ? "bg-[#232732] text-white"
                  : "text-[#8a92a0] hover:text-white"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 ${selected ? "text-[#caff00]" : "text-[#8a92a0]"}`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <label className="flex items-center gap-3 text-xs text-[#8a92a0]">
        <span>Sort By</span>
        <span className="relative">
          <select
            value={sort}
            onChange={(event) => onSortChange?.(event.target.value)}
            className="h-[34px] min-w-[112px] appearance-none rounded-md border border-[#232732] bg-[#14171e] py-1 pl-3 pr-8 text-xs text-white outline-none transition-colors focus:border-[#caff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 stroke-[#8a92a0]"
          >
            <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </label>
    </div>
  );
}
