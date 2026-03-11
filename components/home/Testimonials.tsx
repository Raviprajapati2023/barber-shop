import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  { name: "James Whitmore", role: "Regular Client",  rating: 5, initials: "JW", text: "Hands down the best barbershop in the city. Marcus has been cutting my hair for 6 years now and I wouldn't trust anyone else. The atmosphere, the attention to detail — it's unmatched." },
  { name: "Carlos Rivera",  role: "New Client",      rating: 5, initials: "CR", text: "First time here and I'm never going anywhere else. The hot towel shave was an experience in itself. Diego shaped my beard exactly how I envisioned it. Worth every penny." },
  { name: "Thomas Chen",    role: "Monthly Regular", rating: 5, initials: "TC", text: "The VIP package is absolutely worth it. You're not just getting a haircut — you're getting an hour of pure luxury. The scalp treatment alone had me coming back every month." },
  { name: "Michael Okafor", role: "Regular Client",  rating: 5, initials: "MO", text: "Alex's fade game is elite. I've tried other shops after moving to New York and none come close to the consistency and quality here. Book in advance — they fill up fast." },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#c9a84c">
          <path d="M6 1l1.3 3.9H11l-3 2.2 1.1 3.9L6 8.8l-3.1 2.2L4 7.1 1 4.9h3.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Client Reviews"
          title="What They"
          titleItalic="Say"
          subtitle="Don't take our word for it — hear from the gentlemen who trust us every month."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((review, i) => (
            <div
              key={review.name}
              className={`p-8 border border-[var(--bd)] hover:border-[var(--bd3)] transition-colors duration-300 bg-[var(--bg)] ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="text-6xl leading-none text-[#c9a84c]/15 mb-4" style={{ fontFamily: "Georgia, serif" }}>
                &ldquo;
              </div>
              <p className="text-[var(--dim)] text-sm leading-relaxed mb-8">{review.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] text-sm font-semibold bg-[#c9a84c]/5">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-[var(--tx)] text-sm font-medium">{review.name}</p>
                    <p className="text-[var(--dim)] text-xs opacity-70">{review.role}</p>
                  </div>
                </div>
                <StarRating count={review.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-t border-[var(--bdx)]">
          {[
            { value: "4.9", label: "Average Rating", star: true },
            { value: "600+", label: "Verified Reviews", star: false },
            { value: "98%", label: "Recommend Us", star: false },
          ].map((item, i) => (
            <div key={item.label} className="contents">
              {i > 0 && <div className="h-px md:h-12 w-full md:w-px bg-[var(--bd)]" />}
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--tx)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  {item.value}
                </div>
                {item.star && (
                  <div className="flex justify-center mt-2 mb-1"><StarRating count={5} /></div>
                )}
                <div className="text-[var(--dim)] text-xs tracking-widest uppercase mt-2">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
