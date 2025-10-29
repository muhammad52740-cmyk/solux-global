"use client";

import { posts } from "@/data/posts";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BlogHero from "@/containers/blog-page/hero";
import CtaSection from "@/containers/home-page/cta-section";

export default function BlogPage() {
  return (
    <main className="bg-white">
      <BlogHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center leading-tight">
          Latest Insights & Resources
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed text-center">
          Stay informed with practical advice, strategies, and updates designed
          to help healthcare professionals streamline operations and grow their
          practices.
        </p>

        {/* Blog Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-items-center">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 w-full max-w-sm"
            >
              <Link href={`/blog/${post.slug}`}>
                {/* Header Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={post.image || "/images/blog/default.jpg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {post.category} · {post.date}
                  </p>
                </div>

                {/* Animated accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
