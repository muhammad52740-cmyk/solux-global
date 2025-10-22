"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyChooseSoluxAudit() {
  const points = [
    "100% free, no obligation.",
    "Tailored analysis for your specialty and practice size.",
    "Conducted by certified billing and coding professionals.",
    "Proven to help practices achieve up to 30% revenue growth within 90 days.",
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-[#F8FAFC] to-[#EFF6FF] py-20 md:py-28 overflow-hidden">
      {/* Subtle glow for luxury effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#0C509B15] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#0C509B10] rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#0C509B] mb-8 font-poppins"
        >
          Why Choose a <span className="text-black">Solux Global Audit?</span>
        </motion.h2>

        {/* Divider Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "120px", opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-1 mx-auto mb-10 rounded-full bg-[#0C509B]"
        />

        {/* Description List */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-left md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#0C509B20]"
            >
              <CheckCircle
                className="w-6 h-6 text-[#0C509B] mt-1 flex-shrink-0"
                strokeWidth={2.5}
              />
              <span>
                {i === 3 ? (
                  <>
                    Proven to help practices achieve{" "}
                    <span className="font-semibold text-[#0C509B]">
                      up to 30% revenue growth
                    </span>{" "}
                    within 90 days.
                  </>
                ) : (
                  point
                )}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
