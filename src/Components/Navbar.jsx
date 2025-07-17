import { NavLink } from "react-router-dom";
import { BookOpen, ClipboardList, Home, Settings, Wallet } from "lucide-react";

const navItems = [
  { path: "/", icon: <Home size={22} />, label: "Home" },
  { path: "/books", icon: <BookOpen size={22} />, label: "Books" },
  { path: "/notes", icon: <ClipboardList size={22} />, label: "Notes" },
  { path: "/expenses", icon: <Wallet size={22} />, label: "Expenses" },
  { path: "/settings", icon: <Settings size={22} />, label: "Settings" },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center py-2 z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-blue-500" : "text-gray-500"
            }`
          }
        >
          {item.icon}
          <span className="mt-1">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
