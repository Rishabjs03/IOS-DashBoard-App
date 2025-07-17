import { useState } from "react";
import { useNotes } from "../Context/NotesContext";
import { Trash2, Edit3, Save } from "lucide-react";

export default function NoteItem({ note }) {
  const { removeNote, updateNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleSave = () => {
    updateNote(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="p-3 border rounded flex justify-between items-start bg-white">
      <div className="w-full">
        {isEditing ? (
          <textarea
            className="w-full border rounded p-2"
            rows="2"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <p className="whitespace-pre-wrap">{note.text}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">{note.createdAt}</p>
      </div>

      <div className="flex flex-col gap-2 ml-2">
        {isEditing ? (
          <button onClick={handleSave}>
            <Save className="text-green-600" />
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <Edit3 className="text-blue-500" />
          </button>
        )}
        <button onClick={() => removeNote(note.id)}>
          <Trash2 className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
