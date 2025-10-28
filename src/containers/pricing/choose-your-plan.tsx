"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter Plan",
    subtitle: "For Small Practices",
    description: "Best for solo providers and small clinics.",
    features: [
      "End-to-End Medical Billing & Coding",
      "Denial Management & AR Follow-Up",
      "Credentialing Assistance",
      "Patient Billing Support",
      "Starting at 4% of Monthly Collections",
    ],
  },
  {
    name: "Professional Plan",
    subtitle: "For Growing Practices",
    description:
      "Ideal for mid-sized practices with expanding patient volumes.",
    features: [
      "All Starter Plan Features",
      "Advanced Reporting & Analytics",
      "Dedicated Account Manager",
      "Compliance & Audit Support",
      "Starting at 5% of Monthly Collections",
    ],
  },
  {
    name: "Enterprise Plan",
    subtitle: "For Large Practices & Facilities",
    description: "Perfect for multi-specialty groups and hospitals.",
    features: [
      "All Professional Plan Features",
      "Full Revenue Cycle Management (RCM)",
      "Multi-Location Support",
      "24/7 Virtual Assistant Support",
      "Custom Quote Available Upon Request",
    ],
  },
];

export default function ChooseYourPlan() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-1/2"
        style={{ backgroundColor: "#0C509A" }}
      ></div>
      <div className="absolute inset-0 top-1/2 bg-white"></div>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Choose your plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg overflow-hidden shadow-xl transition-all hover:border-2 hover:border-cyan-400 cursor-pointer"
              >
                {/* Card Header */}
                <div className="bg-slate-900 p-8">
                  <h3 className="text-2xl font-bold mb-1 text-white">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-cyan-400 mb-4">{plan.subtitle}</p>
                  <p className="text-sm text-slate-300 mb-6">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <Button className="w-full font-semibold py-3 rounded-lg bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition-all">
                    Get started
                  </Button>
                </div>

                {/* Features List */}
                <div className="bg-white p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
