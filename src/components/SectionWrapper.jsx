import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';

/**
 * SectionWrapper - Reusable wrapper for each page section.
 * Provides consistent padding, max-width, and scroll-triggered fade-in animation.
 */
export default function SectionWrapper({ id, title, subtitle, children }) {
  const { darkMode } = useTheme();

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Section Header */}
        {title && (
          <div className="text-center mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {subtitle}
              </p>
            )}
            <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        )}

        {children}
      </motion.div>
    </section>
  );
}
