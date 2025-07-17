import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks((prev) => [
      ...prev,
      { ...book, id: Date.now(), completed: false },
    ]);
  };

  const removeBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const toggleCompleted = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, completed: !book.completed } : book
      )
    );
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, removeBook, toggleCompleted }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
