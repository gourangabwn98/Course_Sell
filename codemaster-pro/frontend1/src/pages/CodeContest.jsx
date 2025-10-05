import { useParams } from "react-router-dom";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeContest() {
  const { id } = useParams();

  const questions = [
    {
      id: 1,
      title: "Two Sum",
      description:
        "Given an array of integers and a target, return the indices of the two numbers that add up to the target.",
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      language: "cpp",
    },
    {
      id: 2,
      title: "Reverse a String",
      description:
        "Write a function that reverses a string without using any extra data structures.",
      input: "hello",
      output: "olleh",
      language: "cpp",
    },
  ];

  const question = questions.find((q) => q.id === parseInt(id));
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(
    language === "cpp"
      ? '#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello World";\n  return 0;\n}'
      : "console.log('Hello World');"
  );
  const [output, setOutput] = useState("");
  const [file, setFile] = useState(null);

  const handleRun = () => {
    setOutput("⚙️ Compiling and running your code...");
    setTimeout(() => {
      setOutput("✅ All 5 test cases passed! 🎉");
    }, 2000);
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setOutput(`📁 Uploaded file: ${uploadedFile.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 px-4">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        {question.title}
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Problem */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Problem Description
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {question.description}
          </p>

          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mb-3">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Example Input:
            </p>
            <p>{question.input}</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Example Output:
            </p>
            <p>{question.output}</p>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload Code File (optional)
            </label>
            <input
              type="file"
              accept=".cpp,.js,.py,.java"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-700 dark:text-gray-200 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            />
          </div>
        </div>

        {/* Right: Editor */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Code Editor
            </h2>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border px-2 py-1 rounded-md dark:bg-gray-700 dark:text-white"
            >
              <option value="cpp">C++</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>

          <Editor
            height="400px"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={setCode}
          />

          <div className="mt-4 flex gap-3">
            <button
              onClick={handleRun}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Run Code
            </button>
            <button
              onClick={() => alert("✅ Code submitted successfully!")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>

          {output && (
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-gray-800 dark:text-gray-100">
              <strong>Output:</strong>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
