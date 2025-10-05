import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import Footer from "../components/Footer";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const codeString = `
import React from "react";

export default function Home() {
  return (
    <h1 className="text-center text-2xl font-bold mt-10">
      Welcome to Home Page
    </h1>
  );
}
  `;
  useEffect(() => {
    setCourses([
      {
        _id: "1",
        title: "Frontend React Mastery",
        description: "Build dynamic UIs.",
        price: 49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wh_vrysQFY_0CkcD-e-lYPPHLvsTaXqIGA&s",
      },
      {
        _id: "2",
        title: "Backend Node.js",
        description: "API builds.",
        price: 59,
        image:
          "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      },
      {
        _id: "3",
        title: "Full Stack MERN",
        description: "End-to-end projects.",
        price: 149,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfWjt6dIQ2mJ5Kai-NDI0Erqdz-0vVtYppg&s",
      },
      {
        _id: "4",
        title: "Automation Testing",
        description: "Selenium & Cypress.",
        price: 79,
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      },
      {
        _id: "5",
        title: "C++ DSA",
        description: "Interview prep.",
        price: 99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Miui4tURdg93zj7mXx6mTR_VP6sL8WjvRA&s",
      },
    ]);
  }, []);

  const handleEnroll = (courseId) => {
    // Redirect to course detail page for enrollment
    // navigate(`/courses/${courseId}`);
    navigate(`/enroll/${courseId}`);
  };

  const handleExploreSkills = (topic) => {
    // Redirect based on topic (e.g., to courses with filter or specific page)
    if (topic === "C++ DSA") {
      navigate("/dsa");
    } else {
      navigate("/courses");
    }
  };

  const handleStartFree = () => {
    // Redirect to a free trial or courses page
    navigate("/courses");
  };

  const handleExplore = () => {
    // Redirect to courses
    navigate("/courses");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Dark gradient bg with white text for visibility */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      >
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Master AI Skills with Live Experts
        </h1>
        <p className="text-xl mb-8 text-gray-200 drop-shadow-md">
          Personalized paths powered by xAI
        </p>
        <button
          onClick={handleStartFree}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold mr-4 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Start Free
        </button>
        <button
          onClick={handleExplore}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Explore
        </button>
        <div className="mt-8 h-64 bg-gray-800 rounded-lg mx-auto w-96 flex items-start justify-start text-green-400 text-sm font-mono border border-gray-600 p-4 overflow-auto whitespace-pre">
          {codeString}
        </div>
      </motion.section>
      {/* Featured Skills Section - Light cards on light/dark bg */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Featured Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {["Frontend", "Backend", "Full Stack", "Automation", "C++ DSA"].map(
            (topic) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">{topic}</h3>
                  <button
                    onClick={() => handleExploreSkills(topic)}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 w-full"
                  >
                    Explore
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>
      {/* Top Courses Section - Cards with visible text */}
      <section className="py-10 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Top Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course._id}
              className="card overflow-hidden shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    ${course.price}
                  </span>
                  <button
                    onClick={() => handleEnroll(course._id)}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* // Updated Testimonials Section - Professional Student Feedback // Replace
      the existing */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          What Our Students Say
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto">
          <div className="card p-6 max-w-sm shadow-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl">
            <div className="flex items-start mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&round"
                alt="Student"
                className="w-12 h-12 rounded-full mr-3 flex-shrink-0"
              />
              <div className="text-left">
                <p className="italic text-gray-700 dark:text-gray-300 mb-1">
                  "This C++ DSA course transformed my interview prep—landed a
                  FAANG offer in weeks!"
                </p>
                <span className="font-bold text-sm block">
                  – Alex Rivera, Software Engineer
                </span>
                <span className="text-yellow-500 text-sm">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="card p-6 max-w-sm shadow-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl">
            <div className="flex items-start mb-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&round"
                alt="Student"
                className="w-12 h-12 rounded-full mr-3 flex-shrink-0"
              />
              <div className="text-left">
                <p className="italic text-gray-700 dark:text-gray-300 mb-1">
                  "The Full Stack MERN track gave me real-world project
                  experience—now building apps for clients."
                </p>
                <span className="font-bold text-sm block">
                  – Sam Patel, Full Stack Developer
                </span>
                <span className="text-yellow-500 text-sm">★★★★★</span>
              </div>
            </div>
          </div>
          <div className="card p-6 max-w-sm shadow-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl">
            <div className="flex items-start mb-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&round"
                alt="Student"
                className="w-12 h-12 rounded-full mr-3 flex-shrink-0"
              />
              <div className="text-left">
                <p className="italic text-gray-700 dark:text-gray-300 mb-1">
                  "Automation course saved me hours in testing—deploying
                  bug-free code daily now."
                </p>
                <span className="font-bold text-sm block">
                  – Jordan Lee, QA Engineer
                </span>
                <span className="text-yellow-500 text-sm">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
