import { useNotes } from "../Context/NotesContext";
import NoteItem from "./NotesItems";

export default function NoteList() {
  const { notes } = useNotes();

  if (notes.length === 0) return <p className="text-gray-500">No notes yet.</p>;

  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
