"use client";

import { motion } from "framer-motion";
import React from "react";
import { Shield } from "lucide-react";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      ease: "easeOut",
      damping: 10,
      stiffness: 100
    },
  },
} as const;

export default function SoluxDifference() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
        

          {/* Heading */}
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            The <span className="text-blue-600">Solux Global</span> Difference
          </h2>

          {/* Content */}
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Unlike traditional billing companies, Solux Global provides more
            than just claim submissions. We act as a strategic partner, helping
            you identify revenue leakages, reduce denials, and achieve faster
            reimbursements. With a dedicated team of billing experts, certified
            coders, and technology specialists, we ensure that your practice
            thrives in today’s competitive healthcare environment.
          </p>

          {/* Subtle Divider */}
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
