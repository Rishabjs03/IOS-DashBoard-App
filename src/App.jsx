import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Notes from "./Pages/Notes";
import Expenses from "./Pages/Expenses";
import Settings from "./Pages/Settings";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
