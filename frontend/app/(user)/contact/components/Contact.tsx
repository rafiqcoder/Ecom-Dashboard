"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="">
      {/* Contact Form and Additional Info */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Send us a Message
          </h2>

          {submitted && (
            <div
              className="mb-6 p-4 rounded-lg text-white"
              style={{ backgroundColor: "#4ea674" }}
            >
              ✓ Thank you! Your message has been sent successfully. We{"'"}ll get
              back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                style={{ "--tw-ring-color": "#4ea674" } as any}
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                style={{ "--tw-ring-color": "#4ea674" } as any}
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                style={{ "--tw-ring-color": "#4ea674" } as any}
                placeholder="+1 (234) 567-890"
              />
            </div>

            {/* Subject Select */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition"
                style={{ "--tw-ring-color": "#4ea674" } as any}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Related</option>
                <option value="return">Return & Refund</option>
                <option value="shipping">Shipping Issue</option>
                <option value="product">Product Question</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition resize-none"
                style={{ "--tw-ring-color": "#4ea674" } as any}
                placeholder="Tell us how we can help..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: "#4ea674" }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Response Time
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Email Support
              </h4>
              <p style={{ color: "#00000099" }}>
                We typically respond within 24 hours
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Phone Support
              </h4>
              <p style={{ color: "#00000099" }}>
                Available 24/7 for urgent matters
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
              <p style={{ color: "#00000099" }}>
                Chat with our team in real-time during business hours
              </p>
            </div>
          </div>

          <div
            className="mt-8 p-6 rounded-lg border-2"
            style={{ borderColor: "#4ea674" }}
          >
            <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
            <ul style={{ color: "#00000099" }} className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-semibold">9 AM - 6 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-semibold">10 AM - 4 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-semibold">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p style={{ color: "#00000099" }}>
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy on all items. If you're not satisfied with your purchase, simply return it in original condition for a full refund.",
              },
              {
                question: "How long does shipping take?",
                answer:
                  "Standard shipping typically takes 5-7 business days. Express shipping options are also available at checkout for faster delivery.",
              },
              {
                question: "Are all products authentic?",
                answer:
                  "Yes, all products sold on Dealport are 100% authentic. We source directly from authorized suppliers and verify the authenticity of every item.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and bank transfers for your convenience.",
              },
              {
                question: "How can I track my order?",
                answer:
                  "You'll receive a tracking number via email once your order ships. You can use this to track your package in real-time.",
              },
              {
                question: "Do you offer international shipping?",
                answer:
                  "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. See our shipping page for more details.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 transition">
                  <h3 className="font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 transition-transform group-open:rotate-180"
                    style={{ color: "#4ea674" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </summary>
                <div
                  className="px-6 pb-6 pt-0 bg-gray-50"
                  style={{ color: "#00000099" }}
                >
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "#4ea674" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Check out our Help Center for more articles and resources, or reach
            out to our support team.
          </p>
          <Link href="/help">
            <button
              className="px-8 py-3 bg-white rounded-lg font-semibold transition-transform hover:scale-105"
              style={{ color: "#4ea674" }}
            >
              Visit Help Center
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
