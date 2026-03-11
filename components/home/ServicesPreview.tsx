import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l4 4M4 8l4-4M20 4l4 4M20 8l4-4M14 20c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" />
        <path d="M8 8l6 6M20 8l-6 6M14 20v4" />
      </svg>
    ),
    title: "Classic Haircut",
    description: "Precision scissor and clipper work tailored to your face shape. Includes wash, cut, and style.",
    price: "150", duration: "45 min",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 14c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7-7-3.134-7-7z" />
        <path d="M14 9v2M14 17v2M9 14H7M21 14h-2M10.5 10.5l1.5 1.5M16 16l1.5 1.5M10.5 17.5L12 16M16 12l1.5-1.5" />
      </svg>
    ),
    title: "Hot Towel Shave",
    description: "The ultimate straight-razor shave experience. Hot towel prep, premium shaving cream, and aftercare.",
    price: "200", duration: "60 min",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7h10M9 11h6M6 4h16v20H6zM14 15c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
      </svg>
    ),
    title: "Beard Trim & Shape",
    description: "Expert beard sculpting, edging, and conditioning. Define your look with precision shaping.",
    price: "120", duration: "30 min",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="10" r="5" />
        <path d="M14 15v8M10 19h8M6 10h3M19 10h3" />
      </svg>
    ),
    title: "Hair & Beard Combo",
    description: "Complete grooming package. Cut + hot towel shave with premium product finish.",
    price: "250", duration: "90 min",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22l5-8 4 5 3-4 6 7H5zM9 10a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    title: "Scalp Treatment",
    description: "Deep-cleanse scalp massage and nourishing treatment. Promotes healthy growth and relieves tension.",
    price: "300", duration: "45 min",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4l2 5h5l-4 3 1.5 5L14 14l-4.5 3L11 12 7 9h5z" />
      </svg>
    ),
    title: "VIP Grooming Package",
    description: "Full-day luxury experience. Haircut, shave, scalp treatment, and complimentary refreshments.",
    price: "500", duration: "2.5 hrs",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our"
            titleItalic="Services"
            subtitle="Every service is a ritual. Every client, a priority."
          />
          <Link
            href="/services"
            className="shrink-0 text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] border-b border-[#c9a84c]/30 pb-0.5 hover:border-[#c9a84c] transition-colors self-start md:self-auto mb-16"
          >
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--gp)]">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[var(--bg)] p-8 group hover:bg-[var(--sf2)] transition-colors duration-300 flex flex-col gap-5"
            >
              <div className="text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-300">
                {service.icon}
              </div>
              <div>
                <h3
                  className="text-lg font-semibold text-[var(--tx)] mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--dim)] leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--bd)]">
                <span className="text-[#c9a84c] text-lg font-bold">
                  ₹{service.price}
                </span>
                <span className="text-[var(--dim)] text-xs tracking-wider opacity-60">
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors duration-300"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </section>
  );
}
