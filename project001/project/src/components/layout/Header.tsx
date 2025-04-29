import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, ChevronDown } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
              TechSolve
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium ${
                location.pathname === '/' ? 'text-primary-600 dark:text-primary-400' : ''
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link
                    to="/services/software-development"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    Software Development
                  </Link>
                  <Link
                    to="/services/software-customization"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    Software Customization
                  </Link>
                  <Link
                    to="/services/license-selling"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    License Selling
                  </Link>
                  <Link
                    to="/services/support-maintenance"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    Support & Maintenance
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/products"
              className={`text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium ${
                location.pathname.startsWith('/products') ? 'text-primary-600 dark:text-primary-400' : ''
              }`}
            >
              Products
            </Link>
            <Link
              to="/support"
              className={`text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium ${
                location.pathname === '/support' ? 'text-primary-600 dark:text-primary-400' : ''
              }`}
            >
              Support
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button href="/login" variant="outline" size="sm">
              <LogIn size={18} className="mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <Link
              to="/"
              className="block text-base font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
              onClick={closeMenu}
            >
              Home
            </Link>
            <div>
              <div className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                Services
              </div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/software-development"
                  className="block text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  onClick={closeMenu}
                >
                  Software Development
                </Link>
                <Link
                  to="/services/software-customization"
                  className="block text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  onClick={closeMenu}
                >
                  Software Customization
                </Link>
                <Link
                  to="/services/license-selling"
                  className="block text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  onClick={closeMenu}
                >
                  License Selling
                </Link>
                <Link
                  to="/services/support-maintenance"
                  className="block text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  onClick={closeMenu}
                >
                  Support & Maintenance
                </Link>
              </div>
            </div>
            <Link
              to="/products"
              className="block text-base font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              to="/support"
              className="block text-base font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
              onClick={closeMenu}
            >
              Support
            </Link>
            <Link
              to="/login"
              className="flex items-center text-base font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
              onClick={closeMenu}
            >
              <LogIn size={18} className="mr-2" />
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;