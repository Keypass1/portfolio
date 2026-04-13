import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';

/**
 * Hero - Landing page hero section with animated entrance.
 * Displays name, title, tagline, and call-to-action buttons.
 */
export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? 'bg-primary/10' : 'bg-primary/5'
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? 'bg-accent/10' : 'bg-accent/5'
          }`}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          className={`text-sm sm:text-base font-medium tracking-widest uppercase mb-4 ${
            darkMode ? 'text-primary-light' : 'text-primary'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Cornelio G. Lantes Jr.
        </motion.h1>

        {/* Title */}
        <motion.p
          className={`text-lg sm:text-xl md:text-2xl font-medium mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Full-Stack Developer{' '}
          <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>|</span>{' '}
          Mobile &amp; Web Developer{' '}
          <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>|</span>{' '}
          Java Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          className={`text-base sm:text-lg max-w-xl mx-auto mb-10 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Building scalable, user-focused digital solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:scale-105 ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:border-primary-light hover:text-primary-light'
                : 'border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
            }`}
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className={`w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2 ${
            darkMode ? 'border-gray-600' : 'border-gray-300'
          }`}
        >
          <div className={`w-1.5 h-3 rounded-full ${darkMode ? 'bg-gray-400' : 'bg-gray-400'}`} />
        </div>
      </motion.div>
    </section>
  );
}
