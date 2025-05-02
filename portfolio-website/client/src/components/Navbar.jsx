// src/components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-xl font-bold">Fredrick Lani</h1>
      <ul className="flex space-x-4">
        <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
        <li><a href="#about" className="hover:text-yellow-500">About</a></li>
        <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        <li>
          <button onClick={() => setDarkMode(!darkMode)} className="bg-yellow-500 text-white px-2 py-1 rounded">
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
