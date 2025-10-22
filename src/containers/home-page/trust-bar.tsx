"use client";
import { useState, useEffect } from "react";

export default function TrustBar() {
  const [yearsExp, setYearsExp] = useState(0);
  const [specialties, setSpecialties] = useState(0);
  const [retention, setRetention] = useState(0);

  useEffect(() => {
    const animateCounter = (
      target: number,
      setter: (val: number) => void,
      duration = 2000
    ) => {
      const start = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setter(Math.floor(target * progress));
        if (progress === 1) clearInterval(interval);
      }, 50);
    };

    animateCounter(20, setYearsExp);
    animateCounter(100, setSpecialties);
    animateCounter(98, setRetention);
  }, []);

  const stats = [
    { value: yearsExp, label: "Years Of Experience", suffix: "+" },
    { value: specialties, label: "Specialties Served", suffix: "+" },
    { value: retention, label: "Client Retention", suffix: "%" },
    { value: "24/7", label: "Support", suffix: "" },
  ];

  return (
    <div className="relative -mt-12 md:-mt-16 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center relative ${
                  index !== stats.length - 1
                    ? "md:border-r border-[#0C509B30]"
                    : ""
                }`}
              >
                {/* Divider */}
                {index !== stats.length - 1 && (
                  <div className="absolute right-0 top-6 bottom-6 border-r border-[#0C509B30]" />
                )}

                {/* Number */}
                <p
                  className="text-5xl md:text-6xl font-bold"
                  style={{ color: "#0C509B" }}
                >
                  {typeof stat.value === "number" ? stat.value : stat.value}
                  {stat.suffix}
                </p>

                {/* Label */}
                <p
                  className="text-sm md:text-lg font-semibold mt-3"
                  style={{ color: "#0C509B" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
