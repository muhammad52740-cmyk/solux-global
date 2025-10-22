"use client";

import Image from "next/image";
import { FileSpreadsheet, TrendingUp, ShieldCheck, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: FileSpreadsheet,
    color: "#01509B",
    title: "Accurate Medical Billing",
    description:
      "Ensure error-free claims with precise coding and real-time claim validation — leading to faster reimbursements and fewer denials.",
  },
  {
    icon: TrendingUp,
    color: "#F59E0B",
    title: "Optimized Revenue Growth",
    description:
      "Maximize your collections with advanced analytics, denial management, and end-to-end revenue cycle optimization.",
  },
  {
    icon: ShieldCheck,
    color: "#10B981",
    title: "HIPAA-Compliant Security",
    description:
      "Your data is protected with the highest standards of compliance and encryption — ensuring full patient confidentiality.",
  },
  {
    icon: Users2,
    color: "#E11D48",
    title: "Dedicated Expert Support",
    description:
      "Work with certified billing professionals who provide 24/7 assistance, dedicated account management, and performance transparency.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading with animated underline */}
        <div className="text-center mb-16 relative">
          <h2 className="relative inline-block text-5xl md:text-6xl font-bold text-slate-900">
            Why Choose Solux Global?
          </h2>

          <motion.div
            className="absolute left-1/2 -bottom-3 h-1 rounded-full"
            style={{
              backgroundColor: "#01509B",
              transform: "translateX(-50%)",
            }}
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Animated Feature Cards */}
          <motion.div
            className="space-y-6 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white rounded-xl p-7 shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
                >
                  <div className="flex gap-6 items-center">
                    <motion.div
                      className="flex items-center justify-center w-20 h-20 rounded-xl border border-slate-200"
                      style={{
                        backgroundColor: `${feature.color}15`,
                      }}
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Icon
                        className="h-10 w-10"
                        style={{ color: feature.color }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Static Image same height as left section */}
          <motion.div
            className="relative rounded-3xl overflow-hidden flex items-center justify-center h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/Screenshot 2025-10-22 013008.png"
              alt="Medical billing professionals at work"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
