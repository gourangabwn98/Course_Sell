import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setCourses([
      {
        _id: "1",
        title: "Frontend React",
        description: "UIs.",
        topic: "Frontend",
        price: 49,
        trailerUrl: "https://youtube.com/embed/abc",
        rating: 4.8,
      },
      {
        _id: "2",
        title: "C++ DSA",
        description: "Algorithms.",
        topic: "C++ DSA",
        price: 99,
        trailerUrl: "https://youtube.com/embed/abc",
        rating: 4.9,
      },
      {
        _id: "3",
        title: "Backend Node",
        description: "APIs.",
        topic: "Backend",
        price: 59,
        trailerUrl: "https://youtube.com/embed/abc",
        rating: 4.7,
      },
    ]);
  }, []);

  const filtered = courses.filter(
    (c) => filter === "all" || c.topic === filter
  );

  const handleFilter = (topic) => {
    setFilter(topic);
    alert(`Filtered to ${topic}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <h1 className="text-4xl text-center mb-8">All Courses</h1>
      <div className="mb-4 flex justify-center space-x-2">
        {["all", "Frontend", "Backend", "C++ DSA"].map((t) => (
          <button
            key={t}
            onClick={() => handleFilter(t)}
            className={`btn ${filter === t ? "bg-primary" : "bg-gray-500"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((course) => (
          <Link
            key={course._id}
            to={`/courses/${course._id}`}
            className="card p-6 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p>{course.description}</p>
            <iframe
              src={course.trailerUrl}
              width="100%"
              height="150"
              className="mt-2"
            ></iframe>
            <p className="mt-2">
              ${course.price} - {course.rating}⭐
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                alert("Preview clicked!");
              }}
              className="btn mt-2"
            >
              Preview
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
