import { useState } from "react";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion"; // Add this line

export default function Contact() {
  const [formData, setFormData] = useState({
    topic: "general",
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    // Mock API call
    setTimeout(() => {
      setSuccess(true);
      setFormData({ topic: "general", name: "", email: "", message: "" });
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  const handleMentorship = () => {
    alert(
      "Booking mentorship slot... Redirecting to calendar (Mock). Email us at mentorship@codemasterpro.com to schedule!"
    );
  };

  const faqs = [
    {
      question: "How do I access course materials and code?",
      answer:
        "Once enrolled, access all materials, code repos, and videos via your Dashboard. Lifetime access included!",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied, contact support for a full refund.",
    },
    {
      question: "How long do I have to complete a course?",
      answer:
        "No time limit—learn at your own pace with lifetime access. Certificates available upon completion.",
    },
    {
      question: "Do you offer certificates?",
      answer:
        "Yes! Earn shareable certificates for each course to boost your resume and LinkedIn profile.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Header */}
      <section className="py-16 text-center bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-100 mb-8">
            Have questions? We're here to help. Reach out via form, email, or
            chat.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="c++">C++ DSA Bug Help</option>
                  <option value="payment">Payment Issue</option>
                  <option value="mentorship">Mentorship Request</option>
                  <option value="technical">Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl"
                } text-white`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {success && (
              <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
                Message sent successfully! We'll respond within 12 hours.
              </div>
            )}
          </motion.div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Channels */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Quick Contact
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:support@codemasterpro.com"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <EnvelopeIcon className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Email Support
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      support@codemasterpro.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://discord.gg/codemasterpro" // Mock link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <ChatBubbleLeftIcon className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Discord Community
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Join 2K+ devs for live help
                    </p>
                  </div>
                </a>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <PhoneIcon className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Phone
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      +1 (555) 123-4567 (Mon-Fri, 9AM-5PM EST)
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <MapPinIcon className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Office
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Virtual (Global Team) | HQ: San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <QuestionMarkCircleIcon className="h-6 w-6 text-primary mr-2" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="group">
                    <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300 py-3 border-b border-gray-200 dark:border-gray-700 group-open:mb-2 group-open:border-b-0">
                      {faq.question}
                    </summary>
                    <p className="text-gray-600 dark:text-gray-400 pl-4 pb-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Mentorship CTA */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center shadow-lg">
              <h3 className="text-xl font-bold mb-4">1:1 Mentorship</h3>
              <p className="mb-4 text-blue-100">
                Get personalized guidance from our experts. $50/hour.
              </p>
              <button
                onClick={handleMentorship}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-200"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
