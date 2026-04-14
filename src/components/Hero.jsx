import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';

/**
 * Hero - Landing page hero section with animated entrance.
 * Modern design with animated gradient text, grid background, and floating orbs.
 */
export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-dark-bg' : 'bg-white'
      }`}
    >
      {/* Dot grid background */}
      <div className={`absolute inset-0 ${darkMode ? 'dot-grid-dark' : 'dot-grid'}`} />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-primary/15' : 'bg-primary/10'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute top-1/3 -left-32 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? 'bg-accent/10' : 'bg-accent/8'
          }`}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className={`absolute -bottom-32 right-1/4 w-72 h-72 rounded-full blur-3xl ${
            darkMode ? 'bg-secondary/10' : 'bg-secondary/8'
          }`}
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -25, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Gradient overlay at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 ${
          darkMode
            ? 'bg-gradient-to-t from-dark-bg to-transparent'
            : 'bg-gradient-to-t from-white to-transparent'
        }`}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border ${
              darkMode
                ? 'border-primary/30 bg-primary/10 text-primary-light'
                : 'border-primary/20 bg-primary/5 text-primary'
            }`}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" aria-hidden="true" />
            Available for work
          </span>
        </motion.div>

        {/* Name with gradient text */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hi, I&apos;m </span>
          <span className="gradient-text">Cornelio</span>
        </motion.h1>

        {/* Title with modern styling */}
        <motion.p
          className={`text-lg sm:text-xl md:text-2xl font-medium mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Full-Stack Developer{' '}
          <span className={`mx-2 ${darkMode ? 'text-primary/40' : 'text-primary/30'}`}>·</span>{' '}
          Mobile &amp; Web Developer{' '}
          <span className={`mx-2 ${darkMode ? 'text-primary/40' : 'text-primary/30'}`}>·</span>{' '}
          Java Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Building scalable, user-focused digital solutions with modern technologies
          and clean, maintainable code.
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
            className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className={`px-8 py-3.5 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'border-dark-border text-gray-300 hover:border-primary/50 hover:text-primary-light hover:bg-primary/5'
                : 'border-gray-200 text-gray-700 hover:border-primary/50 hover:text-primary hover:bg-primary/5'
            }`}
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            className={`w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2 ${
              darkMode ? 'border-gray-700' : 'border-gray-300'
            }`}
          >
            <motion.div
              className="w-1 h-2.5 rounded-full bg-primary"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
