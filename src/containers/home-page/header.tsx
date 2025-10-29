"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile icon

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Services", "Blog", "Pricing", "FAQ"] as const;
  type NavItem = (typeof navItems)[number];

  const getHref = (item: NavItem): string => {
    if (item === "FAQ") return "/faq";
    if (item === "Services") return "/service";
    if (item === "About") return "/about-page";
    if (item === "Blog") return "/blog";
    if (item === "Pricing") return "/pricing";
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-0 flex items-center justify-between">
        {/* === LOGO ONLY === */}
        <Link
          href="/"
          aria-label="Solux Global Home"
          className="flex items-center"
        >
          <Image
            src="/logo/solux_logo_transparent.png"
            alt="Solux Global Logo"
            width={100}
            height={10}
            className="object-contain"
            priority
          />
        </Link>

        {/* === DESKTOP NAVIGATION === */}
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

        {/* === DESKTOP BUTTONS === */}
        <div className="hidden md:flex items-center gap-4">
          {/* CONTACT BUTTON */}
          <Link
            href="/contact-us"
            className={`relative overflow-hidden px-7 py-2 text-lg font-semibold rounded-md transition-all duration-300 border-2 border-[#0C509B] group ${
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
          </Link>

          {/* GET DEMO BUTTON */}
          <Button
            className="px-7 py-3 text-lg font-semibold rounded-md transition-all duration-300 bg-[#0C509B] text-white hover:bg-[#09407E]"
            asChild
          >
            <Link href="/audit">Get a Demo</Link>
          </Button>
        </div>

        {/* === MOBILE MENU BUTTON === */}
        <div className="md:hidden flex items-center gap-3">
          <Button
            size="sm"
            className="transition-colors duration-300 bg-[#0C509B] text-white hover:bg-[#09407E]"
            asChild
          >
            <Link href="/audit">Demo</Link>
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className={`p-2 rounded-md ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* === MOBILE DROPDOWN === */}
      {isMenuOpen && (
        <div
          className={`md:hidden bg-white border-t border-slate-200 shadow-lg transition-all duration-300 ${
            isScrolled ? "text-slate-900" : "text-slate-900"
          }`}
        >
          <nav className="flex flex-col space-y-4 px-6 py-5 text-base font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#0C509B] transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#0C509B] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
