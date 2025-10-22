"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import React from "react";

function AuditHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content moved slightly lower */}
      <div className="relative max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          variants={slideInFromTop()}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-poppins">
            Free Practice Audit
          </h1>
          <p className="text-2xl md:text-3xl text-[#0C509B] font-semibold mb-6 font-poppins">
            Unlock Your Practice&apos;s True Potential
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Solux Global, we believe every healthcare provider deserves full
            visibility into their revenue cycle. That&apos;s why we offer a{" "}
            <span className="font-semibold text-white">
              complimentary audit
            </span>{" "}
            of your current billing process.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AuditHero;
