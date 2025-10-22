"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section
      className="w-full py-20 px-4 text-white"
      style={{ backgroundColor: "#0A1A2F" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Ready to Simplify Your{" "}
          <span style={{ color: "#3BA9FF" }}>Billing?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 text-balance leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Maximize your reimbursements, reduce errors, and scale your practice
          with Solux Global.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.4 },
            },
          }}
          viewport={{ once: true }}
        >
          {/* Primary Button */}
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="px-8 py-3 font-semibold rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "#3BA9FF",
              color: "white",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#2291E3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#3BA9FF")
            }
          >
            Book Your Free Audit
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="px-8 py-3 font-semibold rounded-lg border-2 transition-all duration-300"
            style={{
              borderColor: "#3BA9FF",
              color: "#3BA9FF",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#3BA9FF";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#3BA9FF";
            }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
