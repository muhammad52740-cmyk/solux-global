"use client";

import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactInfoCard() {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Our Office",
      description:
        "Solux Global\n6901 Schubert Colleyville,\nTexas, TX 76034, USA",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "support@soluxglobal.com",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 (647) 492-3515",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      description:
        "Monday – Friday: 9:00 AM – 6:00 PM\nSaturday – Sunday: Closed",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            We are here for you,{" "}
            <span className="text-[#0C509B]">contact us anytime</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Have any questions about our services or just want to talk with us?
            Please reach out.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className={`${method.bgColor} p-4 rounded-full mb-4`}>
                  <Icon className={`${method.iconColor} w-6 h-6`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-600 text-sm">
          We'll get back to you as soon as possible. Our team is available from
          9am–6pm on weekdays.
        </p>
      </div>
    </section>
  );
}
