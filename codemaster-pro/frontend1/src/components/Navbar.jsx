import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Redirecting to login...");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <Link
        to="/"
        className="text-[#00d4aa] text-xl font-bold hover:text-white transition-colors"
      >
        CodeMaster Pro
      </Link>
      <div className="space-x-4 flex items-center">
        <Link
          to="/courses"
          className="text-gray-300 hover:text-[#00d4aa] transition-colors"
        >
          Courses
        </Link>
        <Link
          to="/live"
          className="text-gray-300 hover:text-[#00d4aa] transition-colors"
        >
          Live
        </Link>
        <Link
          to="/dsa"
          className="text-gray-300 hover:text-[#00d4aa] transition-colors"
        >
          DSA
        </Link>
        <Link
          to="/about"
          className="text-gray-300 hover:text-[#00d4aa] transition-colors"
        >
          About
        </Link>
        <Link
          to="/blog"
          className="text-gray-300 hover:text-[#00d4aa] transition-colors"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="text-gray-300 hover:text-[#00d4aa] transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-[#00d4aa] transition-colors"
        >
          Dashboard
        </Link>
        <button
          onClick={handleLogin}
          className="bg-[#00d4aa] text-white px-4 py-2 rounded-md hover:bg-[#009d7e] transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Login
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5 text-gray-300" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-300" />
          )}
        </button>
      </div>
    </nav>
  );
}
