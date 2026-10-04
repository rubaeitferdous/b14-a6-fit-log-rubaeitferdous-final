"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Header() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/workouts");
  const isPlanActive = pathname === "/plan" || pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#252a33] bg-[#0b0c0f]/95 text-[#f4f4f0] backdrop-blur-md">
      <div className="mx-auto grid min-h-[76px] w-full max-w-[1280px] grid-cols-[1fr_auto] items-center gap-x-3 px-5 py-2 sm:min-h-[84px] sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label="FitLog home"
          className="flex w-fit items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={34}
            height={34}
            priority
            className="h-8 w-8 object-contain sm:h-[34px] sm:w-[34px]"
          />
          <span className="font-display text-[18px] font-semibold tracking-[0.07em] sm:text-[20px]">
            FITLOG
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="col-span-2 row-start-2 flex items-center justify-center gap-2 py-1 md:col-span-1 md:row-start-auto md:gap-3"
        >
          <Link
            href="/"
            aria-current={isWorkoutsActive ? "page" : undefined}
            className={`rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors sm:px-5 ${
              isWorkoutsActive
                ? "bg-[#191f0d] text-[#caff00]"
                : "text-[#a5a7ad] hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            aria-current={isPlanActive ? "page" : undefined}
            className={`rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors sm:px-5 ${
              isPlanActive
                ? "bg-[#191f0d] text-[#caff00]"
                : "text-[#a5a7ad] hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center justify-self-end gap-3 sm:gap-5 lg:col-start-3">
          <Link
            href="/my-plan"
            aria-label={`Plan: ${plan.length} workouts`}
            className="flex items-center gap-2 text-[12px] text-[#d0d1d4] transition-colors hover:text-white sm:gap-2.5 sm:text-[13px]"
          >
            <span>Plan</span>
            <span className="grid h-[22px] min-w-[22px] place-items-center rounded-full bg-[#caff00] px-1 text-[11px] font-semibold leading-none text-[#11120e]">
              {plan.length}
            </span>
          </Link>
          <Link
            href="/my-plan"
            aria-label={`Saved: ${saved.length} workouts`}
            className="flex items-center gap-2 text-[12px] text-[#a5a7ad] transition-colors hover:text-white sm:gap-2.5 sm:text-[13px]"
          >
            <span>Saved</span>
            <span className="grid h-[22px] min-w-[22px] place-items-center rounded-full border border-[#34363a] px-1 text-[11px] leading-none text-[#d0d1d4]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
