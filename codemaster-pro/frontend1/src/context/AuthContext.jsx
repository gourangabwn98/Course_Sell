import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email, enrolledCourses: [] }

  const login = (email) => {
    setUser({
      email,
      enrolledCourses: JSON.parse(localStorage.getItem("enrolled") || "[]"),
    });
  };

  const enrollCourse = (courseId) => {
    const enrolled = [...user.enrolledCourses, courseId];
    localStorage.setItem("enrolled", JSON.stringify(enrolled));
    setUser({ ...user, enrolledCourses: enrolled });
    // Mock "purchase success"
    showToast("Enrolled successfully! Check Dashboard.");
  };

  return (
    <AuthContext.Provider value={{ user, login, enrollCourse }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "success-toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
