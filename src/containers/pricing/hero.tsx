"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import React from "react";

function PricingHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 mt-16 text-center">
        <motion.div
          variants={slideInFromTop()}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Affordable & Transparent Pricing for Every Healthcare Practice
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At Solux Global, we believe that medical billing, coding, and
            digital solutions shouldn’t break the bank. That’s why we offer
            flexible and transparent pricing plans tailored to the unique needs
            of your healthcare practice. Whether you run a small clinic,
            mid-sized practice, or large healthcare facility, our pricing
            ensures you only pay for what you need— maximizing value and
            minimizing overhead costs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingHero;
