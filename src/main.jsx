import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { BookProvider } from "./Context/BookContext";
import { NoteProvider } from "./Context/NotesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BookProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </BookProvider>
  </BrowserRouter>
);
