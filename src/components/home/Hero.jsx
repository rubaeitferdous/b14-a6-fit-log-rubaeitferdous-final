import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1344px] px-5 pt-5 sm:px-8 sm:pt-7">
      <div className="relative isolate flex min-h-[410px] items-center overflow-hidden rounded-2xl border border-[#252a33] bg-[#15171d] px-6 py-9 sm:min-h-[460px] sm:px-10 lg:px-[52px]">
        <div className="relative z-10 max-w-[570px]">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#caff00] sm:text-xs">
            Workout Library
          </p>
          <h1 className="max-w-[570px] font-display text-[clamp(42px,7vw,62px)] font-semibold uppercase leading-[0.94] tracking-[-0.025em] text-[#f5f5f4] sm:text-[64px] lg:text-[68px]">
            Train with intent. Log every set.
          </h1>
          <p className="mt-5 max-w-[475px] text-[14px] leading-[1.7] text-[#a1a5b0] sm:text-[16px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link
            href="#library"
            className="mt-7 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-[#caff00] px-6 text-[11px] font-bold uppercase tracking-[0.05em] text-black transition-colors hover:bg-[#dcff64] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#caff00]"
          >
            <span aria-hidden="true">↘</span>
            Browse workouts
          </Link>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-1 z-0 flex h-[190px] w-[45%] items-end justify-end opacity-35 sm:inset-y-0 sm:right-0 sm:h-auto sm:w-[47%] sm:items-center sm:opacity-100">
          <Image
            src="/images/banner.png"
            alt="Athlete training on a seated strength machine"
            width={267}
            height={331}
            priority
            className="h-full max-h-[82%] w-auto max-w-full object-contain"
            sizes="(max-width: 768px) 40vw, 267px"
          />
        </div>
      </div>
    </section>
  );
}
