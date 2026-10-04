"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Header() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const isWorkoutsActive = pathname === "/" || pathname.startsWith("/workouts");
  const isPlanActive = pathname === "/plan";

  return (
    <header className="w-full border-y border-[#252622] bg-[#0d0e0d] text-[#f4f4f0]">
      <div className="mx-auto grid min-h-[82px] w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <Link
          href="/"
          aria-label="FitLog home"
          className="flex w-fit items-center gap-2.5"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={28}
            height={28}
            priority
            className="h-7 w-7 object-contain"
          />
          <span className="font-[Arial,sans-serif] text-[16px] font-extrabold tracking-[0.06em]">
            FITLOG
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 rounded-full bg-transparent p-1 sm:gap-2"
        >
          <Link
            href="/"
            aria-current={isWorkoutsActive ? "page" : undefined}
            className={`rounded-full px-3.5 py-2 text-[11px] font-medium transition-colors sm:px-4 ${
              isWorkoutsActive
                ? "bg-[#191f0d] text-[#ccff00]"
                : "text-[#a5a7ad] hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/plan"
            aria-current={isPlanActive ? "page" : undefined}
            className={`rounded-full px-3.5 py-2 text-[11px] font-medium transition-colors sm:px-4 ${
              isPlanActive
                ? "bg-[#191f0d] text-[#ccff00]"
                : "text-[#a5a7ad] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center justify-self-end gap-3 sm:gap-5">
          <Link
            href="/plan"
            aria-label={`Plan: ${plan.length} workouts`}
            className="flex items-center gap-1.5 text-[10px] text-[#d0d1d4] transition-colors hover:text-white sm:gap-2"
          >
            <span>Plan</span>
            <span className="grid h-[19px] min-w-[19px] place-items-center rounded-full bg-[#ccff00] px-1 text-[10px] font-semibold leading-none text-[#11120e]">
              {plan.length}
            </span>
          </Link>
          <Link
            href="/plan"
            aria-label={`Saved: ${saved.length} workouts`}
            className="flex items-center gap-1.5 text-[10px] text-[#a5a7ad] transition-colors hover:text-white sm:gap-2"
          >
            <span>Saved</span>
            <span className="grid h-[19px] min-w-[19px] place-items-center rounded-full border border-[#34363a] px-1 text-[10px] leading-none text-[#d0d1d4]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
