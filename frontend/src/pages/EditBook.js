import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    totalPages: "",
    currentPage: ""
  });

  // 🔽 Fetch existing book
  useEffect(() => {
    fetch(`http://localhost:8081/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  // 🔽 Handle input change
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  // 🔽 Submit update
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8081/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    }).then(() => {
      navigate("/"); // go back to home
    });
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={book.title} onChange={handleChange} />
        <input name="author" value={book.author} onChange={handleChange} />
        <input name="totalPages" value={book.totalPages} onChange={handleChange} />
        <input name="currentPage" value={book.currentPage} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditBook;