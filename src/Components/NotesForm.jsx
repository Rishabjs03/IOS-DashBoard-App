import { useState } from "react";
import { useNotes } from "../Context/NotesContext";

export default function NoteForm() {
  const { addNote } = useNotes();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNote({ text: text.trim() });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a quick note..."
        className="border p-2 rounded w-full"
      />
      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
}
