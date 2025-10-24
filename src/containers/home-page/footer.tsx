"use client";

import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const services = [
    { name: "Medical Billing & Coding", link: "/all-services/medical-billing" },
    { name: "Drug & Rehabilitation Billing", link: "/all-services/drug-billing" },
    { name: "Credentialing & State Licensing", link: "/all-services/credentialling" },
    { name: "AR & Denial Management", link: "/all-services/ar-management" },
    { name: "Virtual Assistant Services", link: "/all-services/virtual-assistant" },
    { name: "Medical Scribing", link: "/all-services/medical-scribbing" },
    { name: "Digital Marketing", link: "/all-services/digital-marketing" },
  ];

  const quickLinks = [
    { label: "About", href: "/about-page" },
    { label: "Contact", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Service", href: "/service" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="px-6 py-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Left Column - Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo.jpg"
                    alt="Solux Global Logo"
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white">Solux Global</h2>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                IT Solutions and Managed Services Provider specializing in
                developing custom solutions for healthcare.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <p>+1(781) 667-5321</p>
                    <p>(021) 37447307</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@soluxglobal.com"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    info@soluxglobal.com
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 p-2.5 rounded transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-600 hover:bg-gray-700 p-2.5 rounded transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 p-2.5 rounded transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 p-2.5 rounded transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Our Service Column */}
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Our Service</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.link}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Column */}
            <div>
              <h3 className="text-white font-bold text-xl mb-6">
                Office Address
              </h3>
              <div className="space-y-6">
                {/* USA Office */}
                <div>
                  <h4 className="text-white font-semibold mb-2 underline">
                    USA
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    299 S. Main Street
                    <br />
                    Suite 1300
                    <br />
                    Salt Lake City, UT 84111
                  </p>
                </div>

                {/* Pakistan Office */}
                <div>
                  <h4 className="text-white font-semibold mb-2 underline">
                    Pakistan
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Office Address
                    <br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400 text-sm">
              © Solux Global 2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
