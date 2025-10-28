"use client";

import { motion } from "framer-motion";
import React from "react";
import { DollarSign, Scale, Users, ShieldCheck } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Pricing values data
const pricingValues = [
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description:
      "We offer competitive rates without compromising on service quality, ensuring affordability for every healthcare provider.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Scale,
    title: "Transparent Billing",
    description:
      "No hidden fees or surprises—our clear and straightforward pricing keeps you fully informed and in control.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Customizable Plans",
    description:
      "Choose from flexible plans designed to match your practice size, specialty, and specific operational needs.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description:
      "Our dedicated team ensures smooth onboarding, quick responses, and ongoing assistance whenever you need it.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function PricingPhilosophy() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-6xl font-extrabold text-slate-900 mb-3">
              Why Choose Our Pricing
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Designed with your budget and growth in mind, our pricing model
              ensures you receive premium medical billing services at fair,
              transparent, and flexible rates.
            </p>
          </motion.div>

          {/* Cards Row */}
          <motion.div
            variants={containerVariants}
            className="flex justify-between gap-[5px]"
          >
            {pricingValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${value.bgColor} flex flex-col items-center justify-start w-[24%] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex justify-center mb-6">
                    <IconComponent className={`w-14 h-14 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-base">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
