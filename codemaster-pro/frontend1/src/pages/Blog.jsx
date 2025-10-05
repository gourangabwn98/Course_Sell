import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Fix: Import icons individually to avoid Vite dep issues
// import { SearchIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { TagIcon } from "@heroicons/react/24/outline";

const posts = [
  {
    id: 1,
    title: "Top 10 Backend Design Patterns for 2025",
    excerpt:
      "Explore essential patterns like MVC, Repository, and Microservices to build scalable APIs with Node.js and Express.",
    image:
      "https://arosys.com/wp-content/uploads/2025/08/10-Best-Backend-Frameworks.webp",
    date: "October 1, 2025",
    readTime: "8 min read",
    category: "Backend",
    content:
      "## Introduction\nBackend design patterns are crucial for maintaining clean, scalable code. In this post, we'll dive into the top 10 patterns every developer should know.\n\n### 1. MVC (Model-View-Controller)\nSeparates concerns for better organization.\n\n```javascript\nconst UserModel = require('./models/User');\n// Example implementation\n```\n\n### 2. Repository Pattern\nAbstracts data layer for testability.\n\nAnd more patterns like Singleton, Factory, Observer...",
  },
  {
    id: 2,
    title: "Mastering C++ DSA: Graph Algorithms for Interviews",
    excerpt:
      "From BFS/DFS to Dijkstra's—solve LeetCode problems efficiently with C++ code snippets.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=250&fit=crop",
    date: "September 28, 2025",
    readTime: "12 min read",
    category: "C++ DSA",
    content:
      "## Graph Basics\nGraphs are fundamental for many interview questions.\n\n### BFS Implementation\n```cpp\n#include <queue>\nvoid bfs(Node* start) {\n    queue<Node*> q;\n    q.push(start);\n    while (!q.empty()) {\n        Node* curr = q.front(); q.pop();\n        // Process node\n    }\n}\n```\n\n### Advanced: Shortest Path\nDijkstra's algorithm explained with code and complexity analysis.\n\nDetailed walkthroughs for 5 key problems...",
  },
  {
    id: 3,
    title: "React Hooks Best Practices: Beyond useState",
    excerpt:
      "Optimize your components with custom hooks, useMemo, and useCallback for performance gains.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    date: "September 25, 2025",
    readTime: "6 min read",
    category: "Frontend",
    content:
      "## Custom Hooks\nCreate reusable logic.\n\n```jsx\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetch(url).then(res => res.json()).then(setData);\n  }, [url]);\n  return data;\n}\n```\n\n### Performance Tips\nAvoid re-renders with useMemo:\n\n`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`\n\nFull guide with examples...",
  },
  {
    id: 4,
    title: "Automation Testing: CI/CD with GitHub Actions",
    excerpt:
      "Set up automated pipelines for Selenium and Cypress tests to speed up your dev workflow.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    date: "September 20, 2025",
    readTime: "10 min read",
    category: "Automation",
    content:
      "## Why Automate?\nCatch bugs early and deploy confidently.\n\n### GitHub Actions Workflow\n```yaml\nname: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - run: npm install\n      - run: npx cypress run\n```\n\nIntegrate with Selenium for cross-browser testing.\n\nStep-by-step setup...",
  },
];

export default function Blog() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const categories = ["all", "Frontend", "Backend", "C++ DSA", "Automation"];

  const filteredPosts = posts.filter(
    (post) =>
      (filter === "all" || post.category === filter) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (post) => {
    setSelected(post);
  };

  const renderMarkdown = (content) => {
    // Simple markdown rendering (title, code blocks, lists)
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-white"
          >
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("```")) {
        const codeBlock = content.split("```")[1] || "";
        return (
          <pre
            key={i}
            className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mt-4"
          >
            <code>{codeBlock}</code>
          </pre>
        );
      } else if (line.startsWith("- ")) {
        return (
          <li key={i} className="text-gray-700 dark:text-gray-300 mb-1 ml-4">
            {line.slice(2)}
          </li>
        );
      } else if (line.trim()) {
        return (
          <p key={i} className="text-gray-700 dark:text-gray-300 mb-4">
            {line}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Header */}
      <section className="py-16 text-center bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Developer Insights & Tips
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Stay updated with the latest trends in coding, DSA, and tech
            careers.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar: Posts List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 space-y-6"
          >
            {/* Search */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
              <div className="relative">
                {/* <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" /> */}
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Categories Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
              <h3 className="font-bold mb-4 text-gray-800 dark:text-white">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`w-full text-left py-2 px-3 rounded-lg transition-all ${
                      filter === cat
                        ? "bg-primary text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    <TagIcon className="h-4 w-4 inline mr-2" />
                    {cat === "all" ? "All" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md h-[60vh] overflow-y-auto">
              <h3 className="font-bold mb-4 text-gray-800 dark:text-white">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {filteredPosts.slice(0, 5).map((post) => (
                  <li
                    key={post.id}
                    onClick={() => handleSelect(post)}
                    className="cursor-pointer p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all group"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2">
                        {post.category}
                      </span>
                      <ClockIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Main Content: Selected Post */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              {selected ? (
                <>
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2">
                        {selected.category}
                      </span>
                      <ClockIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-xs text-gray-500">
                        {selected.readTime}
                      </span>
                      <span className="text-xs text-gray-500 ml-auto">
                        {selected.date}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                      {selected.title}
                    </h1>
                    <div className="prose dark:prose-invert max-w-none mb-8">
                      {renderMarkdown(selected.content)}
                    </div>
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <BookmarkIcon className="h-5 w-5 text-gray-500 cursor-pointer hover:text-primary transition" />
                      <span className="text-sm text-gray-500">
                        Share this post
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 text-center">
                  <img
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=300&fit=crop"
                    alt="Blog Preview"
                    className="mx-auto mb-4 rounded-lg"
                  />
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Welcome to Our Blog
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Dive into expert articles on coding trends, DSA strategies,
                    and career tips. Select a post to read.
                  </p>
                  <button
                    onClick={() => handleSelect(posts[0])}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Read Latest Post
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Helper function (add outside component)
function renderMarkdown(content) {
  // Simple parser for markdown-like content
  return content.split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-white"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("```")) {
      const codeBlock = content.split("```")[1] || "";
      return (
        <pre
          key={i}
          className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mt-4"
        >
          <code>{codeBlock}</code>
        </pre>
      );
    } else if (line.startsWith("- ")) {
      return (
        <li key={i} className="text-gray-700 dark:text-gray-300 mb-1 ml-4">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim()) {
      return (
        <p key={i} className="text-gray-700 dark:text-gray-300 mb-4">
          {line}
        </p>
      );
    }
    return null;
  });
}
