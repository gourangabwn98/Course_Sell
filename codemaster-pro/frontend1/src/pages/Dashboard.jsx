import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl text-center mb-8">Dashboard</h1>
      <div className="card max-w-4xl mx-auto">
        <h2>Welcome, {user?.email}!</h2>
        <h3>Enrolled Courses ({user?.enrolledCourses?.length || 0}):</h3>
        <ul className="space-y-2">
          {user?.enrolledCourses?.map((id) => (
            <li key={id} className="p-2 bg-gray-100 rounded">
              Course {id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
