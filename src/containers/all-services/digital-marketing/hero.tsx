"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import React from "react";

function DigitalMarketing() {
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
            Expand Your Reach & Grow Your Practice with{" "}
            <span className="text-[#0C509B]">
              Expert Healthcare Digital Marketing
            </span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            In today’s digital world, patients search online before choosing a
            healthcare provider. Having a strong online presence is no longer
            optional—it’s essential. At Solux Global, we specialize in digital
            marketing solutions for medical practices, designed to improve
            visibility, attract new patients, and strengthen patient loyalty.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our team of marketing professionals understands the unique needs of
            healthcare providers and delivers strategies that are
            HIPAA-compliant, ethical, and results-driven.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default DigitalMarketing;
