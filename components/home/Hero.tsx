import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/barbershop-hero/1920/1080?grayscale"
          alt="Barbershop interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#c9a84c]/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Vertical accent lines */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/15 to-transparent hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/15 to-transparent hidden xl:block" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-14 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase">
              India&apos;s Premier Barbershop
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-[clamp(3.5rem,9vw,7rem)] font-bold leading-[0.95] !text-white mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            The Art of
            <br />
            <span className="italic text-[#c9a84c]">Precision</span>
            <br />
            Grooming
          </h1>

          {/* Description */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-12">
            Where every cut tells a story. Our master barbers combine old-world
            craftsmanship with modern technique — for the gentleman who demands
            nothing but the best.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors duration-300"
            >
              Book Appointment
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 !text-white text-[11px] tracking-[0.3em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {[
            { value: "15+", label: "Years of Excellence" },
            { value: "12K+", label: "Happy Clients" },
            { value: "8", label: "Master Barbers" },
            { value: "50+", label: "Awards Won" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 md:py-8 ${
                i !== 0 ? "md:border-l border-white/10 md:pl-10" : ""
              }`}
            >
              <div
                className="text-4xl md:text-5xl font-bold text-[#c9a84c] mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-white/40 tracking-[0.3em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex">
        <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
      </div>
    </section>
  );
}
