import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function Contest() {
  const questions = [
    {
      id: 1,
      title: "Two Sum",
      description: "Find two numbers that add up to a target value.",
      language: "cpp",
      testCases: 5,
    },
    {
      id: 2,
      title: "Reverse a String",
      description: "Reverse a given string without using extra space.",
      language: "cpp",
      testCases: 5,
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [code, setCode] = useState(
    '#include <iostream>\nint main() {\n std::cout << "Hello";\n return 0;\n}'
  );
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

  // Countdown timer
  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = () => {
    const solved = Math.random() > 0.4; // mock pass/fail result
    const timeTaken = (25 * 60 - timeLeft) / 60;
    const result = {
      name: "Gouranga",
      question: questions[currentQ].title,
      solved,
      timeTaken: timeTaken.toFixed(2),
      score: solved ? 100 - Math.floor(timeTaken) : 0,
    };

    setLeaderboard((prev) => [...prev, result]);
    setScore(score + result.score);
    alert(
      solved
        ? `✅ ${questions[currentQ].title} solved in ${timeTaken.toFixed(
            1
          )} min!`
        : "❌ Test cases failed. Try again!"
    );
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setTimeLeft(25 * 60);
      setCode("#include <iostream>\nint main() { return 0; }");
    } else {
      alert("🎉 Contest completed!");
    }
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        DSA Contest — Win Gifts & Scholarships 🎁
      </h1>

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {questions[currentQ].title}
          </h2>
          <span className="text-lg font-medium text-red-500">
            ⏳ {formatTime(timeLeft)}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {questions[currentQ].description}
        </p>
        <p className="text-sm text-green-600 mb-2">
          🧩 {questions[currentQ].testCases} Test Cases
        </p>

        <Editor
          height="400px"
          language={questions[currentQ].language}
          theme="vs-dark"
          value={code}
          onChange={setCode}
          className="rounded-lg overflow-hidden"
        />

        <div className="mt-4 flex gap-3">
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Next Question
          </button>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="max-w-3xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-purple-600">
          🏆 Leaderboard
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-700 dark:text-gray-300 border-b">
              <th className="py-2">Name</th>
              <th>Question</th>
              <th>Status</th>
              <th>Time (min)</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((item, index) => (
              <tr
                key={index}
                className="border-b text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="py-2">{item.name}</td>
                <td>{item.question}</td>
                <td>{item.solved ? "✅ Solved" : "❌ Failed"}</td>
                <td>{item.timeTaken}</td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-4 text-lg font-medium text-green-700 dark:text-green-400">
          Total Score: {score}
        </p>
      </div>
    </div>
  );
}
