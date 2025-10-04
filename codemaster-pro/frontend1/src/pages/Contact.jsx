import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    topic: "general",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock send
    alert(`Message sent! Topic: ${formData.topic}`);
    setFormData({ topic: "general", name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <h1 className="text-4xl text-center mb-8">Contact Us</h1>
      <div className="max-w-md mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            value={formData.topic}
            onChange={(e) =>
              setFormData({ ...formData, topic: e.target.value })
            }
            className="w-full p-2 border rounded"
          >
            <option value="general">General Inquiry</option>
            <option value="c++">C++ Bug Help</option>
            <option value="payment">Payment Issue</option>
          </select>
          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-2 border rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl mb-4">FAQ</h2>
          <details className="mb-2 p-2 border rounded">
            <summary className="cursor-pointer">
              How do I access course code?
            </summary>
            <p className="mt-2">Via dashboard after purchase.</p>
          </details>
          <details className="p-2 border rounded">
            <summary className="cursor-pointer">Refund policy?</summary>
            <p className="mt-2">30-day money-back guarantee.</p>
          </details>
        </div>
        <div className="mt-4 text-center">
          <p>
            Support: Discord | Email: support@codemasterpro.com | Response 12
            hrs
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
            Book 1:1 Mentorship ($50/hr)
          </button>
        </div>
      </div>
    </div>
  );
}
