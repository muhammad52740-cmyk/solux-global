"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="py-10 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          {/* Left Content - 3/4 width */}
          <motion.div
            className="space-y-8 md:col-span-3"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                Customer{" "}
                <span className="text-foreground font-bold">Testimonials</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground italic">
                You shouldn&apos;t only{" "}
                <span className="font-bold text-foreground">believe</span> our
                words — see what our{" "}
                <span className="font-bold text-foreground">clients</span> say.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-justify">
                Solux Global is a reliable billing company with utmost
                responsive staff and it&apos;s always been a pleasure to work
                with them. Previously, when billing functions were performed
                in-house, we were losing thousands of dollars every month due to
                incompetent billing services and our cost of collections was far
                too high. Since partnering with Solux Global, we&apos;ve seen a
                dramatic improvement in our revenue cycle and significantly
                reduced our operational costs.
              </p>
            </div>

            <motion.button
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Read More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Image - 1/4 width */}
          <motion.div
            className="relative md:col-span-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-xs">
              <Image
                src="/professional-female-healthcare-executive-business.png"
                alt="Healthcare professional testimonial"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
