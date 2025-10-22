"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center h-[80vh]"
      style={{
        background:
          "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #000000 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left Side */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Two-line heading */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight max-w-2xl">
              Your Trusted Partner for Seamless{" "}
              <span style={{ color: "#0C509B" }}>
                Medical Billing & Coding in the USA
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
              At Solux Global, we help healthcare providers maximize revenue,
              reduce denials, and streamline billing operations. From small
              practices to large facilities, we deliver tailored billing and
              coding solutions designed to boost your bottom line.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <Button
                size="lg"
                className="text-white font-semibold"
                style={{
                  backgroundColor: "#0C509B",
                }}
              >
                Claim Your Free Audit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-900 hover:text-white bg-transparent"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="hidden md:flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/vecteezy_a-female-doctor-in-a-white-coat-holding-a-tablet_56827482.PNG"
              alt="Medical professional using billing software"
              className="w-[110%] max-w-none object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
