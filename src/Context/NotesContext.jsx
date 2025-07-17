import { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const localData = localStorage.getItem("notes");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes((prev) => [
      ...prev,
      { ...note, id: Date.now(), createdAt: new Date().toLocaleString() },
    ]);
  };

  const removeNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedText) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, text: updatedText } : note
      )
    );
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, removeNote, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);
