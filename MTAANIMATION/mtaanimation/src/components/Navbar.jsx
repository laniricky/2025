import { Link, NavLink } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function Navbar() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-600">Mtaanimation</Link>

        <div className="flex items-center space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 dark:text-gray-300"}>
            Home
          </NavLink>
          <NavLink to="/episodes" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 dark:text-gray-300"}>
            Episodes
          </NavLink>
          <NavLink to="/characters" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 dark:text-gray-300"}>
            Characters
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 dark:text-gray-300"}>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 dark:text-gray-300"}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-500 font-semibold" : "text-gray-700 dark:text-gray-300"}>
            Contact
          </NavLink>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 text-gray-700 dark:text-gray-300 hover:text-yellow-600 transition"
            title="Toggle Theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
