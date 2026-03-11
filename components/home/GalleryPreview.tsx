import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const galleryItems = [
  { label: "Classic Taper", seed: "haircut-taper", span: "md:col-span-2 md:row-span-2" },
  { label: "Clean Fade",    seed: "haircut-fade",  span: "" },
  { label: "Beard Sculpt",  seed: "beard-sculpt",  span: "" },
  { label: "Skin Fade",     seed: "skin-fade",     span: "" },
  { label: "Drop Fade",     seed: "drop-fade",     span: "" },
  { label: "VIP Look",      seed: "vip-groom",     span: "" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Our Work"
            title="The"
            titleItalic="Gallery"
            subtitle="Every style is a statement. Browse our portfolio of precision cuts."
          />
          <Link
            href="/gallery"
            className="shrink-0 text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] border-b border-[#c9a84c]/30 pb-0.5 hover:border-[#c9a84c] transition-colors self-start md:self-auto mb-16"
          >
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 h-auto md:h-[520px]">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`relative group overflow-hidden border border-[var(--bd)] hover:border-[#c9a84c]/40 transition-colors duration-300 ${item.span} min-h-[200px] md:min-h-0`}
            >
              <Image
                src={`https://picsum.photos/seed/${item.seed}/800/800?grayscale`}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-xs tracking-[0.25em] uppercase">{item.label}</span>
              </div>
              <div className="absolute top-4 left-4 text-white/30 text-xs tracking-widest font-mono">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
