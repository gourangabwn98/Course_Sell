import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  UsersIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Footer from "../components/Footer";

export default function About() {
  const stats = [
    { icon: UsersIcon, number: "5K+", label: "Students Enrolled" },
    { icon: AcademicCapIcon, number: "500+", label: "Courses Completed" },
    { icon: ChartBarIcon, number: "95%", label: "Success Rate" },
    { icon: CodeBracketIcon, number: "50+", label: "Expert Instructors" },
  ];

  const team = [
    {
      name: "Gouranga Das",
      role: "Founder & Lead Instructor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&round",
      bio: "Full-stack developer with 5+ years experience in MERN, C++ DSA, and automation. Passionate about making tech education accessible.",
      social: "linkedin.com/in/gourangadas",
    },
    {
      name: "Dr. Alan Code",
      role: "DSA Specialist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&round",
      bio: "PhD in Algorithms, taught at MIT. Expert in C++ for competitive programming and interviews.",
      social: "twitter.com/alancode",
    },
    {
      name: "Sarah Frontend",
      role: "Frontend Lead",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&round",
      bio: "React & Vue specialist with projects at Google. Focuses on UI/UX for scalable apps.",
      social: "github.com/sarahfrontend",
    },
  ];

  const roadmap = [
    { step: "Q3 2025", milestone: "Launch Rust DSA Track", status: "Planned" },
    {
      step: "Q4 2025",
      milestone: "AI Coding Assistant Integration",
      status: "In Progress",
    },
    { step: "Q1 2026", milestone: "Mobile App Release", status: "Planned" },
    { step: "Q2 2026", milestone: "1M Student Milestone", status: "Planned" },
  ];

  const handleContact = () => {
    // Navigate to contact page instead of alert
    window.location.href = "/contact"; // Or use navigate if in router context
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center bg-gradient-to-r from-primary to-blue-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            About CodeMaster Pro
          </h1>
          <p className="text-xl text-gray-100 mb-8 drop-shadow-md max-w-3xl mx-auto">
            We're on a mission to empower aspiring developers with practical,
            job-ready skills in Frontend, Backend, Full Stack, Automation, and
            C++ DSA. Inspired by cutting-edge AI, we make learning interactive
            and personalized.
          </p>
          <button
            onClick={handleContact}
            className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At CodeMaster Pro, we believe every developer deserves access to
                high-quality, hands-on education. From bootcamp grads to career
                switchers, our platform bridges the gap between theory and
                real-world application.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Founded in 2025 by passionate developers, we're committed to
                innovation—integrating AI for personalized learning paths and
                fostering a community of 5K+ learners.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl text-center">
                <h4 className="font-bold text-xl text-primary mb-2">
                  Practical Focus
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Real projects, not just theory
                </p>
              </div>
              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl text-center">
                <h4 className="font-bold text-xl text-primary mb-2">
                  Community First
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Mentorship & networking
                </p>
              </div>
              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl text-center">
                <h4 className="font-bold text-xl text-primary mb-2">
                  AI-Powered
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Personalized recommendations
                </p>
              </div>
              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl text-center">
                <h4 className="font-bold text-xl text-primary mb-2">
                  Job Ready
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Interview prep & certs
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 px-4">
                  {member.bio}
                </p>
                <a
                  href={`https://${member.social}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium transition"
                >
                  {member.social}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Our Roadmap
          </h2>
          <div className="relative">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center mb-8"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                    {item.milestone}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.step} • {item.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of developers transforming their careers.
          </p>
          <div className="space-x-4">
            <Link
              to="/courses"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200"
            >
              Explore Courses
            </Link>
            <button
              onClick={handleContact}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
