import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      {
        _id: "1",
        title: "Frontend React Mastery",
        description: "Build dynamic UIs.",
        price: 49,
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      },
      {
        _id: "2",
        title: "Backend Node.js",
        description: "API builds.",
        price: 59,
        image:
          "https://images.unsplash.com/photo-1526379095098-d400b0d5c116?w=400",
      },
      {
        _id: "3",
        title: "Full Stack MERN",
        description: "End-to-end projects.",
        price: 149,
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
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
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      },
    ]);
  }, []);

  const handleEnroll = (courseId) => {
    alert(`Enrolling in course ${courseId}...`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hero py-20 text-center text-white"
      >
        <h1 className="text-5xl font-bold mb-4">
          Master AI Skills with Live Experts
        </h1>
        <p className="text-xl mb-8">Personalized paths powered by xAI</p>
        <button
          onClick={() => alert("Starting free trial!")}
          className="btn mr-4"
        >
          Start Free
        </button>
        <button
          onClick={() => alert("Explore courses!")}
          className="btn bg-gray-600"
        >
          Explore
        </button>
        <div className="mt-8 h-64 bg-black rounded mx-auto w-96 flex items-center justify-center text-green-400">
          Code Demo
        </div>
      </motion.section>
      <section className="py-10">
        <h2 className="text-3xl text-center mb-8">Featured Skills</h2>
        <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto">
          {["Frontend", "Backend", "Full Stack", "Automation", "C++ DSA"].map(
            (topic) => (
              <motion.div whileHover={{ scale: 1.05 }} className="card p-4">
                <h3 className="font-bold">{topic}</h3>
                <button
                  onClick={() => alert(`${topic} explored!`)}
                  className="btn mt-2 w-full"
                >
                  Explore
                </button>
              </motion.div>
            )
          )}
        </div>
      </section>
      <section className="py-10 bg-gray-200 dark:bg-gray-800">
        <h2 className="text-3xl text-center mb-8">Top Courses</h2>
        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div key={course._id} className="card">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <h3 className="p-2 font-bold">{course.title}</h3>
              <p className="p-2 text-gray-600">{course.description}</p>
              <div className="p-2 flex justify-between">
                <span>${course.price}</span>
                <button
                  onClick={() => handleEnroll(course._id)}
                  className="btn"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10 text-center">
        <h2 className="text-3xl mb-4">Testimonials</h2>
        <div className="space-x-4">
          <div className="card inline-block p-4">"Great course!" - Alex</div>
          <div className="card inline-block p-4">
            "Nailed interviews!" - Sam
          </div>
        </div>
      </section>
    </div>
  );
}
