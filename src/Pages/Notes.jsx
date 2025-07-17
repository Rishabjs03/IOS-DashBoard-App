import NoteForm from "../Components/NotesForm";
import NoteList from "../Components/NotesList";

export default function Notes() {
  return (
    <div className="p-4 mt-4 pb-20">
      <h2 className="text-2xl font-bold mb-2">📝 Notes</h2>
      <NoteForm />
      <NoteList />
    </div>
  );
}
