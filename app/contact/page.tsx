"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-[var(--bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--tx)] leading-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Contact <span className="italic text-[#c9a84c]">Us</span>
          </h1>
          <p className="mt-5 text-[var(--dim)] text-base max-w-xl">
            Questions, feedback, or just want to say hello — we&apos;re always happy to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { title: "Visit Us",      lines: ["123 Main Street", "New York, NY 10001"] },
              { title: "Call Us",       lines: ["(212) 555-0100", "(212) 555-0101"] },
              { title: "Email Us",      lines: ["hello@sharpblade.com", "bookings@sharpblade.com"] },
              { title: "Opening Hours", lines: ["Mon–Fri: 9am – 8pm", "Sat: 8am – 6pm", "Sun: 10am – 4pm"] },
            ].map((item) => (
              <div key={item.title} className="border border-[var(--bd)] p-5 hover:border-[#c9a84c]/20 transition-colors duration-300">
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">{item.title}</h3>
                {item.lines.map(line => (
                  <p key={line} className="text-[var(--dim)] text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-[var(--bd)] p-12 flex flex-col items-center justify-center h-full text-center min-h-[400px]">
                <div className="w-14 h-14 border border-[#c9a84c] flex items-center justify-center mb-6">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11l5 5L18 6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--tx)] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Message <span className="italic text-[#c9a84c]">Sent</span>
                </h3>
                <p className="text-[var(--dim)] text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[["Full Name","name","text","John Smith"],["Email Address","email","email","john@example.com"]].map(([label,name,type,ph]) => (
                    <div key={name}>
                      <label className="block text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] mb-3">{label}</label>
                      <input type={type} name={name} value={(form as Record<string,string>)[name]} onChange={set} placeholder={ph} required
                        className="w-full bg-[var(--inp)] border border-[var(--bd2)] focus:border-[#c9a84c]/50 text-[var(--tx)] text-sm px-4 py-3 placeholder-[var(--dim)] transition-colors" />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] mb-3">Subject</label>
                  <select name="subject" value={form.subject} onChange={set} required
                    className="w-full bg-[var(--inp)] border border-[var(--bd2)] focus:border-[#c9a84c]/50 text-[var(--tx)] text-sm px-4 py-3 transition-colors appearance-none cursor-pointer">
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="services">Services Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] mb-3">Message</label>
                  <textarea name="message" value={form.message} onChange={set} rows={6} placeholder="How can we help you?" required
                    className="w-full bg-[var(--inp)] border border-[var(--bd2)] focus:border-[#c9a84c]/50 text-[var(--tx)] text-sm px-4 py-3 placeholder-[var(--dim)] transition-colors resize-none" />
                </div>

                <button type="submit" className="px-10 py-4 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors duration-300">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[var(--bg-alt)] border-t border-[var(--bdx)]">
        <div className="h-52 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(var(--bd) 1px, transparent 1px), linear-gradient(90deg, var(--bd) 1px, transparent 1px)", backgroundSize: "40px 40px", backgroundColor: "var(--bg)" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center mx-auto mb-3">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="#c9a84c" strokeWidth="1.3">
                  <path d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z" />
                  <circle cx="9" cy="6" r="1.5" />
                </svg>
              </div>
              <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase">123 Main Street, New York NY</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
