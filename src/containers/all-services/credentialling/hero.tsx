"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import React from "react";

function CredentiallingHero() {
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
            Simplify Provider Credentialing & Payer Enrollment with{" "}
            <span className="text-[#0C509B]">Solux Global</span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            At Solux Global, we understand that credentialing is the backbone of
            a successful medical practice. Delays or errors in the credentialing
            process can lead to denied claims, loss of revenue, and compliance
            issues. That’s why our credentialing specialists provide
            comprehensive, hassle-free services to ensure your practice gets
            approved with insurance networks quickly and accurately.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From initial enrollment to ongoing maintenance, we handle every
            step—so you can focus on patient care while we take care of the
            paperwork.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CredentiallingHero;
