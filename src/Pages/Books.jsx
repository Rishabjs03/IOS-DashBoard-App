import BookForm from "../Components/BookForm";
import BookList from "../Components/BookList";

export default function Books() {
  return (
    <div className="p-4 mt-4 pb-20">
      <h2 className="text-2xl font-bold mb-2">📚 Book Tracker</h2>
      <BookForm />
      <BookList />
    </div>
  );
}
