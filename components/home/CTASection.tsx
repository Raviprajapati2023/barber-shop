import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1005]/40 via-transparent to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">Ready to Look Sharp?</span>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--tx)] leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Book Your
            <br />
            <span className="italic text-[#c9a84c]">Experience</span>
            <br />
            Today
          </h2>

          <p className="text-[var(--dim)] text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Slots fill up fast. Reserve your appointment now and let our
            master barbers take care of the rest.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors duration-300"
            >
              Reserve Your Seat
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a href="tel:+12125550100" className="text-[var(--dim)] text-sm hover:text-[#c9a84c] transition-colors">
              or call (212) 555-0100
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 items-center">
            {["Walk-ins Welcome", "No Hidden Fees", "100% Satisfaction"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-4 h-4 border border-[#c9a84c]/50 flex items-center justify-center shrink-0">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-4" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[var(--dim)] text-xs tracking-wider">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
