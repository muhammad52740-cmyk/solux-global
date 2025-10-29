"use client";

export default function SubscribeCTA() {
  return (
    <div className="bg-blue-50 p-8 rounded-2xl text-center mt-12">
      <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
      <p className="text-gray-600 mb-4">
        Subscribe to get the latest insights on medical billing and healthcare
        trends.
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 rounded-md mr-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Subscribe
      </button>
    </div>
  );
}
