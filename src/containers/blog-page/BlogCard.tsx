"use client";
import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <article className="p-6 border rounded-2xl hover:shadow-lg transition bg-white">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600">{post.excerpt}</p>
        <p className="text-sm text-gray-500 mt-2">{post.date}</p>
      </Link>
    </article>
  );
}
