import { useEffect, useState } from "react";

export default function LiveSessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions([
      { _id: "1", title: "C++ Live", date: "2025-10-10", price: 15 },
    ]);
  }, []);

  const handleBook = (id) => {
    alert(`Booked session ${id}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <h1 className="text-4xl text-center mb-8">Live Sessions</h1>
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {sessions.map((s) => (
          <div key={s._id} className="card p-4">
            <h3>{s.title}</h3>
            <p>{s.date}</p>
            <p>${s.price}</p>
            <button onClick={() => handleBook(s._id)} className="btn mt-2">
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
