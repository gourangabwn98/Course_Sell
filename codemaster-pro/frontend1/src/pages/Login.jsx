import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mock login (replace with api.post('/auth/login', formData))
      if (formData.email && formData.password) {
        localStorage.setItem("token", "mock-token");
        alert("Logged in! Redirecting...");
        navigate("/dashboard");
      } else {
        alert("Please fill all fields.");
      }
    } catch (err) {
      alert("Login failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg w-96"
      >
        <h1 className="text-3xl text-center mb-6">Login</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 border rounded focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-3 border rounded focus:outline-none focus:border-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded font-bold"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Forgot password?{" "}
          <a href="#" className="text-primary">
            Reset
          </a>
        </p>
        <p className="mt-2 text-center text-xs text-gray-500">
          Secure & GDPR Compliant
        </p>
      </form>
    </div>
  );
}
