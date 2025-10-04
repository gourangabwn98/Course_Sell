export default function About() {
  const handleContact = () => alert("Contacting team!");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="card max-w-4xl mx-auto p-6">
        <h1 className="text-4xl mb-4">About Us</h1>
        <p>Empowering devs with practical skills.</p>
        <button onClick={handleContact} className="btn mt-4">
          Contact Team
        </button>
      </div>
    </div>
  );
}
