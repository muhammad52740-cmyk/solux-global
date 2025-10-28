"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

export default function TermsConditions() {
  const sections = [
    {
      title: "1. Services",
      content: [
        "Solux Global provides medical billing, coding, credentialing, revenue cycle management, virtual assistance, digital marketing, and related services to healthcare providers.",
        "Services are delivered under agreed contracts or service-level agreements (SLAs).",
        "We reserve the right to modify, suspend, or discontinue any service at our discretion.",
      ],
    },
    {
      title: "2. Use of Website",
      content: [
        "The website is intended for informational and business purposes only.",
        "You agree not to misuse this site for unlawful activities, data scraping, or distribution of harmful software.",
        "Unauthorized reproduction of website content is prohibited.",
      ],
    },
    {
      title: "3. Client Responsibilities",
      content: [
        "Provide correct and timely patient, insurance, and billing information.",
        "Maintain compliance with applicable laws, including HIPAA.",
        "Cooperate in resolving claim-related issues.",
      ],
    },
    {
      title: "4. Fees & Payments",
      content: [
        "Fees are agreed upon in writing before services begin.",
        "Payment terms, due dates, and methods will be outlined in the service contract.",
        "Late payments may result in suspension of services until the account is settled.",
      ],
    },
    {
      title: "5. Confidentiality & Compliance",
      content: [
        "Solux Global follows HIPAA regulations and ensures all patient data is kept confidential.",
        "Clients are also responsible for safeguarding access credentials and data shared with us.",
      ],
    },
    {
      title: "6. Limitation of Liability",
      content: [
        "While we strive for accuracy and timely submissions, Solux Global is not liable for delays, claim rejections, or losses caused by incomplete, incorrect, or delayed information provided by the client.",
        "We are not responsible for third-party actions such as insurance carriers or clearinghouses.",
      ],
    },
    {
      title: "7. Intellectual Property",
      content: [
        "All content, logos, designs, and materials on this website are owned by Solux Global.",
        "Clients may not use, copy, or distribute materials without prior written consent.",
      ],
    },
    {
      title: "8. Termination of Services",
      content: [
        "Either party may terminate services with written notice, subject to the terms outlined in the service agreement.",
        "Any outstanding payments must be cleared before termination becomes effective.",
      ],
    },
    {
      title: "9. Governing Law",
      content: [
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the State of Texas, USA (or update location as per your incorporation).",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 mt-16 text-center">
          <motion.div
            variants={slideInFromTop()}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Effective Date: [01/01/2026]
              <br />
              Welcome to Solux Global. By accessing or using our website and
              services, you agree to the following Terms & Conditions. Please
              read them carefully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
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
             Contact Information
          </h2>
          <p className="text-slate-600 mb-4">
            For questions regarding these Terms & Conditions, please contact us
            at:
          </p>
          <div className="space-y-2">
            <p className="text-slate-600">
              <span className="font-semibold">📧 Email:</span>{" "}
              info@soluxglobal.com
            </p>
            <p className="text-slate-600">
              <span className="font-semibold">📞 Phone:</span> (737) 787-2147
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
