import { useBooks } from "../Context/BookContext";
import BookItem from "./BookItems";

export default function BookList() {
  const { books } = useBooks();

  if (books.length === 0)
    return <p className="text-gray-500">No books added yet.</p>;

  return (
    <ul className="space-y-2">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}
