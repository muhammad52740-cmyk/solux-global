"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  FileCheck2,
  PiggyBank,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description:
      "Our team is highly experienced in drug treatment and behavioral health billing.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description:
      "Rehab facilities partnering with us report 20–30% increases in collections.",
  },
  {
    icon: FileCheck2,
    title: "Error-Free Processing",
    description:
      "We minimize coding mistakes and maximize payer reimbursements.",
  },
  {
    icon: PiggyBank,
    title: "Cost-Effective Outsourcing",
    description:
      "Save thousands in overhead by eliminating in-house billing staff.",
  },
  {
    icon: BarChart3,
    title: "Full Transparency",
    description:
      "Access detailed reports to track claims, payments, and practice performance.",
  },
];

export default function RehabBillingBenefits() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C509B] font-poppins mb-4">
            Why Choose <span className="text-black">Solux Global</span> for
            Rehab Billing?
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Section - Benefits List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {benefits.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon className="w-8 h-8 text-[#0C509B]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[90%] md:w-[85%]">
              <img
                src="/rehab-billing-benefits.png"
                alt="Rehab billing benefits illustration"
                className="rounded-2xl shadow-2xl border-4 border-[#0C509B30] object-cover w-full h-[85%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
