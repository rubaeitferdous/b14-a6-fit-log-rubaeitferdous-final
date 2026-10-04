import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#252831] bg-[#090a0c]">
      <div className="mx-auto flex min-h-[92px] w-full max-w-[1280px] flex-col items-start justify-center gap-4 px-5 py-5 sm:min-h-[94px] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          aria-label="FitLog home"
          className="inline-flex items-center gap-2 text-white"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={17}
            height={17}
            className="h-[17px] w-[17px] object-contain"
          />
          <span className="font-display text-[14px] font-semibold tracking-[0.06em]">
            FITLOG
          </span>
        </Link>

        <p className="m-0 text-[11px] leading-relaxed text-[#7d8491] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
