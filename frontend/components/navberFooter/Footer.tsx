"use client";

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Company Info",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press Releases", href: "#" },
        { label: "Sustainability Practices", href: "#" },
      ],
    },
    {
      title: "Customer Support",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "Help Center (FAQs)", href: "#" },
        { label: "Track My Order", href: "#" },
        { label: "Return & Refund Policy", href: "#" },
        { label: "Shipping Information", href: "#" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Categories", href: "#" },
        { label: "Bestsellers", href: "#" },
        { label: "New Arrivals", href: "#" },
        { label: "Deals & Promotions", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Accessibility Statement", href: "#" },
        { label: "Return & Refund Policy", href: "#" },
      ],
    },
  ];

  const socialLinks: { icon: React.ComponentType; href: string; label: string }[] = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/uiuxhero/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-emerald-50 to-emerald-100 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-full shadow-sm p-1 mb-12 max-w-sm mx-auto">
          <div className="flex items-center gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 px-4 flex-1"
            >
              Newsletter Signup
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="flex-1 bg-emerald-100 rounded-full px-4 py-3 text-sm placeholder-gray-600 focus:outline-none transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-xs text-gray-700 font-medium order-3 md:order-1">
            © {currentYear} Dealport. All rights reserved
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            <span className="text-sm font-semibold text-gray-900">
              Connect with us
            </span>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-white p-2.5 rounded-full text-gray-900 hover:bg-emerald-500 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* SSL Info */}
          <p className="text-xs text-gray-700 font-medium order-2 md:order-3">
            Trusted Seller Certifications by SSL Secure
          </p>
        </div>
      </div>
    </footer>
  );
}
