"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, phone number, email address, practice details, and contact forms submitted.",
        "Health & Billing Information: Only collected when required for medical billing, coding, and credentialing services.",
        "Technical Information: IP address, browser type, device information, and cookies for website analytics.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide medical billing, coding, and related services.",
        "To communicate with you regarding inquiries, updates, and service requests.",
        "To comply with HIPAA and other applicable healthcare privacy regulations.",
        "To improve our website experience and services.",
      ],
    },
    {
      title: "Data Protection & HIPAA Compliance",
      content: [
        "All electronic transmissions are encrypted to prevent unauthorized access.",
        "We strictly limit access to sensitive data only to authorized personnel.",
        "Staff undergo regular HIPAA training to ensure proper handling of information.",
        "We will never sell or share your information with third parties for marketing purposes.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "You may request access to your information.",
        "You may request corrections to your records.",
        "You may request limitations on the use of your information.",
      ],
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 mt-16 text-center">
          <motion.div
            variants={slideInFromTop()}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Solux Global, we are committed to safeguarding the privacy of
              your personal and medical information. This Privacy Policy
              explains how we collect, use, and protect your data when you
              interact with our website and services.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-slate-300 rounded-lg p-8 hover:border-cyan-400 transition-colors"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-slate-600 leading-relaxed"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border border-slate-300 rounded-lg p-8 mt-8 hover:border-cyan-400 transition-colors"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Questions or Concerns?
          </h2>
          <p className="text-slate-600 mb-4">
            For questions about this Privacy Policy, please contact us at:
          </p>
          <div className="space-y-2">
            <p className="text-slate-600">
              <span className="font-semibold">Email:</span> info@soluxglobal.com
            </p>
            <p className="text-slate-600">
              <span className="font-semibold">Phone:</span> (737) 787-2147
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
