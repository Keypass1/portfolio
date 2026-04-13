import { useTheme } from '../context/useTheme.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

/**
 * Footer - Displays copyright, social links, and a back-to-top link.
 */
export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`py-8 border-t transition-colors ${
        darkMode ? 'bg-dark-bg border-gray-800' : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} Cornelio G. Lantes Jr. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all ${
                darkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all ${
                darkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:cornelio.lantes@email.com"
              className={`p-2 rounded-lg transition-all ${
                darkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className={`text-sm font-medium transition-colors ${
              darkMode ? 'text-primary-light hover:text-white' : 'text-primary hover:text-primary-dark'
            }`}
          >
            Back to Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
