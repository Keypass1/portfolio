import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsSun, BsMoon } from 'react-icons/bs';

/**
 * Navbar - Glassmorphism navbar with animated mobile menu and dark mode toggle.
 * Highlights active section based on scroll position.
 */
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? 'glass-dark shadow-lg shadow-black/10'
            : 'glass shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight transition-colors"
          >
            <span className="gradient-text">CGL</span>
            <span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? darkMode
                      ? 'text-primary-light'
                      : 'text-primary'
                    : darkMode
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      darkMode ? 'bg-primary/10' : 'bg-primary/5'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`ml-3 p-2.5 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'text-yellow-400 hover:bg-yellow-400/10'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${
                darkMode ? 'text-yellow-400 hover:bg-yellow-400/10' : 'text-gray-500 hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                darkMode ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`md:hidden overflow-hidden border-t ${
                darkMode ? 'border-white/10' : 'border-gray-200/50'
              }`}
            >
              <div className="py-3 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? darkMode
                          ? 'text-primary-light bg-primary/10'
                          : 'text-primary bg-primary/5'
                        : darkMode
                        ? 'text-gray-400 hover:text-white hover:bg-white/5'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
