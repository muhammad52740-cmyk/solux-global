"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-800 via-[#0C509B] to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-[#0C509B]/30 rounded-lg p-8 md:p-12 bg-slate-800/40 backdrop-blur-sm">
          {/* Left Content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Simplify Your Billing?
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Maximize your reimbursements, reduce errors, and scale your
              practice with Solux Global.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-end">
            <Button
              size="lg"
              className="bg-[#0C509B] hover:bg-[#0A447F] text-white font-semibold px-8 rounded-full transition-all duration-300 whitespace-nowrap"
              asChild
            >
              <Link href="/audit">Book Your Free Audit</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0C509B] text-white hover:bg-[#0C509B] hover:text-white font-semibold px-8 rounded-full transition-all duration-300 whitespace-nowrap bg-transparent"
              asChild
            >
              <Link href="/contact-us">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
