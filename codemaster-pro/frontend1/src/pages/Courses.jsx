// Updated Courses.jsx - Professional Catalog with Search, Filters & Responsive Cards
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCourses([
      {
        _id: "1",
        title: "Frontend React Mastery",
        description:
          "Master React hooks, components, and build responsive UIs for modern web apps.",
        topic: "Frontend",
        price: 49,
        trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        rating: 4.8,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wh_vrysQFY_0CkcD-e-lYPPHLvsTaXqIGA&s",
        duration: "12 hours",
        level: "Beginner",
      },
      {
        _id: "2",
        title: "C++ Data Structures & Algorithms",
        description:
          "Solve 500+ LeetCode-style problems and ace technical interviews with efficient code.",
        topic: "C++ DSA",
        price: 99,
        trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        rating: 4.9,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Miui4tURdg93zj7mXx6mTR_VP6sL8WjvRA&s",
        duration: "20 hours",
        level: "Intermediate",
      },
      {
        _id: "3",
        title: "Backend Node.js & Express",
        description:
          "Build scalable APIs, handle authentication, and integrate databases like MongoDB.",
        topic: "Backend",
        price: 59,
        trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        rating: 4.7,
        image:
          "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
        duration: "15 hours",
        level: "Beginner",
      },
      {
        _id: "4",
        title: "Full Stack MERN Development",
        description:
          "End-to-end projects with MongoDB, Express, React, and Node.js for complete apps.",
        topic: "Full Stack",
        price: 149,
        trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        rating: 4.9,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfWjt6dIQ2mJ5Kai-NDI0Erqdz-0vVtYppg&s",
        duration: "25 hours",
        level: "Intermediate",
      },
      {
        _id: "5",
        title: "Automation Testing with Selenium & Cypress",
        description:
          "Automate tests for web apps, ensure CI/CD pipelines, and achieve zero-bug deployments.",
        topic: "Automation",
        price: 79,
        trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
        duration: "18 hours",
        level: "Intermediate",
      },
    ]);
  }, []);

  const filtered = courses.filter(
    (c) =>
      (filter === "all" || c.topic === filter) &&
      c.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleFilter = (topic) => {
    setFilter(topic);
  };

  const topics = [
    "all",
    "Frontend",
    "Backend",
    "Full Stack",
    "Automation",
    "C++ DSA",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Browse Our Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover expert-led courses in coding and tech skills
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => handleFilter(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === t
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {t === "all" ? "All" : t}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <Link
                key={course._id}
                to={`/courses/${course._id}`}
                className="group card overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-bold">
                    {course.rating}⭐
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-semibold mb-2">
                    {course.topic}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ${course.price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {course.duration} • {course.level}
                    </span>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearch("");
                setFilter("all");
              }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
