"use client";
import ReactMarkdown from "react-markdown";

export default function PostLayout({ post }: any) {
  return (
    <article className="max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>

      <div className="prose prose-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
