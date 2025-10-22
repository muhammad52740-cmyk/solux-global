"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

type TabSpec = {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
};

const tabs: TabSpec[] = [
  {
    id: "medical-billing",
    label: "Medical Billing & Coding",
    title: "Medical Billing & Coding",
    description: "Accurate claim submissions for maximum reimbursements.",
    features: [
      "Accurate coding guidance",
      "Clean claim workflows",
      "Automated payment posting",
      "Denial analysis and work queues",
    ],
    benefits: [
      "Higher clean-claim rate",
      "Faster reimbursements",
      "Improved cash flow",
    ],
    image: "/claims-processing-healtcare-documents.png",
  },
  {
    id: "credentialing",
    label: "Credentialing & State Licensing",
    title: "Credentialing & State Licensing",
    description: "Hassle-free provider enrollment and licensing.",
    features: [
      "Payer credentialing and re-credentialing",
      "CAQH registration and maintenance",
      "Provider enrollment with insurance networks",
      "Credentialing support and consulting",
    ],
    benefits: [
      "Expedited credentialing processes",
      "Reduced onboarding delays",
      "Improved payer coverage",
    ],
    image: "/compliance-auditing-healthcare-security.png",
  },
  {
    id: "ar-denial",
    label: "AR & Denial Management",
    title: "AR & Denial Management",
    description: "Recover lost revenue with expert denial resolution.",
    features: [
      "Denial analysis and categorization",
      "Appeal preparation and submission",
      "A/R follow-up workflows",
      "Revenue recovery strategies",
    ],
    benefits: ["Lower days in A/R", "Reduced denials", "Predictable revenue"],
    image: "/credentialing-services-healthcare-professionals.png",
  },
  {
    id: "virtual-assistant",
    label: "Virtual Assistant Services",
    title: "Virtual Assistant Services",
    description: "Administrative support to reduce your workload.",
    features: [
      "Administrative task management",
      "Scheduling and coordination",
      "Data entry and verification",
      "Patient communication support",
    ],
    benefits: [
      "Reduced administrative burden",
      "Better staff efficiency",
      "Improved patient experience",
    ],
    image: "/denial-management-healthcare-analytics.png",
  },
  {
    id: "medical-scribing",
    label: "Medical Scribing",
    title: "Medical Scribing",
    description: "Accurate, real-time documentation for improved patient care.",
    features: [
      "Real-time clinical documentation",
      "EHR integration",
      "Specialty-specific templates",
      "Quality assurance reviews",
    ],
    benefits: [
      "Faster documentation",
      "Better clinician experience",
      "Improved patient care",
    ],
    image: "/patient-billing-support-healthcare-team.png",
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    title: "Digital Marketing",
    description:
      "Grow your practice visibility with targeted online marketing solutions.",
    features: [
      "SEO optimization",
      "Social media management",
      "Content marketing",
      "Online reputation management",
    ],
    benefits: [
      "Increased patient acquisition",
      "Better online visibility",
      "Practice growth",
    ],
    image: "/revenue-cycle-management-financial-charts.png",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-14 md:py-20"
      style={{ backgroundColor: "#01509B" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center mb-8 md:mb-10">
          <h2 className="text-balance text-2xl md:text-4xl font-semibold text-white">
            At Solux Global, we offer a complete suite of revenue cycle
            management (RCM) services, customized for your practice
          </h2>
        </header>

        <Tabs defaultValue="medical-billing" className="w-full">
          <div className="relative mb-6 md:mb-8">
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-white/30" />
            <TabsList className="mx-auto flex flex-wrap justify-center gap-2 bg-transparent p-0">
              {tabs.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <TabsTrigger
                    value={t.id}
                    className="rounded-full border border-white/40 bg-white/10 px-3 py-1.5 h-10 text-xs font-semibold uppercase tracking-wide shadow-sm transition-all hover:border-yellow-300 hover:bg-white/20 data-[state=active]:bg-yellow-400 data-[state=active]:text-[#01509B] data-[state=active]:border-yellow-400 text-white whitespace-nowrap flex-shrink-0 w-max"
                  >
                    {t.label}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </div>

          {/* Content */}
          {tabs.map((t) => (
            <TabsContent key={t.id} value={t.id} className="mt-4">
              <motion.div
                className="flex flex-row items-center gap-8 md:gap-12 justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center">
                  <img
                    src={t.image || "/placeholder.svg"}
                    width={400}
                    height={400}
                    alt={`${t.title} product screens`}
                    className="w-96 h-96 object-cover rounded-xl border border-white/40 bg-white/10 shadow-lg"
                  />
                </div>

                {/* Copy */}
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-semibold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-gray-100">{t.description}</p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold text-white">
                        Features:
                      </h4>
                      <ul className="space-y-3">
                        {t.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-sm bg-yellow-300"
                              aria-hidden="true"
                            />
                            <span className="leading-relaxed text-gray-100">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold text-white">
                        Benefits:
                      </h4>
                      <ul className="space-y-3">
                        {t.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-sm bg-yellow-300"
                              aria-hidden="true"
                            />
                            <span className="leading-relaxed text-gray-100">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
