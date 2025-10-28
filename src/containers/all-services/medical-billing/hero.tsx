"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import React from "react";

function MedicalBillingHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          variants={slideInFromTop()}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
            Professional Medical Billing Services Designed to{" "}
            <span className="text-[#0C509B]">Maximize Your Revenue</span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            At Solux Global, we specialize in providing end-to-end medical
            billing services for healthcare practices across the USA. Our expert
            team ensures accuracy, compliance, and efficiency at every stage of
            the revenue cycle, helping you reduce claim denials, accelerate
            reimbursements, and improve cash flow.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We take the complexity out of billing, allowing providers to focus
            on what matters most—patient care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MedicalBillingHero;
