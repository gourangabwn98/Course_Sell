import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enrollCourse } = useAuth();
  const course = { _id: id, title: "Sample Course", price: 49 }; // Mock

  const handleBuy = () => {
    enrollCourse(id);
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="min-h-screen py-8">
      <div className="card max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p>${course.price}</p>
        <button onClick={handleBuy} className="btn-primary w-full mt-4">
          Buy & Enroll
        </button>
      </div>
    </div>
  );
}
