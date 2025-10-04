import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered! Logging in...");
    login(formData.email);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="card w-96">
        <h1 className="text-3xl text-center mb-6">Register</h1>
        <input
          className="form-input mb-4 w-full p-3 border rounded"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          className="form-input mb-4 w-full p-3 border rounded"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit" className="btn-primary w-full">
          Sign Up
        </button>
        <p className="text-center mt-4">
          Have account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
