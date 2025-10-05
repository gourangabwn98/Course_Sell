// Updated CourseDetail.jsx - Professional Layout with Trailer, Curriculum, & Enroll Flow
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  PlayIcon,
  CheckIcon,
  UserIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enrollCourse } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetch based on id
    setTimeout(() => {
      setCourse({
        _id: id,
        title:
          id === "1"
            ? "Frontend React Mastery"
            : id === "2"
            ? "C++ Data Structures & Algorithms"
            : "Backend Node.js & Express",
        description:
          "Dive deep into advanced React concepts including hooks, context, and performance optimization. Build and deploy real-world applications with confidence.",
        topic: id === "1" ? "Frontend" : id === "2" ? "C++ DSA" : "Backend",
        price: id === "1" ? 49 : id === "2" ? 99 : 59,
        trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        rating: 4.8,
        image:
          id === "1"
            ? "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
            : id === "2"
            ? "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop"
            : "https://images.unsplash.com/photo-1526379095098-d400b0d5c116?w=600&h=400&fit=crop",
        duration: "12 hours",
        level: "Beginner",
        modules: [
          {
            title: "Introduction to React Hooks",
            duration: 30,
            completed: false,
          },
          { title: "Building Components", duration: 45, completed: true },
          {
            title: "State Management with Context",
            duration: 60,
            completed: false,
          },
          { title: "Performance Optimization", duration: 40, completed: false },
        ],
        instructor: "Jane Doe - Senior Frontend Developer at TechCorp",
        instructorImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZo3bvuPjRBgsL5rC6KLUIunxQjpsORQElA&s",
        whatYouLearn: [
          "Master React Hooks and functional components",
          "Build responsive UIs with modern best practices",
          "Integrate APIs and handle state effectively",
          "Deploy projects to production",
        ],
        requirements: [
          "Basic JavaScript knowledge",
          "Code editor like VS Code",
        ],
        testimonials: [
          {
            text: "Transformed my career—highly recommend!",
            author: "Mike S.",
            rating: 5,
          },
          {
            text: "Clear explanations and hands-on projects.",
            author: "Lisa K.",
            rating: 5,
          },
        ],
      });
      setLoading(false);
    }, 500);
  }, [id]);

  const handleBuy = () => {
    enrollCourse(id);
    navigate("/dashboard");
  };

  const handlePreview = () => {
    // Mock trailer play – in real app, use modal/video player
    alert("Trailer playing! (In production, embed in modal)");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-300">
          Loading course details...
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600 dark:text-gray-300">
          Course not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/courses"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-medium transition"
        >
          ← Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image & Trailer */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  {course.title}
                </h1>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 mr-2">
                    {course.rating}⭐
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    ({course.duration} • {course.level})
                  </span>
                </div>
                <button
                  onClick={handlePreview}
                  className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition w-full md:w-auto"
                >
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Watch Trailer
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Course Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                What You'll Learn
              </h2>
              <ul className="space-y-2">
                {course.whatYouLearn.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Curriculum
              </h2>
              <div className="space-y-3">
                {course.modules.map((mod, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        {mod.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {mod.duration} min
                      </p>
                    </div>
                    <CheckIcon
                      className={`h-5 w-5 ${
                        mod.completed ? "text-green-500" : "text-gray-400"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Student Reviews
              </h2>
              <div className="space-y-4">
                {course.testimonials.map((testimonial, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                        ★
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="italic text-gray-700 dark:text-gray-300 mb-2">
                        "{testimonial.text}"
                      </p>
                      <span className="font-bold text-sm">
                        {testimonial.author}
                      </span>
                      <span className="text-yellow-500 ml-2">
                        {"★".repeat(testimonial.rating)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Enroll */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md sticky top-8">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${course.price}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  One-time payment
                </p>
              </div>
              <button
                onClick={handleBuy}
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Enroll Now
              </button>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-2 text-green-500" />
                    Lifetime access
                  </li>
                  <li className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-2 text-green-500" />
                    Certificate on completion
                  </li>
                  <li>30-day money-back guarantee</li>
                </ul>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Instructor
              </h3>
              <img
                src={course.instructorImage}
                alt={course.instructor}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                {course.instructor}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                10+ years in {course.topic} development. Taught 5K+ students.
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Requirements
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {course.requirements.map((req, i) => (
                  <li key={i} className="flex items-center">
                    <CheckIcon className="h-4 w-4 mr-2 text-green-500" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
