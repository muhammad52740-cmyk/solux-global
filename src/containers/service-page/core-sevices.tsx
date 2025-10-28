"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const tabs = [
  {
    id: "medical-billing",
    title: "Medical Billing & Coding",
    description:
      "Streamline your billing workflow with accurate claim submissions, reduced denials, and faster reimbursements. We handle everything from CPT & ICD-10 coding to insurance claim management, ensuring your revenue cycle runs smoothly.",
    link: "/all-services/medical-billing",
  },
  {
    id: "drug-rehab",
    title: "Drug & Rehabilitation Billing",
    description:
      "Specialized billing solutions tailored for rehabilitation centers, behavioral health facilities, and addiction treatment providers. Our team ensures compliance with payer requirements while maximizing reimbursement rates.",
    link: "/all-services/drug-billing",
  },
  {
    id: "medical-scribing",
    title: "Medical Scribing",
    description:
      "Eliminate documentation stress with our professional scribing services. We capture patient encounters in real time, giving providers more time to focus on delivering quality care.",
    link: "/all-services/medical-scribbing",
  },
  {
    id: "credentialing",
    title: "Credentialing Services",
    description:
      "Get credentialed quickly with insurance networks and payers. Our experts handle the paperwork and follow-ups, ensuring your practice is enrolled and eligible for reimbursements without delays.",
    link: "/all-services/credentialling",
  },
  {
    id: "state-licensing",
    title: "State Licensing Assistance",
    description:
      "Expand your practice with confidence. We help healthcare providers meet state licensing requirements, keeping your operations fully compliant with regulatory standards.",
    link: "/all-services/credentialling",
  },
  {
    id: "ar-denial",
    title: "Accounts Receivable (AR) & Denial Management",
    description:
      "Recover lost revenue with our AR follow-up and denial management strategies. We identify recurring issues, resolve claim rejections, and improve your overall collection rates.",
    link: "/all-services/ar-management",
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant Services",
    description:
      "Delegate administrative tasks to our trained virtual assistants. From appointment scheduling to patient follow-ups, we ensure your operations run smoothly while saving you time and costs.",
    link: "/all-services/virtual-assistant",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing for Healthcare",
    description:
      "Grow your practice's online presence with our healthcare-focused digital marketing solutions, including SEO, PPC campaigns, and social media management. We help you reach more patients and build brand authority.",
    link: "/all-services/digital-marketing",
  },
];

export default function CoreServicesVerticalDialer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = (activeIndex - 1 + tabs.length) % tabs.length;
  const nextIndex = (activeIndex + 1) % tabs.length;

  const prev = tabs[prevIndex];
  const active = tabs[activeIndex];
  const next = tabs[nextIndex];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-[#F8FBFF] to-[#E8F0FF] overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0C509B] rounded-full blur-[150px]" />
      </div>

      {/* Section Heading */}
      <div className="relative text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our Core Services
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          At Solux Global, we provide a complete suite of medical billing and
          healthcare support services — designed to enhance efficiency,
          accuracy, and revenue for your practice.
        </p>
      </div>

      {/* Layout */}
      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Tabs */}
        <div className="flex flex-col items-start space-y-3">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveIndex(i)}
              className={`w-full text-left px-6 py-4 text-lg font-semibold rounded-lg border transition-all duration-300 ${
                i === activeIndex
                  ? "bg-[#0C509B] text-white border-[#0C509B]"
                  : "border-[#0C509B40] text-[#0C509B] hover:bg-[#0C509B10]"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Right Animated Cards */}
        <div className="relative h-[648px] flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="popLayout">
            {/* Previous Card */}
            <motion.div
              key={prev.id + "-prev"}
              initial={{ opacity: 0, y: -260, scale: 0.92, rotateX: 40 }}
              animate={{ opacity: 0.5, y: -190, scale: 0.92, rotateX: 40 }}
              exit={{ opacity: 0, y: -260 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute w-[95%] lg:w-[580px] bg-white border border-[#0C509B20] rounded-2xl shadow-md p-12 hidden lg:block"
            >
              <h3 className="text-2xl font-bold text-[#0C509B] mb-3">
                {prev.title}
              </h3>
              <p className="text-slate-600 text-lg line-clamp-3 mb-6">
                {prev.description}
              </p>
              <Link
                href={prev.link}
                className="text-[#0C509B] font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Active Card */}
            <motion.div
              key={active.id + "-active"}
              initial={{ opacity: 0, y: 150, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -150 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="z-10 w-[95%] lg:w-[620px] bg-white border border-[#0C509B30] rounded-2xl shadow-2xl p-14"
            >
              <h3 className="text-3xl font-bold text-[#0C509B] mb-4">
                {active.title}
              </h3>
              <p className="text-slate-700 text-xl leading-relaxed mb-8">
                {active.description}
              </p>
              <Link
                href={active.link}
                className="inline-block px-6 py-3 bg-[#0C509B] text-white text-lg font-medium rounded-lg hover:bg-[#093e7b] transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Next Card */}
            <motion.div
              key={next.id + "-next"}
              initial={{ opacity: 0, y: 260, scale: 0.9, rotateX: -40 }}
              animate={{ opacity: 0.5, y: 190, scale: 0.9, rotateX: -40 }}
              exit={{ opacity: 0, y: 260 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute w-[95%] lg:w-[580px] bg-white border border-[#0C509B20] rounded-2xl shadow-md p-12 hidden lg:block"
            >
              <h3 className="text-2xl font-bold text-[#0C509B] mb-3">
                {next.title}
              </h3>
              <p className="text-slate-600 text-lg line-clamp-3 mb-6">
                {next.description}
              </p>
              <Link
                href={next.link}
                className="text-[#0C509B] font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
