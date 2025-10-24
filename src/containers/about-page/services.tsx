"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  HeartPulse,
} from "lucide-react";

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

// Core values data
const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical standards in every interaction.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering high-quality billing and coding services with precision and reliability.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging advanced technology to streamline and enhance revenue cycle management.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We see ourselves as an extension of your practice, not just a vendor.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centric",
    description:
      "Every service we provide is ultimately focused on supporting better patient care.",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function AboutService() {
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
              Our Core Values
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that guide our work, define our culture, and ensure
              exceptional results for our clients.
            </p>
          </motion.div>

          {/* Cards Row */}
          <motion.div
            variants={containerVariants}
            className="flex justify-between gap-[5px]"
          >
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${value.bgColor} flex flex-col items-center justify-start w-[19.1%] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}
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
