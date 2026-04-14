import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';
import SectionWrapper from './SectionWrapper.jsx';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaAndroid,
  FaJava,
  FaPython,
  FaDatabase,
  FaFire,
} from 'react-icons/fa';
import { SiMysql, SiSqlite, SiFirebase } from 'react-icons/si';

/**
 * About - Brief introduction, background, and skills overview.
 * Modern design with glassmorphism cards.
 */

const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'React', icon: FaReact },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'PHP', icon: FaPhp },
      { name: 'Node.js', icon: FaNodeJs },
    ],
  },
  {
    label: 'Mobile',
    skills: [
      { name: 'MIT App Inventor', icon: FaAndroid },
      { name: 'Android', icon: FaAndroid },
    ],
  },
  {
    label: 'Desktop',
    skills: [
      { name: 'Java (Swing/JavaFX)', icon: FaJava },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQLite', icon: SiSqlite },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
];

const highlights = [
  { number: '5+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Learning' },
  { number: '10+', label: 'Technologies' },
];

export default function About() {
  const { darkMode } = useTheme();

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me and what drives my passion for technology"
    >
      {/* Highlights */}
      <motion.div
        className="grid grid-cols-3 gap-4 sm:gap-8 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {highlights.map((item, index) => (
          <motion.div
            key={item.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="gradient-text text-3xl sm:text-4xl font-bold mb-1">{item.number}</div>
            <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              {item.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Introduction Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-2xl p-8 border ${
            darkMode
              ? 'bg-dark-card/50 border-dark-border'
              : 'bg-gray-50/80 border-gray-100'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Who I Am
          </h3>
          <div className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <p>
              I&apos;m a <strong className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>BS Information Technology</strong> student
              with a strong passion for building technology that solves real-world problems. My journey
              in software development spans mobile app development, web development, and desktop
              applications.
            </p>
            <p>
              I specialize in creating intuitive, scalable, and user-focused digital solutions. Whether
              it&apos;s a full-stack web application, a mobile app, or a Java desktop system, I bring
              dedication and creativity to every project I work on.
            </p>
            <p>
              I&apos;m constantly learning and exploring new technologies to stay at the forefront of
              the ever-evolving tech landscape. My goal is to leverage technology to make a meaningful
              impact in people&apos;s lives.
            </p>
          </div>
        </motion.div>

        {/* Quick Skills Overview */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`rounded-2xl p-8 border ${
            darkMode
              ? 'bg-dark-card/50 border-dark-border'
              : 'bg-gray-50/80 border-gray-100'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Tech Stack
          </h3>
          <div className="space-y-5">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          darkMode
                            ? 'bg-dark-card border border-dark-border text-gray-300 hover:border-primary/30 hover:bg-primary/5'
                            : 'bg-white border border-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5'
                        }`}
                      >
                        <Icon className="text-primary" size={14} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
