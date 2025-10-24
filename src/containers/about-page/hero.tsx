"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import React from "react";

function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 mt-16 text-center">
        <motion.div
          variants={slideInFromTop()}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Empowering Healthcare Practices with Reliable Medical Billing
            Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Solux Global is dedicated to helping healthcare providers optimize
            their revenue cycle with accuracy and efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
