import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion"; // Add this line
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  CalendarIcon,
  UserIcon,
  ClockIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

export default function LiveSessions() {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Mock upcoming sessions (future dates from Oct 6, 2025)
    setSessions([
      {
        _id: "1",
        title: "Advanced C++ DSA: Graph Algorithms Live",
        description:
          "Deep dive into graph traversal, shortest paths, and interview strategies.",
        date: "2025-10-15T19:00:00", // Oct 15, 7 PM
        instructor: "Dr. Alan Turing",
        instructorImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&round",
        price: 15,
        capacity: 50,
        booked: 12,
        level: "Intermediate",
        duration: "2 hours",
      },
      {
        _id: "2",
        title: "Full Stack MERN Project Jam",
        description:
          "Build and debug a complete e-commerce app in real-time with peers.",
        date: "2025-10-18T18:00:00", // Oct 18, 6 PM
        instructor: "Sarah Code",
        instructorImage:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&round",
        price: 20,
        capacity: 30,
        booked: 25,
        level: "Intermediate",
        duration: "3 hours",
      },
      {
        _id: "3",
        title: "Frontend React Best Practices",
        description:
          "Optimize performance, accessibility, and state management in React apps.",
        date: "2025-10-22T20:00:00", // Oct 22, 8 PM
        instructor: "Jordan React",
        instructorImage:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&round",
        price: 12,
        capacity: 40,
        booked: 8,
        level: "Beginner",
        duration: "1.5 hours",
      },
    ]);
  }, []);

  const events = sessions.map((s) => ({
    id: s._id,
    title: s.title,
    start: s.date,
    extendedProps: { ...s },
    backgroundColor: "#00d4aa",
    borderColor: "#00d4aa",
  }));

  const handleEventClick = (info) => {
    setSelectedSession(info.event.extendedProps);
    setShowModal(true);
  };

  const handleBook = () => {
    if (!user) {
      alert("Please login to book a session!");
      navigate("/login");
      return;
    }
    // Mock booking
    alert(
      `Booked "${selectedSession.title}" for ${new Date(
        selectedSession.date
      ).toLocaleString()}! Check your dashboard.`
    );
    setShowModal(false);
    // In real app: API call to book
  };

  const closeModal = () => setShowModal(false);

  if (sessions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-8">
        <div className="text-center">
          <CalendarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            No Live Sessions Scheduled
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Check back soon for upcoming classes!
          </p>
          <Link
            to="/courses"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Explore On-Demand Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Live Interactive Sessions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join real-time classes with expert instructors. Limited spots—book
            now!
          </p>
        </div>

        {/* Calendar View */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick}
            height="500"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek",
            }}
            eventDisplay="block"
            selectable={false}
            weekends={true}
          />
        </div>

        {/* Sessions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session) => {
            const remaining = session.capacity - session.booked;
            const isFull = remaining <= 0;
            const eventDate = new Date(session.date);
            const now = new Date();
            const isUpcoming = eventDate > now;

            return (
              <motion.div
                key={session._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src={session.instructorImage}
                        alt={session.instructor}
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-800 dark:text-white">
                        {session.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {session.instructor}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {session.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      {new Date(session.date).toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <UserIcon className="h-4 w-4 mr-2" />
                      {session.level} • {session.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <TicketIcon className="h-4 w-4 mr-2" />
                      {session.booked}/{session.capacity} spots
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSession(session);
                      setShowModal(true);
                    }}
                    disabled={!isUpcoming || isFull}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isUpcoming && !isFull
                        ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
                        : "bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isFull
                      ? "Full"
                      : !isUpcoming
                      ? "Past Session"
                      : `Book for $${session.price}`}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && selectedSession && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Book Session: {selectedSession.title}
              </h2>
              <div className="space-y-3 mb-6 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(selectedSession.date).toLocaleString()}
                </p>
                <p>
                  <strong>Instructor:</strong> {selectedSession.instructor}
                </p>
                <p>
                  <strong>Price:</strong> ${selectedSession.price}
                </p>
                <p>
                  <strong>Spots Left:</strong>{" "}
                  {selectedSession.capacity - selectedSession.booked}
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBook}
                  className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition shadow-md hover:shadow-lg"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
