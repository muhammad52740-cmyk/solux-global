"use client";

const services = [
  {
    title: "Medical Billing & Coding",
    description:
      "Expert coding and billing services to maximize your revenue and ensure compliance.",
    image: "/medical-billing-coding-healthcare.png",
  },
  {
    title: "Revenue Cycle Management",
    description:
      "End-to-end management of your revenue cycle for optimal financial performance.",
    image: "/revenue-cycle-management-financial-charts.png",
  },
  {
    title: "Claims Processing",
    description:
      "Fast and accurate claims submission and follow-up to accelerate reimbursement.",
    image: "/claims-processing-healtcare-documents.png",
  },
  {
    title: "Compliance & Auditing",
    description:
      "Comprehensive compliance reviews and audits to protect your practice.",
    image: "/compliance-auditing-healthcare-security.png",
  },
  {
    title: "Denial Management",
    description:
      "Strategic denial analysis and recovery to reduce revenue loss.",
    image: "/denial-management-healthcare-analytics.png",
  },
  {
    title: "Patient Billing Support",
    description: "Streamlined patient billing and payment collection services.",
    image: "/patient-billing-support-healthcare-team.png",
  },
  {
    title: "Credentialing Services",
    description: "Complete provider credentialing and enrollment management.",
    image: "/credentialing-services-healthcare-professionals.png",
  },
];

export function OurServices() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F8F9FC" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Discover Customized{" "}
            <span className="text-cyan-600">Medical Billing</span> Solutions and
            other <span className="text-cyan-600">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Read More Button */}
                <button className="px-6 py-2 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
