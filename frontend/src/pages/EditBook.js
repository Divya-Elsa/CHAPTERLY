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

  const [loading, setLoading] = useState(true);

  // 🔽 Fetch existing book
  useEffect(() => {
    fetch(`http://localhost:8081/api/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching book:", err);
        setLoading(false);
      });
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

    // simple validation
    if (!book.title || !book.author) {
      alert("Title and Author are required");
      return;
    }

    fetch(`http://localhost:8081/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
      .then(() => {
        alert("Book updated successfully ✅");
        navigate("/");
      })
      .catch(err => console.error("Error updating:", err));
  };

  // 🔽 Loading state
  if (loading) {
    return <p>Loading book...</p>;
  }

  return (
    <div className="edit-container">
      <h2>Edit Book 📖</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
        />

        <input
          type="number"
          name="totalPages"
          placeholder="Total Pages"
          value={book.totalPages}
          onChange={handleChange}
        />

        <input
          type="number"
          name="currentPage"
          placeholder="Current Page"
          value={book.currentPage}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditBook;