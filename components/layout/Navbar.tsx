"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShop, splitShopName } from "@/lib/shop-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.5 10A6 6 0 016 2.5a6 6 0 100 11 6 6 0 007.5-3.5z" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const pathname = usePathname();
  const { name } = useShop();
  const { prefix, main } = splitShopName(name);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.add("theme-transitioning");
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    setTimeout(
      () => document.documentElement.classList.remove("theme-transitioning"),
      300,
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--bd)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none shrink-0">
          {prefix && (
            <span className="text-[10px] tracking-[0.35em] text-[#c9a84c] uppercase font-light">
              {prefix}
            </span>
          )}
          <span
            className="text-lg font-bold tracking-[0.2em] uppercase text-[#c9a84c]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {main}
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#c9a84c]"
                    : isScrolled
                      ? "text-[var(--dim)] hover:text-[var(--tx)]"
                      : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right: Book + Theme toggle */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/booking"
            className="px-6 py-2.5 border border-[#c9a84c] text-[#c9a84c] text-[11px] tracking-[0.25em] uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
          >
            Book Now
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            className={`w-9 h-9 border flex items-center justify-center transition-all duration-200 hover:border-[#c9a84c] hover:text-[#c9a84c] ${isScrolled ? "border-[var(--bd3)] text-[var(--dim)]" : "border-white/25 text-white/60"}`}
          >
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${isScrolled ? "bg-[var(--tx)]" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 ${isScrolled ? "bg-[var(--tx)]" : "bg-white"} ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-all duration-300 origin-center ${isScrolled ? "bg-[var(--tx)]" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[var(--bg-sm)] border-t border-[var(--bd)] px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-[11px] tracking-[0.25em] uppercase border-b border-[var(--bd)] ${
                pathname === link.href ? "text-[#c9a84c]" : "text-[var(--dim)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMobileOpen(false)}
            className="mt-4 py-3.5 border border-[#c9a84c] text-[#c9a84c] text-[11px] tracking-[0.25em] uppercase text-center hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
          >
            Book Now
          </Link>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 pt-4 mt-1 text-[11px] tracking-[0.25em] uppercase text-[var(--dim)] border-t border-[var(--bd)]"
          >
            {isLight ? <MoonIcon /> : <SunIcon />}
            {isLight ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
