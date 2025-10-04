import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function DSA() {
  const [code, setCode] = useState(
    '#include <iostream>\nint main() { std::cout << "Hello"; return 0; }'
  );
  const [selected, setSelected] = useState({ title: "Two Sum" });

  const handleSubmit = () => {
    alert(`Submitted code for ${selected.title}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <h1 className="text-4xl text-center mb-8">DSA Practice</h1>
      <div className="card max-w-4xl mx-auto p-4">
        <h2>{selected.title}</h2>
        <Editor
          height="400px"
          language="cpp"
          value={code}
          onChange={setCode}
          theme="vs-dark"
        />
        <button onClick={handleSubmit} className="btn mt-2">
          Submit
        </button>
      </div>
    </div>
  );
}
