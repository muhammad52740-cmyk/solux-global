"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    image: "/claims-processing-healtcare-documents.png",
    title: "Our Mission",
    content:
      "Our mission as a provider of IT services is to give our customers solutions that help them meet their business objectives in innovative and effective ways. Maintaining the highest levels of professionalism and honesty while using the most up-to-date tools and methods is a big part of our goal to provide top-notch service.",
  },
  {
    id: "vision",
    label: "Vision",
    image: "/images/vision.jpg",
    title: "Our Vision",
    content:
      "We envision a future where technology empowers every business to reach its full potential. Our goal is to be a trusted global partner, delivering cutting-edge digital solutions that transform the way companies operate and grow.",
  },
  {
    id: "story",
    label: "Story",
    image: "/images/story.jpg",
    title: "Our Story",
    content:
      "Founded with a passion for innovation, we’ve grown from a small startup into a leading IT solutions provider. Our story is driven by a relentless commitment to client success and continuous improvement.",
  },
];

export default function MissionStoryVisionTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="mission-story-vision-section" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-6xl font-extrabold text-slate-900 mb-3">
            About Us
          </h2>
        </div>
        {/* Tabs Section */}
        <div
          className="rounded-xl shadow-sm px-6 pt-6 pb-10"
          style={{ backgroundColor: "#F8F9FC" }}
        >
          {/* Tabs Header */}
          <div className="flex justify-center gap-10 border-b border-slate-200 pb-4 mb-10">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`pb-2 text-lg font-semibold border-b-2 transition-all duration-300 ${
                  activeTab === index
                    ? "border-cyan-600 text-cyan-600"
                    : "border-transparent text-slate-600 hover:text-cyan-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              {/* Left Image (smaller size) */}
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-64">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                  width={500}
                  height={256}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              {/* Right Content */}
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {tabs[activeTab].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
