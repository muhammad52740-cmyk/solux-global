"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

export default function AboutTrustBar() {
  const stats = [
    {
      value: "98%",
      label: "Client Retention Rate",
    },
    {
      value: "30%+",
      label: "Revenue Growth",
    },
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "500+",
      label: "Healthcare Providers",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map(({ value, label }, index) => (
            <motion.div
              key={label}
              variants={slideInFromLeft(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl font-bold text-[#0C509B]"
              >
                {value}
              </div>
              <div
                className="text-sm md:text-base font-medium mt-2 text-slate-600"
              >
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}