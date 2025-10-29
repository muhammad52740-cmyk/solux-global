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
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Desktop grid - 4 columns */}
          <div className="hidden md:grid grid-cols-4 gap-6 p-8">
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

                <p
                  className="text-5xl md:text-6xl font-bold"
                  style={{ color: "#0C509B" }}
                >
                  {typeof stat.value === "number" ? stat.value : stat.value}
                  {stat.suffix}
                </p>
                <p
                  className="text-sm md:text-lg font-semibold mt-3"
                  style={{ color: "#0C509B" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile row - 1 line horizontal scroll */}
          <div className="md:hidden flex items-center justify-between overflow-x-auto gap-3 p-4 sm:p-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center min-w-[22%]"
              >
                <p className="text-2xl font-bold" style={{ color: "#0C509B" }}>
                  {typeof stat.value === "number" ? stat.value : stat.value}
                  {stat.suffix}
                </p>
                <p
                  className="text-[10px] font-semibold mt-1 leading-snug"
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
