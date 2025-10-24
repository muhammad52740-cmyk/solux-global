"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Search,
  RefreshCcw,
  PhoneCall,
  FileText,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const arServices = [
  {
    title: "Claim Denial Analysis & Resolution",
    description:
      "Identify root causes, correct errors, and resubmit claims for faster resolution.",
    icon: Search,
  },
  {
    title: "Aging AR Recovery",
    description:
      "Efficient follow-up on unpaid claims to recover lost revenue and improve cash flow.",
    icon: RefreshCcw,
  },
  {
    title: "Payer Follow-Up",
    description:
      "Persistent and professional communication with insurance companies to ensure timely payments.",
    icon: PhoneCall,
  },
  {
    title: "Appeals Management",
    description:
      "Strong, evidence-based appeals to overturn denied claims and secure rightful reimbursements.",
    icon: FileText,
  },
  {
    title: "Trend Reporting",
    description:
      "Analyze denial patterns and payer behaviors to prevent future issues.",
    icon: BarChart3,
  },
  {
    title: "Revenue Optimization",
    description:
      "Customized strategies designed to boost reimbursement rates and minimize leakage.",
    icon: TrendingUp,
  },
];

export default function ArSolutions() {
  return (
    <section
      id="ar-denial-services"
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle Background Glow */}
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
          Our <span className="text-black">AR & Denial Management</span>{" "}
          Services Include
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14"
        >
          Solux Global’s AR & Denial Management team focuses on identifying and
          resolving claim issues, accelerating reimbursements, and preventing
          future denials through data-driven insights and strategic follow-ups.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {arServices.map(({ title, description, icon: Icon }, i) => (
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
