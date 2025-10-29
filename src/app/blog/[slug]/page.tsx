"use client";

import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { slideInFromTop } from "@/utils/motion";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="bg-white text-slate-900">
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <Image
            src={post.image || "/images/blog/default.jpg"}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={slideInFromTop()}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-snug">
              {post.title}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mb-3">
              {post.category} · {post.date}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- POST CONTENT ---------- */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Author Info Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-start gap-4 mb-10">
          <Image
            src="/images/author.jpg"
            alt="Author"
            width={60}
            height={60}
            className="rounded-full border border-gray-200 w-16 h-16 object-cover"
          />
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-slate-900 text-lg">
              Solux Global Team
            </h4>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </div>
        </div>

        {/* Blog Content */}
        <article className="prose prose-slate sm:prose-lg max-w-none leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Divider */}
        <div className="my-16 border-t border-gray-200"></div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-slate-900">
            Want More Insights?
          </h3>
          <p className="text-gray-600 mb-6 text-base sm:text-lg max-w-lg mx-auto">
            Explore more articles from Solux Global to help grow your practice
            and improve efficiency.
          </p>
          <a
            href="/blog"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Back to Blog
          </a>
        </div>
      </section>
    </main>
  );
}
