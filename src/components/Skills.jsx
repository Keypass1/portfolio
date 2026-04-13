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
  FaGitAlt,
} from 'react-icons/fa';
import { SiMysql, SiSqlite, SiFirebase, SiTailwindcss, SiVite } from 'react-icons/si';

/**
 * Skills - Categorized skills display with icons and animated progress bars.
 */

const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 90 },
      { name: 'CSS3', icon: FaCss3Alt, level: 85 },
      { name: 'JavaScript', icon: FaJsSquare, level: 80 },
      { name: 'React', icon: FaReact, level: 75 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80 },
    ],
  },
  {
    title: 'Backend Development',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'PHP', icon: FaPhp, level: 75 },
      { name: 'Node.js', icon: FaNodeJs, level: 65 },
    ],
  },
  {
    title: 'Mobile Development',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'MIT App Inventor', icon: FaAndroid, level: 85 },
      { name: 'Android', icon: FaAndroid, level: 70 },
    ],
  },
  {
    title: 'Desktop Applications',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Java (Swing/JavaFX)', icon: FaJava, level: 85 },
      { name: 'Python', icon: FaPython, level: 75 },
    ],
  },
  {
    title: 'Tools & Databases',
    color: 'from-rose-500 to-pink-500',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 80 },
      { name: 'Firebase', icon: SiFirebase, level: 80 },
      { name: 'MySQL', icon: SiMysql, level: 75 },
      { name: 'SQLite', icon: SiSqlite, level: 75 },
      { name: 'Vite', icon: SiVite, level: 70 },
    ],
  },
];

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className={`rounded-xl border p-6 transition-all duration-300 hover:shadow-lg ${
              darkMode
                ? 'bg-dark-card border-gray-700 hover:border-gray-600'
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>
            </div>

            {/* Skills List with Progress Bars */}
            <div className="space-y-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className={darkMode ? 'text-gray-400' : 'text-gray-500'} size={16} />
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-xs font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
