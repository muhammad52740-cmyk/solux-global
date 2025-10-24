"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Search,
  MousePointerClick,
  Share2,
  FileText,
  Monitor,
  Star,
  Mail,
} from "lucide-react";

const digitalMarketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank higher on Google with targeted healthcare keywords and optimized content strategies.",
    icon: Search,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Run effective Google Ads and social media campaigns that attract qualified healthcare leads.",
    icon: MousePointerClick,
  },
  {
    title: "Social Media Management",
    description:
      "Build engagement and trust on platforms like Facebook, Instagram, and LinkedIn.",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    description:
      "Publish valuable blogs, articles, and patient education content to establish credibility and authority.",
    icon: FileText,
  },
  {
    title: "Website Design & Optimization",
    description:
      "Create mobile-friendly, SEO-optimized websites for improved user experience and visibility.",
    icon: Monitor,
  },
  {
    title: "Reputation Management",
    description:
      "Monitor, manage, and enhance your online reviews and patient feedback across all platforms.",
    icon: Star,
  },
  {
    title: "Email Marketing Campaigns",
    description:
      "Engage patients through newsletters, reminders, and promotional offers to build loyalty.",
    icon: Mail,
  },
];

export default function DigitalMarketingIncluded() {
  return (
    <section
      id="digital-marketing-services"
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0C509B20] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0C509B15] rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#0C509B] mb-6 font-poppins"
        >
          Our <span className="text-black">Digital Marketing Services</span>{" "}
          Include
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14"
        >
          Solux Global’s digital marketing services help healthcare providers
          strengthen their online presence, attract more patients, and grow
          their practice through proven strategies across SEO, PPC, social
          media, and more.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalMarketingServices.map(
            ({ title, description, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative h-full p-8 rounded-2xl bg-white border border-[#0C509B30] hover:border-[#0C509B] hover:shadow-[0_8px_30px_#0C509B25] transition-all duration-500">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#0C509B15] group-hover:bg-[#0C509B] transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#0C509B] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0C509B] font-poppins">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
