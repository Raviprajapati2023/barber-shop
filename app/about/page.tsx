import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ShopName from "@/components/ui/ShopName";

export const metadata: Metadata = {
  title: "About Us | The Sharp Blade",
  description: "The story behind India's premier barbershop.",
};

const values = [
  {
    title: "Craftsmanship",
    desc: "Every cut is a work of art. We take pride in the details that others overlook.",
  },
  {
    title: "Respect",
    desc: "Your time, your comfort, your vision — all treated with the utmost care.",
  },
  {
    title: "Excellence",
    desc: "We don't settle for good enough. Every client leaves at their absolute best.",
  },
  {
    title: "Community",
    desc: "More than a barbershop — we're a gathering place for gentlemen of character.",
  },
];

const team = [
  {
    initials: "MJ",
    name: "Marcus Johnson",
    title: "Master Barber & Founder",
    bio: "Marcus started The Sharp Blade after 15 years of refining his craft. His philosophy: every client deserves a master barber's touch.",
    imgSeed: "barber-portrait-1",
    specialties: ["Classic Fades", "Pompadours", "Hot Shaves"],
  },
  {
    initials: "DL",
    name: "Diego Lopez",
    title: "Senior Barber",
    bio: "Diego is renowned for beard sculpting and geometric designs that push the boundaries of traditional barbering.",
    imgSeed: "barber-portrait-2",
    specialties: ["Beard Sculpting", "Design Cuts", "Skin Fades"],
  },
  {
    initials: "AK",
    name: "Alex Kim",
    title: "Style Specialist",
    bio: "Alex specializes in modern textures and fades. Trained in the latest techniques to keep you ahead of every trend.",
    imgSeed: "barber-portrait-3",
    specialties: ["Textured Crops", "Modern Fades", "Color Work"],
  },
  {
    initials: "RP",
    name: "Rafael Pierce",
    title: "Grooming Expert",
    bio: "Rafael's background in skincare and traditional barbering makes him the ultimate grooming specialist.",
    imgSeed: "barber-portrait-4",
    specialties: ["Scalp Treatments", "Skin Shaves", "Hair Treatments"],
  },
];

const milestones = [
  { year: "2009", event: "The Sharp Blade opens its doors" },
  { year: "2012", event: "Named Best Barbershop by Style Weekly" },
  { year: "2015", event: "Expanded to second chair, brought on Diego Lopez" },
  { year: "2018", event: "Launched the VIP Grooming Package" },
  { year: "2021", event: "Awarded Top 10 Barbershops in India" },
  { year: "2024", event: "Celebrating 15 years of precision grooming" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-[var(--bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005]/50 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">
              Our Story
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-[var(--tx)] leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            About{" "}
            <span className="italic text-[#c9a84c]"><ShopName /></span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeader
              eyebrow="Est. 2009"
              title="A Legacy of"
              titleItalic="Excellence"
            />
            <div className="space-y-5 text-[var(--dim)] text-sm leading-relaxed">
              <p>
                <ShopName /> was born out of a simple belief: that every
                man deserves to feel his best. Founded in 2009, we set out to
                create a space where traditional barbering craft meets modern
                sophistication.
              </p>
              <p>
                Our shop is more than a place to get a haircut. It&apos;s a
                ritual. From the moment you settle into the chair, you&apos;re in
                the hands of a craftsman who cares deeply about every
                detail — the angle of the blade, the temperature of the
                towel, the precision of the fade.
              </p>
              <p>
                Over 15 years, we&apos;ve served over 12,000 clients, earned 50+
                industry awards, and built a team of master barbers who
                share our relentless commitment to quality.
              </p>
            </div>
          </div>

          {/* Shop Image */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden border border-[var(--bd2)]">
            <Image
              src="https://picsum.photos/seed/barbershop-interior/800/600?grayscale"
              alt="The Sharp Blade barbershop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#c9a84c]/40" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#c9a84c]/40" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#c9a84c]/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#c9a84c]/40" />
            {/* Est. badge */}
            <div className="absolute bottom-8 left-8 bg-black/70 border border-[#c9a84c]/30 px-4 py-3 backdrop-blur-sm">
              <div
                className="text-2xl font-bold text-[#c9a84c]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                TSB
              </div>
              <div className="text-white/60 text-[10px] tracking-[0.3em] uppercase">
                Est. 2009
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--bg-alt)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our"
            titleItalic="Values"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--gp)]">
            {values.map((v, i) => (
              <div key={v.title} className="bg-[var(--bg-alt)] p-8 hover:bg-[var(--sf2)] transition-colors">
                <div
                  className="text-3xl font-bold text-[#c9a84c]/20 mb-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-lg font-semibold text-[var(--tx)] mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-[var(--dim)] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="Our Journey"
            title="15 Years of"
            titleItalic="History"
            centered
          />
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border border-[#c9a84c]/40 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/20 transition-all mt-1 shrink-0" />
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--bd2)] mt-2 mb-2" />
                  )}
                </div>
                <div className={`pb-8 ${i === milestones.length - 1 ? "pb-0" : ""}`}>
                  <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
                    {m.year}
                  </span>
                  <p className="text-[var(--dim)] text-sm mt-1">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[var(--bg-alt)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="The Team"
            title="Meet the"
            titleItalic="Craftsmen"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="border border-[var(--bd)] hover:border-[#c9a84c]/30 transition-colors duration-300 flex overflow-hidden group"
              >
                {/* Photo side */}
                <div className="relative w-28 shrink-0 overflow-hidden bg-[var(--sf)]">
                  <Image
                    src={`https://picsum.photos/seed/${member.imgSeed}/300/400?grayscale`}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                {/* Info */}
                <div className="p-6 flex-1">
                  <h3
                    className="text-base font-bold text-[var(--tx)] mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase mb-3">
                    {member.title}
                  </p>
                  <p className="text-[var(--dim)] text-xs leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] tracking-widest uppercase text-[var(--dim)] border border-[var(--bd3)] px-2.5 py-1 hover:border-[#c9a84c]/30 hover:text-[#c9a84c]/60 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg)] border-t border-[var(--bdx)] text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2
            className="text-3xl font-bold text-[var(--tx)] mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Come Meet Us <span className="text-[#c9a84c] italic">In Person</span>
          </h2>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors duration-300"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
