"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart3,
  FileSearch,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const auditPoints = [
  {
    title: "Comprehensive Workflow Review",
    description:
      "In-depth evaluation of your billing and coding operations to uncover hidden inefficiencies.",
    icon: FileSearch,
  },
  {
    title: "Revenue Leakage Identification",
    description:
      "Pinpoint lost income opportunities and unpaid claims affecting your bottom line.",
    icon: DollarSign,
  },
  {
    title: "Denial Management Evaluation",
    description:
      "Assess your denial patterns and provide actionable fixes for faster reimbursements.",
    icon: BarChart3,
  },
  {
    title: "Cash Flow Optimization",
    description:
      "Tailored recommendations to improve cash flow and overall financial performance.",
    icon: TrendingUp,
  },
  {
    title: "Transparent Action Plan",
    description:
      "Receive a clear, step-by-step report with measurable outcomes and next steps.",
    icon: CheckCircle,
  },
];

export default function WhatIncluded() {
  return (
    <section
      id="why-audit"
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* Background Glow (very subtle) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0C509B20] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0C509B15] rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#0C509B] mb-6 font-poppins"
        >
          What’s Included in Your <span className="text-black">Free Audit</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14"
        >
          Gain full transparency and actionable strategies to maximize your
          revenue and optimize your medical billing process.
        </motion.p>

        {/* Animated Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {auditPoints.map(({ title, description, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full p-8 rounded-2xl bg-white border border-[#0C509B30] hover:border-[#0C509B] hover:shadow-[0_8px_30px_#0C509B25] transition-all duration-500">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0C509B15] group-hover:bg-[#0C509B] transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#0C509B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0C509B] font-poppins">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
