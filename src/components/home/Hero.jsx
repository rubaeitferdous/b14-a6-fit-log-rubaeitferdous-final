import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 pt-5 sm:px-6 lg:px-8">
      <div className="relative isolate flex min-h-[360px] items-center overflow-hidden rounded-2xl border border-[#252831] bg-[#15161b] px-7 py-10 sm:min-h-[418px] sm:px-10 lg:px-[52px]">
        <div className="relative z-10 max-w-[570px]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#caff00] sm:text-[11px]">
            Workout Library
          </p>
          <h1 className="max-w-[570px] font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(42px,7vw,62px)] font-black uppercase leading-[0.91] tracking-[-0.035em] text-[#f5f5f4] sm:text-[64px] lg:text-[68px]">
            Train with intent. Log every set.
          </h1>
          <p className="mt-5 max-w-[475px] text-[14px] leading-[1.65] text-[#a1a5b0] sm:text-[15px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link
            href="#library"
            className="mt-6 inline-flex min-h-[39px] items-center justify-center rounded-md bg-[#caff00] px-[22px] text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#14150f] transition-colors hover:bg-[#dcff64] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#caff00]"
          >
            Browse workouts
          </Link>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 -z-0 hidden w-[47%] items-center justify-center sm:flex">
          <Image
            src="/images/banner.png"
            alt="Athlete training on a seated strength machine"
            width={267}
            height={331}
            priority
            className="h-[82%] w-auto max-w-[80%] object-contain"
            sizes="(max-width: 768px) 40vw, 267px"
          />
        </div>
      </div>
    </section>
  );
}
