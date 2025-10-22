"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Lightbulb,
  Users,
  Clock,
  Plus,
  Minus,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FaqSection() {
  const features = [
    { icon: CheckCircle2, title: "Customer Satisfaction" },
    { icon: Lightbulb, title: "Innovation and Creativity" },
    { icon: Users, title: "RCM Experts" },
    { icon: Clock, title: "24/7 Proactive Support" },
  ];

  const faqs = [
    {
      question: "What services does Solux Global offer?",
      answer:
        "Solux Global provides customized managed healthcare services, including Revenue Cycle Management, Medical Billing, Credentialing, State Licensing, Virtual Assistant support, and Medical Scribing solutions tailored to your practice needs.",
    },
    {
      question: "How can Solux Global help my business?",
      answer:
        "We help healthcare providers maximize revenue, reduce claim denials, improve compliance, and streamline billing operations. Our expert team works to optimize your revenue cycle and reduce administrative burden.",
    },
    {
      question: "Does Solux Global offer customizable service packages?",
      answer:
        "Yes, we offer fully customizable service packages designed to meet the unique needs of your practice. Contact us to discuss your specific requirements and create a tailored solution.",
    },
    {
      question: "What is your average claims processing time?",
      answer:
        "Our streamlined processes ensure fast claims processing with an average turnaround time of 24-48 hours, helping you get paid faster and improve cash flow.",
    },
  ];

  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="py-8 md:py-12 lg:py-16 bg-background">
      {/* Scoped style to remove default accordion chevrons */}
      <style>{`
        .no-chevron .accordion-trigger svg { display: none !important; }
        .no-chevron .pm-icon svg { display: inline-block !important; }
        .no-chevron .accordion-trigger { justify-content: flex-start; }
        .no-chevron .accordion-trigger .question-text { text-align: left; width: 100%; display: block; }
      `}</style>

      <div className="mx-auto max-w-7xl px-6">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm cursor-pointer"
                >
                  {/* Icon flip on hover (affects when mouse anywhere on card) */}
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center w-12 h-12 flex-shrink-0 text-[#01509B]"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Icon className="w-9 h-9" />
                  </motion.div>

                  <h3 className="font-semibold text-sm md:text-base text-slate-900 whitespace-nowrap leading-tight">
                    {feature.title}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ + Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: FAQ Accordion */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                Frequently Asked Questions{" "}
                <span style={{ color: "#01509B" }}>(FAQs)</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To start with Solux Global, contact us to schedule a
                consultation with one of our experts. We'll evaluate your
                current operations, discuss your business requirements, and
                suggest personalized solutions to help you achieve your
                objectives.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-3 no-chevron"
              value={openItem || ""}
              onValueChange={(val) => setOpenItem(val)}
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="accordion-trigger flex items-start gap-3 px-0 py-3">
                    <div
                      className="pm-icon flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#01509B" }}
                      aria-hidden
                    >
                      {openItem === `item-${index}` ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </div>

                    <span className="question-text text-black font-semibold text-base md:text-lg">
                      {faq.question}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="text-slate-600 text-base md:text-lg pl-10 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[160%] max-w-5xl">
              <div className="absolute inset-0 bg-yellow-200/40 rounded-3xl transform -rotate-3"></div>
              <img
                src="/Screenshot 2025-10-22 002331.png"
                alt="Team of healthcare professionals collaborating"
                className="relative w-full h-[200%] object-contain rounded-2xl shadow-lg"
              />
              <div
                className="absolute bottom-4 right-4 rounded-full p-3"
                style={{ backgroundColor: "#01509B" }}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
