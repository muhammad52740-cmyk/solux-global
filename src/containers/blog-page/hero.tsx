"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import React from "react";

function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 mt-16 text-center">
        <motion.div
          variants={slideInFromTop()}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Stay Informed with the Latest Trends in Medical Billing, Healthcare,
            and Practice Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Solux Global, we believe knowledge empowers growth. Our blog
            provides insights, tips, and updates on the latest in medical
            billing, coding, healthcare technology, revenue cycle management,
            and digital marketing.
            <br />
            
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogHero;
