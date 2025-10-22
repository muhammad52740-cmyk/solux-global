"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", practice: "", message: "" });
  };

  return (
    <section className="bg-[#0B0B0B] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="bg-gradient-to-br from-[#0C509B20] to-[#0C509B05] p-8 rounded-lg border border-[#0C509B30] shadow-md w-[95%] mx-auto text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Claim Your Free Audit Today
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Fill out the form below and let our experts show you how much
                more your practice can earn.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-transparent border border-[#0C509B70] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0C509B] transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-transparent border border-[#0C509B70] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0C509B] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-transparent border border-[#0C509B70] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0C509B] transition-colors"
              />
              <input
                type="text"
                name="practice"
                value={formData.practice}
                onChange={handleChange}
                placeholder="Practice Name"
                className="w-full px-4 py-3 bg-transparent border border-[#0C509B70] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0C509B] transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your needs..."
                className="w-full px-4 py-3 bg-transparent border border-[#0C509B70] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#0C509B] transition-colors resize-none"
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <Button
                  size="lg"
                  className="flex-1 text-white font-semibold"
                  style={{
                    backgroundColor: "#0C509B",
                  }}
                >
                  Book Your Free Audit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-[#0C509B] text-[#0C509B] hover:bg-[#0C509B] hover:text-white transition-all duration-300"
                >
                  Contact Us Today
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/audit-form-image.png"
              alt="Audit Form Image"
              className="rounded-xl w-[80%] lg:w-[85%] h-[70%] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
