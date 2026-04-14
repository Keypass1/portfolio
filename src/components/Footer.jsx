import { useTheme } from '../context/useTheme.js';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

/**
 * Footer - Modern footer with gradient accent, social links, and back-to-top.
 */
export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className="relative">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div
        className={`py-10 transition-colors ${
          darkMode ? 'bg-dark-bg' : 'bg-gray-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Brand */}
            <a href="#home" className="text-2xl font-bold">
              <span className="gradient-text">CGL</span>
              <span className="text-primary">.</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'text-gray-500 hover:text-white hover:bg-white/5'
                    : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'text-gray-500 hover:text-blue-400 hover:bg-blue-400/5'
                    : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:cornelio.lantes@email.com"
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'text-gray-500 hover:text-red-400 hover:bg-red-400/5'
                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            {/* Divider */}
            <div className={`w-16 h-px ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

            {/* Copyright */}
            <p className={`text-sm flex items-center gap-1.5 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
              &copy; {new Date().getFullYear()} Cornelio G. Lantes Jr. Made with
              <FaHeart className="text-red-400 text-xs" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
