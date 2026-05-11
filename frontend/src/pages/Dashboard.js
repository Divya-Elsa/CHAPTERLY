import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/api/books")
      .then(res => res.json())
      .then(setBooks);
  }, []);

  const featured = books[0];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">

      {/* HERO SECTION */}
      <div className="px-10 py-20 bg-gradient-to-b from-purple-900/40 to-transparent">

        <h1
          className="text-5xl font-bold"
          style={{ fontFamily: "Amsterdam" }}
        >
          Your Reading Universe 📚
        </h1>

        <p className="text-gray-400 mt-3 max-w-xl">
          Track, continue, and explore your books like a streaming platform
        </p>

        {featured && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">
              {featured.title}
            </h2>

            <p className="text-gray-400">
              {featured.author}
            </p>

            <button className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-lg hover:opacity-80 transition">
              Continue Reading
            </button>
          </div>
        )}
      </div>

      {/* BOOK ROW (Netflix-style scroll) */}
      <div className="px-10">
        <h2 className="text-xl font-bold mb-4">📚 Your Books</h2>

        <div className="flex gap-4 overflow-x-auto pb-4">

          {books.map(book => (
            <div
              key={book.id}
              className="min-w-[220px] bg-[#14141c] p-5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition duration-300"
            >
              <h3 className="font-bold text-lg">
                {book.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {book.author}
              </p>

              <p className="text-xs mt-2 text-gray-500">
                {book.currentPage} / {book.totalPages}
              </p>

              <button
                onClick={() => navigate(`/edit/${book.id}`)}
                className="mt-3 bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-lg text-sm hover:opacity-80 transition"
              >
                Edit
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* ADD BUTTON FLOAT */}
      <button
        onClick={() => navigate("/add")}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 rounded-full text-xl shadow-xl hover:scale-110 transition"
      >
        +
      </button>

    </div>
  );
}

export default Dashboard;