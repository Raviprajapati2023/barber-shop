"use client";

import Link from "next/link";
import { useShop, splitShopName } from "@/lib/shop-context";

export default function Footer() {
  const year = new Date().getFullYear();
  const { name } = useShop();
  const { prefix, main } = splitShopName(name);

  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--bd)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col leading-none mb-6">
              {prefix && (
                <span className="text-[10px] tracking-[0.35em] text-[#c9a84c] uppercase font-light">
                  {prefix}
                </span>
              )}
              <span
                className="text-2xl font-bold tracking-[0.2em] text-[var(--tx)] uppercase"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {main}
              </span>
            </div>
            <p className="text-[var(--dim)] text-sm leading-relaxed max-w-xs">
              Premium grooming services for the modern gentleman. Walk in with
              confidence, leave with style.
            </p>
            <div className="flex gap-3 mt-8">
              {[
                { label: "FB", href: "#" },
                { label: "IG", href: "#" },
                { label: "TW", href: "#" },
                { label: "YT", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 border border-[var(--bd3)] flex items-center justify-center text-[var(--dim)] text-[10px] tracking-wider hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["About Us", "/about"],
                ["Book Now", "/booking"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--dim)] hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] mb-6">
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm text-[var(--dim)]">
              <li>123 Main Street</li>
              <li>New York, NY 10001</li>
              <li className="pt-1">
                <a href="tel:+12125550100" className="hover:text-[#c9a84c] transition-colors">
                  (212) 555-0100
                </a>
              </li>
              <li>
                <a href="mailto:hello@sharpblade.com" className="hover:text-[#c9a84c] transition-colors">
                  hello@sharpblade.com
                </a>
              </li>
            </ul>
            <div className="mt-6 border-l-2 border-[#c9a84c]/30 pl-4">
              <p className="text-xs text-[var(--dim)] leading-relaxed">
                Mon–Fri: 9am – 8pm
                <br />
                Sat: 8am – 6pm
                <br />
                Sun: 10am – 4pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-[var(--bdx)] flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-[var(--dim)]">
          <p>&copy; {year} {name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
