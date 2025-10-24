"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Services", "Industries", "Testimonials", "FAQ"] as const;
  
  type NavItem = typeof navItems[number];

  const getHref = (item: NavItem): string => {
    if (item === "FAQ") return "/faq";
    if (item === "Services") return "/service";
    if (item === "About") return "/about-page";
    return `#${item.toLowerCase()}`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-slate-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* === LOGO === */}
        <Link
          href="/"
          aria-label="Solux Global Home"
          className="flex items-center gap-3"
        >
          <div
            className={`size-12 rounded-md transition-colors duration-300 bg-[#0C509B]`}
            aria-hidden
          />
          <span
            className={`font-semibold text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Solux Global
          </span>
        </Link>

        {/* === NAVIGATION === */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={getHref(item)}
              className={`text-base font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-slate-700 hover:text-[#0C509B]"
                  : "text-white hover:text-[#e2e8f0]"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* === BUTTONS === */}
        <div className="hidden md:flex items-center gap-4">
          {/* CONTACT BUTTON */}
          <button
            className={`relative overflow-hidden px-7 py-1 text-lg font-semibold rounded-md transition-all duration-300 border-2 border-[#0C509B] group ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Contact
            </span>
            <span
              className="absolute inset-0 bg-[#0C509B] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-md"
              style={{ transformOrigin: "left" }}
            />
          </button>

          {/* GET DEMO BUTTON */}
          <Button
            className="px-7 py-3 text-lg font-semibold rounded-md transition-all duration-300 bg-[#0C509B] text-white hover:bg-[#09407E]"
            asChild
          >
            <Link href="/audit">Get a Demo</Link>
          </Button>
        </div>

        {/* === MOBILE BUTTON === */}
        <div className="md:hidden">
          <Button
            size="sm"
            className="transition-colors duration-300 bg-[#0C509B] text-white hover:bg-[#09407E]"
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
