import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const barbers = [
  { name: "Marcus Johnson", title: "Master Barber & Founder", experience: "15 yrs", specialty: "Classic cuts & fades", imgSeed: "man-barber-1" },
  { name: "Diego Lopez",    title: "Senior Barber",          experience: "10 yrs", specialty: "Beard sculpting & designs", imgSeed: "man-barber-2" },
  { name: "Alex Kim",       title: "Style Specialist",        experience: "7 yrs",  specialty: "Modern fades & textures", imgSeed: "man-barber-3" },
  { name: "Rafael Pierce",  title: "Grooming Expert",         experience: "8 yrs",  specialty: "Hot towel shaves & skincare", imgSeed: "man-barber-4" },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-sm)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="The Team"
          title="Meet Our"
          titleItalic="Barbers"
          subtitle="Passionate craftsmen who turn each visit into a masterclass in grooming."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="group border border-[var(--bd)] hover:border-[#c9a84c]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-[var(--sf)]">
                <Image
                  src={`https://picsum.photos/seed/${barber.imgSeed}/400/500?grayscale`}
                  alt={barber.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-black/60 border border-[#c9a84c]/40 px-2.5 py-1 backdrop-blur-sm">
                  <span className="text-[#c9a84c] text-[9px] tracking-widest uppercase">
                    {barber.experience}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-[var(--sf2)]">
                <h3
                  className="text-base font-semibold text-[var(--tx)] mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {barber.name}
                </h3>
                <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase mb-3">
                  {barber.title}
                </p>
                <p className="text-[var(--dim)] text-xs">{barber.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
