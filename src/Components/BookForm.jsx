import { useState } from "react";
import { useBooks } from "../Context/BookContext";

export default function BookForm() {
  const { addBook } = useBooks();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addBook({ title: title.trim() });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a book title..."
        className="border p-2 rounded w-full"
      />
      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
}
