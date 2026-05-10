import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    currentPage: 0,
    totalPages: 0
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("http://localhost:8081/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    }).then(() => navigate("/dashboard"));
  };

  return (
    <div className="form">
      <h1>Add Book</h1>

      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="currentPage" placeholder="Current Page" onChange={handleChange} />
      <input name="totalPages" placeholder="Total Pages" onChange={handleChange} />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default AddBook;