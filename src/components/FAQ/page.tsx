"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import CtaSection from "@/containers/home-page/cta-section";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Solux Global provide?",
      answer:
        "We specialize in medical billing, coding, credentialing, AR & denial management, state licensing, medical scribing, virtual assistant support, and healthcare-focused digital marketing.",
    },
    {
      question: "How can outsourcing billing benefit my practice?",
      answer:
        "By outsourcing, you reduce administrative workload, minimize errors, accelerate payments, and often increase revenue by up to 30% within the first 90 days.",
    },
    {
      question: "Is Solux Global HIPAA compliant?",
      answer:
        "Yes. We follow all HIPAA guidelines to ensure your patients' data remains secure and confidential.",
    },
    {
      question: "Do you work with all medical specialties?",
      answer:
        "Absolutely. We work with practices across multiple specialties including cardiology, dermatology, psychiatry, orthopedics, internal medicine, pediatrics, and more.",
    },
    {
      question:
        "What makes Solux Global different from other billing companies?",
      answer:
        "We focus on tailored solutions, transparent communication, affordable pricing models, and measurable growth for your practice.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply request a Free Practice Audit on our website or contact us directly. Our team will analyze your billing workflow and provide recommendations at no cost.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[38vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden flex items-end backdrop-blur-md">
        {/* Soft glowing accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-[#0C509B] opacity-25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-cyan-500 opacity-20 rounded-full blur-3xl" />
        </div>

        {/* Heading at bottom */}
        <div className="relative max-w-7xl mx-auto px-6 pb-8 w-full text-center">
          <motion.div
            variants={slideInFromTop()}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
              Frequently Asked Questions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <main className="pt-0">
        <section
          className="py-8 md:py-16"
          style={{ backgroundColor: "#F8F9FC" }}
        >
          <div className="mx-auto max-w-6xl px-4 md:px-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-300 last:border-b-0"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-3 text-[1.5rem] md:text-[1.875rem] text-slate-900 font-semibold hover:text-[#0C509B] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-[1.25rem] md:text-[1.5rem] pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <CtaSection />
    </>
  );
}
