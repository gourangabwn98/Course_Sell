import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-primary">
            CodeMaster Pro
          </h3>
          <p className="text-gray-300 mb-4">
            Empowering developers with practical skills in Frontend, Backend,
            Full Stack, Automation, and C++ DSA.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-primary transition">
              Twitter
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition">
              LinkedIn
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition">
              GitHub
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/courses" className="hover:text-primary transition">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/live" className="hover:text-primary transition">
                Live Sessions
              </Link>
            </li>
            <li>
              <Link to="/dsa" className="hover:text-primary transition">
                DSA Practice
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; 2025 CodeMaster Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}
