import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  BookOpenIcon,
  UserIcon,
  PlayIcon,
  StarIcon,
  ChevronRightIcon,
  // BarChart3Icon,
  // AwardIcon,
} from "@heroicons/react/24/outline";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function Dashboard() {
  const { user } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Mock enrolled courses with details (based on auth state)
    setEnrolledCourses([
      {
        id: "1",
        title: "Frontend React Mastery",
        progress: 65,
        lastAccessed: "2 days ago",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=80&h=80&fit=crop&round",
      },
      {
        id: "2",
        title: "C++ DSA Essentials",
        progress: 45,
        lastAccessed: "1 week ago",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=80&h=80&fit=crop&round",
      },
      {
        id: "3",
        title: "Backend Node.js Pro",
        progress: 80,
        lastAccessed: "Today",
        image:
          "https://images.unsplash.com/photo-1526379095098-d400b0d5c116?w=80&h=80&fit=crop&round",
      },
    ]);

    // Mock recommendations
    setRecommendations([
      { id: "4", title: "Full Stack MERN Projects", category: "Full Stack" },
      { id: "5", title: "Automation with Cypress", category: "Automation" },
    ]);
  }, [user?.enrolledCourses]);

  const chartData = [
    { name: "Completed", value: 2, color: "#10b981" },
    { name: "In Progress", value: 3, color: "#f59e0b" },
    { name: "Pending", value: 1, color: "#ef4444" },
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-8">
        <div className="text-center">
          <UserIcon className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Please Log In
          </h1>
          <Link
            to="/login"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all dark:bg-primary dark:hover:bg-primary/90"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-8 text-center bg-gradient-to-r from-primary to-blue-600 text-white dark:from-primary dark:to-blue-600"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white dark:text-white">
            Welcome Back!
          </h1>
          <p className="text-xl text-gray-100 dark:text-gray-100">
            Continue your learning journey, {user.email.split("@")[0]}
          </p>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Progress Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                {/* <BarChart3Icon className="h-5 w-5 mr-2 text-primary dark:text-primary" /> */}
                Learning Progress
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={false}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "none",
                      color: "white",
                      dark: true,
                    }}
                    formatter={(value) => [`${value} courses`, "Progress"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="font-bold mb-4 text-gray-800 dark:text-white">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link
                  to="/courses"
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                >
                  <span className="flex items-center text-gray-800 dark:text-white">
                    <BookOpenIcon className="h-5 w-5 mr-2 text-primary dark:text-primary" />
                    Continue Learning
                  </span>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                </Link>
                <Link
                  to="/live"
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                >
                  <span className="flex items-center text-gray-800 dark:text-white">
                    <PlayIcon className="h-5 w-5 mr-2 text-primary dark:text-primary" />
                    Join Live Session
                  </span>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                </Link>
                <Link
                  to="/dsa"
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                >
                  <span className="flex items-center text-gray-800 dark:text-white">
                    <StarIcon className="h-5 w-5 mr-2 text-primary dark:text-primary" />
                    Practice DSA
                  </span>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                </Link>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                <UserIcon className="h-5 w-5 mr-2 text-primary dark:text-primary" />
                Profile
              </h3>
              <img
                src={`https://ui-avatars.com/api/?name=${user.email}&background=00d4aa&color=fff&size=64`}
                alt="Profile"
                className="w-16 h-16 rounded-full mx-auto mb-4 shadow-md"
              />
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                {user.email}
              </p>
              <div className="space-y-2 text-center">
                <Link
                  to="/profile"
                  className="text-primary hover:text-primary/80 text-sm font-medium block py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  Edit Profile
                </Link>
                <Link
                  to="/certificates"
                  className="text-primary hover:text-primary/80 text-sm font-medium block py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  View Certificates
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Enrolled Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <BookOpenIcon className="h-6 w-6 mr-2 text-primary dark:text-primary" />
                Your Enrolled Courses ({enrolledCourses.length})
              </h2>
              {enrolledCourses.length > 0 ? (
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.id}`}
                      className="group flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all border border-gray-200 dark:border-gray-700"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-12 h-12 rounded-lg object-cover mr-4 flex-shrink-0 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors truncate">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Last accessed: {course.lastAccessed}
                        </p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {course.progress}% Complete
                        </p>
                      </div>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 ml-4 flex-shrink-0 group-hover:text-primary transition" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpenIcon className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    No Courses Enrolled Yet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Start your learning journey today!
                  </p>
                  <Link
                    to="/courses"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all dark:bg-primary dark:hover:bg-primary/90"
                  >
                    Browse Courses
                  </Link>
                </div>
              )}
            </div>

            {/* Recommendations */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                {/* <AwardIcon className="h-6 w-6 mr-2 text-primary dark:text-primary" /> */}
                Recommended for You
              </h2>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/courses/${rec.id}`}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      {/* <AwardIcon className="h-6 w-6 text-primary dark:text-primary" /> */}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {rec.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {rec.category}
                      </p>
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </Link>
                ))}
                {recommendations.length === 0 && (
                  <p className="text-center text-gray-600 dark:text-gray-300 py-8">
                    Complete more courses for personalized recommendations!
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
