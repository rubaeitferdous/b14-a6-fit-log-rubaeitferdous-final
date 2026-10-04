export default function MetricCard({ label, value = 0, unit = "" }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-2 first:pl-0 last:pr-0 sm:px-8">
      <span className="text-[11px] font-medium text-[#8a92a0] sm:text-xs">
        {label}
      </span>
      <span className="mt-1 font-[Oswald,Impact,sans-serif] text-[30px] font-medium leading-none text-[#caff00] sm:text-4xl">
        {value}
        {unit && <span className="ml-1 text-sm">{unit}</span>}
      </span>
    </div>
  );
}
