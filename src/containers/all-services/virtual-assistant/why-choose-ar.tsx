"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  BarChart3,
  UserCheck,
  Layers,
  ShieldCheck,
} from "lucide-react";

const virtualAssistantBenefits = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    description:
      "Eliminate the high costs of in-house staff with our affordable outsourcing model.",
  },
  {
    icon: BarChart3,
    title: "Increased Productivity",
    description: "Free up your team’s time to focus on patient care.",
  },
  {
    icon: UserCheck,
    title: "Trained Professionals",
    description:
      "Virtual assistants skilled in healthcare operations, HIPAA compliance, and EMR systems.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Add or reduce support as your practice grows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    description:
      "Patient data is always handled with strict compliance and security protocols.",
  },
];

export default function WhyChooseVirtualAssistance() {
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
            Why Choose{" "}
            <span className="text-black">Solux Global Virtual Assistants?</span>
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
            {virtualAssistantBenefits.map(
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
                src="/virtual-assistant-team.png"
                alt="Virtual assistants at work"
                className="rounded-2xl shadow-2xl border-4 border-[#0C509B30] object-cover w-full h-[85%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
