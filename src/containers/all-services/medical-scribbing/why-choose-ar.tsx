"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  CheckCircle2,
  Settings,
  BarChart3,
} from "lucide-react";

const outsourcingBenefits = [
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description:
      "Practices partnering with us see revenue growth of up to 30% within the first 90 days.",
  },
  {
    icon: Clock,
    title: "Save Time & Costs",
    description: "Eliminate the overhead of in-house billing staff.",
  },
  {
    icon: CheckCircle2,
    title: "Fewer Errors, Faster Payments",
    description:
      "Advanced technology + expert coders = smoother reimbursements.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description:
      "Tailored strategies for solo practices, multi-specialty clinics, and large healthcare facilities.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Real-time analytics and performance tracking to keep you in control.",
  },
];

export default function WhyOutsourceScribbing() {
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
            Why Outsource Your Medical Billing to{" "}
            <span className="text-black">Solux Global?</span>
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
            {outsourcingBenefits.map(
              ({ icon: Icon, title, description }, idx) => (
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
              )
            )}
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
                src="/medical-billing-outsourcing.png"
                alt="Medical billing outsourcing illustration"
                className="rounded-2xl shadow-2xl border-4 border-[#0C509B30] object-cover w-full h-[85%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
