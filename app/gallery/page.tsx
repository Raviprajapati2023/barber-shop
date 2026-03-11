import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | The Sharp Blade",
  description: "Browse our portfolio of precision cuts and styles.",
};

const galleryItems = [
  { label: "Classic Taper Fade",   tag: "Fade",    seed: "haircut-01", size: "lg" },
  { label: "Textured Crop",        tag: "Crop",    seed: "haircut-02", size: "sm" },
  { label: "Skin Fade + Beard",    tag: "Combo",   seed: "haircut-03", size: "sm" },
  { label: "Pompadour",            tag: "Classic", seed: "haircut-04", size: "lg" },
  { label: "Drop Fade",            tag: "Fade",    seed: "haircut-05", size: "sm" },
  { label: "Caesar Cut",           tag: "Classic", seed: "haircut-06", size: "sm" },
  { label: "Buzz Cut Fade",        tag: "Fade",    seed: "haircut-07", size: "sm" },
  { label: "Straight Razor Shave", tag: "Shave",   seed: "haircut-08", size: "lg" },
  { label: "Side Part",            tag: "Classic", seed: "haircut-09", size: "sm" },
  { label: "Slick Back",           tag: "Style",   seed: "haircut-10", size: "sm" },
  { label: "High Top Fade",        tag: "Fade",    seed: "haircut-11", size: "sm" },
  { label: "Beard Sculpt",         tag: "Beard",   seed: "haircut-12", size: "lg" },
];

const tags = ["All", "Fade", "Classic", "Beard", "Combo", "Shave", "Style", "Crop"];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-[var(--bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">Our Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--tx)] leading-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
            The <span className="italic text-[#c9a84c]">Gallery</span>
          </h1>
          <p className="mt-5 text-[var(--dim)] text-base max-w-xl">
            A showcase of our finest work. Every style tells a story.
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="bg-[var(--bg)] border-b border-[var(--bdx)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <button
              key={tag}
              className={`px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase border transition-colors duration-200 ${
                i === 0
                  ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/5"
                  : "border-[var(--bd3)] text-[var(--dim)] hover:border-[#c9a84c]/50 hover:text-[#c9a84c]/70"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className={`relative group overflow-hidden border border-[var(--bd)] hover:border-[#c9a84c]/40 transition-all duration-300 break-inside-avoid ${item.size === "lg" ? "h-72" : "h-48"}`}
              >
                <Image
                  src={`https://picsum.photos/seed/${item.seed}/600/700?grayscale`}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/70 border border-[#c9a84c]/30 text-[#c9a84c] text-[8px] tracking-widest uppercase px-2 py-1">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs tracking-[0.2em] uppercase">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-alt)] border-t border-[var(--bdx)] text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">Like what you see?</p>
          <h2 className="text-3xl font-bold text-[var(--tx)] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Let Us Create Your <span className="text-[#c9a84c] italic">Look</span>
          </h2>
          <Link href="/booking" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors duration-300">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
