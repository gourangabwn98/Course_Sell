import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DSA() {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      title: "Two Sum",
      description: "Find two numbers that add up to a target value.",
      difficulty: "Easy",
      points: 100,
    },
    {
      id: 2,
      title: "Reverse a String",
      description: "Reverse a given string without using extra space.",
      difficulty: "Medium",
      points: 150,
    },
  ];

  const leaderboard = [
    { name: "Riya", score: 250, time: "22:10" },
    { name: "Gouranga", score: 200, time: "24:15" },
    { name: "Amit", score: 180, time: "25:00" },
    { name: "Sourav", score: 170, time: "26:40" },
    { name: "Priya", score: 160, time: "27:00" },
    { name: "Ankit", score: 150, time: "28:30" },
    { name: "Rahul", score: 140, time: "29:10" },
    { name: "Sneha", score: 130, time: "30:00" },
    { name: "Tina", score: 120, time: "31:40" },
    { name: "Ravi", score: 100, time: "32:00" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
        💻 DSA Coding Contest — Win Prizes & Scholarships 🎁
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Questions */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            🧩 Contest Questions
          </h2>

          {questions.map((q) => (
            <div
              key={q.id}
              className="border-b border-gray-300 dark:border-gray-700 py-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {q.title}
                </h3>
                <p className="text-gray-500 text-sm mb-1">{q.description}</p>
                <p className="text-sm text-yellow-600">
                  Difficulty: {q.difficulty} • {q.points} pts
                </p>
              </div>

              <button
                onClick={() => navigate(`/codecontest/${q.id}`)}
                className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Solve
              </button>
            </div>
          ))}
        </div>

        {/* Right: Leaderboard */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            🏆 Top 10 Leaderboard
          </h2>

          <table className="w-full text-left text-gray-700 dark:text-gray-300">
            <thead>
              <tr>
                <th className="pb-2">#</th>
                <th>Name</th>
                <th>Score</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-2">{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.score}</td>
                  <td>{user.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
