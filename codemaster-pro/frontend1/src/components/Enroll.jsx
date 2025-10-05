import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Enroll() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "",
  });

  // Example: map courseId to course title
  const courseMap = {
    1: "Frontend React Mastery",
    2: "Backend Node.js",
    3: "Full Stack MERN",
    4: "Automation Testing",
    5: "C++ DSA",
  };

  const courseName = courseMap[courseId] || "Selected Course";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `🎉 Enrollment Successful!\n\nCourse: ${courseName}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    navigate("/"); // go back to home or confirmation page
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-16 text-center text-white shadow-md"
      >
        <h1 className="text-4xl font-bold mb-3">Enroll in {courseName}</h1>
        <p className="text-lg text-gray-200">
          Secure your spot and start learning with our live experts!
        </p>
      </motion.div>

      {/* Enrollment Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-grow flex items-center justify-center py-10"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-96 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
            Complete Enrollment
          </h2>

          <label className="block mb-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-md dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block mb-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-md dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block mb-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-md dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block mb-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Payment Method
          </label>
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="w-full mb-6 p-2 border rounded-md dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="upi">UPI / QR</option>
            <option value="card">Credit / Debit Card</option>
            <option value="netbanking">Net Banking</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition-all duration-200"
          >
            Confirm Enrollment
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full mt-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 rounded-md font-medium transition-all duration-200"
          >
            Go Back
          </button>
        </form>
      </motion.div>

      <Footer />
    </div>
  );
}
