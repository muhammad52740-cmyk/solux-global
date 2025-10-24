"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import React from "react";

function DrugRehabBillingHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          variants={slideInFromTop()}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
            Specialized Drug & Rehabilitation Billing Solutions for{" "}
            <span className="text-[#0C509B]">Maximum Revenue Recovery</span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            At Solux Global, we understand the unique challenges that drug
            treatment centers, rehabilitation facilities, and behavioral health
            providers face when it comes to medical billing and reimbursements.
            From navigating complex coding requirements to ensuring compliance
            with payer regulations, our dedicated billing experts help you
            overcome financial obstacles while you focus on patient recovery.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With years of industry expertise, we deliver accurate, compliant,
            and timely billing solutions designed to maximize reimbursements and
            reduce claim denials.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default DrugRehabBillingHero;
