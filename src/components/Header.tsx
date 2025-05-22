import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from './ui/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset body overflow when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      if (
        isMenuOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        !button?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          href="#"
          className="text-xl sm:text-2xl font-bold text-indigo-900 flex items-center"
        >
          <span className="text-blue-600 mr-2">V</span>
          <span
            className={`transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Vinayak Naik
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://github.com"
            aria-label="GitHub"
            className={`hover:text-blue-600 transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vinayak-naik-827375168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            aria-label="LinkedIn"
            className={`hover:text-blue-600 transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className={`hover:text-blue-600 transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <Twitter size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          className="md:hidden z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X
              size={28}
              className={scrolled ? 'text-gray-800' : 'text-white'}
            />
          ) : (
            <Menu
              size={28}
              className={scrolled ? 'text-gray-800' : 'text-white'}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 font-medium hover:text-blue-600 transition-colors py-2 text-lg"
                onClick={() => {
                  toggleMenu();
                  document.body.style.overflow = 'auto';
                }}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Social Icons - Mobile */}
          <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-gray-200">
            <Link
              href="https://github.com"
              aria-label="GitHub"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github size={28} />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Twitter size={28} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
