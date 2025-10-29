"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Medical Billing & Coding",
    description:
      "Best practices, updates, and strategies for accurate claim submission and efficient billing.",
    image: "/images/blog/billing.jpg",
  },
  {
    title: "Revenue Cycle Management",
    description:
      "Insights to improve collections, streamline workflows, and reduce denials.",
    image: "/images/blog/rcm.jpg",
  },
  {
    title: "Healthcare Technology",
    description:
      "Explore EMR, telehealth, and practice management tools shaping modern healthcare.",
    image: "/images/blog/healthtech.jpg",
  },
  {
    title: "Practice Growth & Marketing",
    description:
      "Proven tips to attract new patients, retain existing ones, and grow your brand.",
    image: "/images/blog/marketing.jpg",
  },
  {
    title: "Compliance & Regulations",
    description:
      "Stay updated with HIPAA rules, payer policies, and state law changes affecting practices.",
    image: "/images/blog/compliance.jpg",
  },
];

export default function BlogCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Explore Topics That Matter
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Discover expert insights to help your healthcare practice stay
          compliant, efficient, and profitable.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 w-full max-w-sm"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="p-8 text-left">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Subtle bottom border animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
