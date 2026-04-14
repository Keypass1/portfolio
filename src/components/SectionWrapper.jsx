import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';

/**
 * SectionWrapper - Reusable wrapper for each page section.
 * Provides consistent padding, max-width, and scroll-triggered fade-in animation.
 * Modern design with subtle section dividers.
 */
export default function SectionWrapper({ id, title, subtitle, children }) {
  const { darkMode } = useTheme();

  return (
    <section
      id={id}
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Section Header */}
        {title && (
          <div className="text-center mb-16">
            <motion.h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div
              className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        )}

        {children}
      </motion.div>
    </section>
  );
}
