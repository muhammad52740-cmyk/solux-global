"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  RefreshCcw,
  FileText,
  Building2,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

const credentialingPoints = [
  {
    title: "Provider Enrollment",
    description:
      "Quick and accurate enrollment with Medicare, Medicaid, and commercial payers.",
    icon: ClipboardCheck,
  },
  {
    title: "Re-Credentialing",
    description: "Stay updated and avoid interruptions in reimbursements.",
    icon: RefreshCcw,
  },
  {
    title: "CAQH Profile Management",
    description: "Complete setup, updates, and attestation for providers.",
    icon: FileText,
  },
  {
    title: "Insurance Panel Applications",
    description: "Apply and gain approval across multiple networks.",
    icon: Building2,
  },
  {
    title: "State Licensing Assistance",
    description: "Support with new applications and renewals.",
    icon: BadgeCheck,
  },
  {
    title: "Ongoing Credentialing Maintenance",
    description: "Ensure compliance and avoid claim denials.",
    icon: ShieldCheck,
  },
];

export default function CredentialingIncluded() {
  return (
    <section
      id="credentialing-included"
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
          Our <span className="text-black">Credentialing Services</span> Include
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14"
        >
          Solux Global ensures your practice remains compliant, connected, and
          financially optimized with seamless end-to-end credentialing
          management.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentialingPoints.map(({ title, description, icon: Icon }, i) => (
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
