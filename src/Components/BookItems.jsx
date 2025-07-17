import { useBooks } from "../Context/BookContext";
import { Trash2, CheckCircle, Circle } from "lucide-react";

export default function BookItem({ book }) {
  const { removeBook, toggleCompleted } = useBooks();

  return (
    <li
      className={`flex justify-between items-center p-2 border rounded ${
        book.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <button onClick={() => toggleCompleted(book.id)}>
          {book.completed ? (
            <CheckCircle className="text-green-600" />
          ) : (
            <Circle className="text-gray-400" />
          )}
        </button>
        <span className={book.completed ? "line-through text-gray-500" : ""}>
          {book.title}
        </span>
      </div>
      <button onClick={() => removeBook(book.id)}>
        <Trash2 className="text-red-500" />
      </button>
    </li>
  );
}
