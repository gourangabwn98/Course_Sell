import { useState } from "react";

const posts = [
  { id: 1, title: "Backend Patterns" },
  { id: 2, title: "DSA Tips" },
];

export default function Blog() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (post) => {
    setSelected(post);
    alert(`Reading ${post.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <h1 className="text-4xl text-center mb-8">Blog</h1>
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
        <div className="card p-4">
          <ul>
            {posts.map((p) => (
              <li
                key={p.id}
                onClick={() => handleSelect(p)}
                className="cursor-pointer p-2 border-b"
              >
                {p.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-4">
          {selected ? <h2>{selected.title}</h2> : "Select a post"}
        </div>
      </div>
    </div>
  );
}
