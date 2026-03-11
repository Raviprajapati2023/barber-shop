"use client";

import { useState } from "react";

const services = [
  "Classic Haircut — ₹150",
  "Skin Fade — ₹180",
  "Scissor Cut — ₹200",
  "Hot Towel Shave — ₹200",
  "Beard Trim & Shape — ₹120",
  "Cut & Beard Combo — ₹250",
  "Cut & Shave Combo — ₹350",
  "VIP Grooming Package — ₹500",
  "Scalp Treatment — ₹300",
  "Eyebrow Shaping — ₹50",
];

const barbers = ["No preference", "Marcus Johnson", "Diego Lopez", "Alex Kim", "Rafael Pierce"];

const timeSlots = [
  "9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
  "12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
  "3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM",
];

export default function BookingPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", barber:"", date:"", time:"", notes:"" });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 border border-[#c9a84c] flex items-center justify-center mx-auto mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L19 7" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="h-px w-16 bg-[#c9a84c] mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-[var(--tx)] mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Appointment <span className="italic text-[#c9a84c]">Confirmed</span>
          </h2>
          <p className="text-[var(--dim)] text-sm mb-2">
            Thank you, <span className="text-[var(--tx)]">{form.name}</span>.
          </p>
          <p className="text-[var(--dim)] text-sm mb-8">
            Confirmation sent to <span className="text-[var(--tx)]">{form.email}</span>.
          </p>
          <div className="border border-[var(--bd)] p-6 text-left mb-8 space-y-3">
            {[["Service", form.service], ["Barber", form.barber], ["Date", form.date], ["Time", form.time]].map(([l, v]) => (
              <div key={l} className="flex justify-between text-sm">
                <span className="text-[var(--dim)]">{l}</span>
                <span className="text-[var(--tx)]">{v}</span>
              </div>
            ))}
          </div>
          <button onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",service:"",barber:"",date:"",time:"",notes:"" }); setStep(1); }}
            className="text-[#c9a84c] text-[11px] tracking-[0.3em] uppercase border-b border-[#c9a84c]/30 pb-0.5 hover:border-[#c9a84c] transition-colors">
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-36 pb-16 bg-[var(--bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">Reserve Your Chair</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--tx)] leading-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Book an <span className="italic text-[#c9a84c]">Appointment</span>
          </h1>
          <p className="mt-5 text-[var(--dim)] text-base max-w-xl">
            Fill in the form below and we&apos;ll confirm your slot within the hour.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Steps */}
            <div className="flex gap-0 mb-10">
              {["Your Details", "Service & Barber", "Date & Time"].map((label, i) => (
                <div key={label} className={`flex-1 border-b-2 pb-3 text-[10px] tracking-[0.2em] uppercase transition-colors ${step === i+1 ? "border-[#c9a84c] text-[#c9a84c]" : step > i+1 ? "border-[#c9a84c]/30 text-[var(--dim)]" : "border-[var(--bd)] text-[var(--dim)] opacity-40"}`}>
                  <span className="mr-2 font-bold">0{i+1}</span>
                  <span className="hidden sm:inline">{label}</span>
                </div>
              ))}
            </div>

            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              {step === 1 && (
                <div className="space-y-6">
                  <Field label="Full Name" name="name" type="text" value={form.name} onChange={set} placeholder="Rahul Sharma" required />
                  <Field label="Email Address" name="email" type="email" value={form.email} onChange={set} placeholder="rahul@example.com" required />
                  <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={set} placeholder="+91 98765 43210" required />
                  <div className="pt-2">
                    <button type="button" onClick={() => form.name && form.email && form.phone && setStep(2)}
                      className="px-8 py-3.5 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors">
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <SelectField label="Service" name="service" value={form.service} onChange={set} options={services} required />
                  <SelectField label="Preferred Barber" name="barber" value={form.barber} onChange={set} options={barbers} required />
                  <div className="flex gap-4 pt-2">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-3.5 border border-[var(--bd3)] text-[var(--dim)] text-[11px] tracking-[0.3em] uppercase hover:border-[var(--dim)] transition-colors">Back</button>
                    <button type="button" onClick={() => form.service && form.barber && setStep(3)} className="px-8 py-3.5 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors">Continue</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <Field label="Preferred Date" name="date" type="date" value={form.date} onChange={set} required />
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] mb-3">Preferred Time</label>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                      {timeSlots.map(slot => (
                        <button key={slot} type="button" onClick={() => setForm(p => ({ ...p, time: slot }))}
                          className={`py-2 text-[10px] tracking-wide border transition-colors duration-150 ${form.time === slot ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/5" : "border-[var(--bd)] text-[var(--dim)] hover:border-[var(--bd3)]"}`}>
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] mb-3">Additional Notes (optional)</label>
                    <textarea name="notes" value={form.notes} onChange={set} rows={3}
                      placeholder="Any specific requests or style references..."
                      className="w-full bg-[var(--inp)] border border-[var(--bd2)] focus:border-[#c9a84c]/50 text-[var(--tx)] text-sm px-4 py-3 placeholder-[var(--dim)] transition-colors resize-none" />
                  </div>
                  <div className="flex gap-4 pt-2">
                    <button type="button" onClick={() => setStep(2)} className="px-6 py-3.5 border border-[var(--bd3)] text-[var(--dim)] text-[11px] tracking-[0.3em] uppercase hover:border-[var(--dim)] transition-colors">Back</button>
                    <button type="submit" className="px-8 py-3.5 bg-[#c9a84c] text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#e0bb6a] transition-colors">Confirm Booking</button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="border border-[var(--bd)] p-6">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5">Opening Hours</h3>
              <ul className="space-y-3 text-sm">
                {[["Monday – Friday","9:00am – 8:00pm"],["Saturday","8:00am – 6:00pm"],["Sunday","10:00am – 4:00pm"]].map(([day, hrs]) => (
                  <li key={day} className="flex justify-between">
                    <span className="text-[var(--dim)]">{day}</span>
                    <span className="text-[var(--tx)]">{hrs}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[var(--bd)] p-6">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] mb-5">Our Location</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">
                123 Main Street<br />New York, NY 10001<br /><br />
                <a href="tel:+12125550100" className="text-[var(--tx)] hover:text-[#c9a84c] transition-colors">(212) 555-0100</a>
              </p>
            </div>
            <div className="border-l-2 border-[#c9a84c]/30 pl-4">
              <p className="text-[var(--dim)] text-xs leading-relaxed">
                Walk-ins are welcome, but appointments are guaranteed their time slot. Book ahead to avoid waiting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type, value, onChange, placeholder, required }: {
  label: string; name: string; type: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] mb-3">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required}
        className="w-full bg-[var(--inp)] border border-[var(--bd2)] focus:border-[#c9a84c]/50 text-[var(--tx)] text-sm px-4 py-3 placeholder-[var(--dim)] transition-colors" />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, required }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[]; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-[var(--dim)] mb-3">{label}</label>
      <select name={name} value={value} onChange={onChange} required={required}
        className="w-full bg-[var(--inp)] border border-[var(--bd2)] focus:border-[#c9a84c]/50 text-[var(--tx)] text-sm px-4 py-3 transition-colors appearance-none cursor-pointer">
        <option value="">Select {label}</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}
