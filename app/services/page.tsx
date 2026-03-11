import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | The Sharp Blade",
  description: "Full menu of premium barbershop services.",
};

const serviceCategories = [
  {
    category: "Haircuts",
    items: [
      { name: "Classic Haircut",    desc: "Scissor and clipper cut, wash, dry, and style tailored to your face shape.", price: "150", duration: "45 min" },
      { name: "Skin Fade",          desc: "Zero-to-skin graduation with seamless blend. The modern standard.", price: "180", duration: "50 min" },
      { name: "Scissor Cut",        desc: "Full scissor technique for textured, natural finish. Best for longer styles.", price: "200", duration: "55 min" },
      { name: "Kids Cut (under 12)", desc: "Gentle, patient service for our younger clients.", price: "100", duration: "30 min" },
    ],
  },
  {
    category: "Shaves",
    items: [
      { name: "Hot Towel Shave",   desc: "Classic straight-razor shave with hot towel prep, shaving cream, and post-shave balm.", price: "200", duration: "60 min" },
      { name: "Beard Trim & Shape", desc: "Precision edging and shaping with straight-razor cleanup on neckline and cheeks.", price: "120", duration: "30 min" },
      { name: "Beard Coloring",    desc: "Professional beard dye service to cover grey or enhance your natural color.", price: "250", duration: "45 min" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Scalp Treatment",   desc: "Deep-cleanse scalp massage with nourishing serum. Promotes healthy growth.", price: "300", duration: "45 min" },
      { name: "Hair Wash & Style", desc: "Premium shampoo, conditioner, blow-dry, and product finish.", price: "80", duration: "25 min" },
      { name: "Eyebrow Shaping",   desc: "Clean arch and shaping for defined brows.", price: "50", duration: "15 min" },
    ],
  },
  {
    category: "Packages",
    items: [
      { name: "Cut & Beard Combo",     desc: "Haircut + beard trim and shape in one seamless session.", price: "250", duration: "75 min" },
      { name: "Cut & Shave Combo",     desc: "Classic cut + full hot towel straight-razor shave.", price: "350", duration: "90 min" },
      { name: "VIP Grooming Package",  desc: "Haircut + hot towel shave + scalp treatment + refreshments. The full experience.", price: "500", duration: "2.5 hrs", featured: true },
    ],
  },
];

const PageHeader = () => (
  <section className="pt-36 pb-16 bg-[var(--bg)] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005]/50 via-transparent to-transparent" />
    <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex items-center gap-4 mb-5">
        <div className="h-px w-8 bg-[#c9a84c]" />
        <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">What We Offer</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-[var(--tx)] leading-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
        Our <span className="italic text-[#c9a84c]">Services</span>
      </h1>
      <p className="mt-5 text-[var(--dim)] text-base max-w-xl">
        From a quick trim to a full grooming ritual — every service delivered with precision and care.
      </p>
    </div>
  </section>
);

export default function ServicesPage() {
  return (
    <>
      <PageHeader />

      <section className="py-20 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
          {serviceCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-[var(--tx)]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  {cat.category}
                </h2>
                <div className="flex-1 h-px bg-[var(--bd)]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--gp)]">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className={`p-7 flex flex-col gap-3 group transition-colors duration-200 relative bg-[var(--bg)] hover:bg-[var(--sf2)]`}
                  >
                    {"featured" in item && item.featured && (
                      <div className="absolute top-4 right-4 bg-[#c9a84c] text-black text-[8px] font-bold tracking-widest px-2 py-1 uppercase">
                        Popular
                      </div>
                    )}
                    <h3 className="text-base font-semibold text-[var(--tx)] leading-snug" style={{ fontFamily: "var(--font-playfair), serif" }}>
                      {item.name}
                    </h3>
                    <p className="text-[var(--dim)] text-sm leading-relaxed flex-1">{item.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--bd)]">
                      <span className="text-[#c9a84c] text-xl font-bold">₹{item.price}</span>
                      <span className="text-[var(--dim)] text-xs tracking-wider opacity-60">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-alt)] border-t border-[var(--bdx)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[var(--dim)] text-sm mb-3">Ready to book?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--tx)] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Reserve Your <span className="text-[#c9a84c] italic">Slot</span>
          </h2>
          <Link href="/booking" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors duration-300">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
