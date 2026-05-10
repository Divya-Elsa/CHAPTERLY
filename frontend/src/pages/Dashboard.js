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

  return (
    <div className="dashboard">
      <h1>Your Books 📚</h1>

      {books.map(book => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.currentPage} / {book.totalPages}</p>

          <button>Edit</button>
        </div>
      ))}

      <button className="add-btn" onClick={() => navigate("/add")}>
        + Add Book
      </button>
    </div>
  );
}

export default Dashboard;