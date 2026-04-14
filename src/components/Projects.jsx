import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';
import SectionWrapper from './SectionWrapper.jsx';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

/**
 * Projects - Displays portfolio projects in a modern card grid.
 * Each card shows title, description, tech stack, features, and action buttons.
 * Uses card-shine effect and gradient borders for modern feel.
 */

const projects = [
  {
    title: 'Kindergarten Management System',
    description:
      'A comprehensive mobile application for managing kindergarten operations including student enrollment, attendance tracking, and parent communication.',
    techStack: ['MIT App Inventor', 'Firebase', 'Cloud Storage'],
    features: [
      'Student enrollment & profile management',
      'Attendance tracking with reports',
      'Real-time parent notifications',
      'Cloud-based data storage',
    ],
    color: 'from-blue-500 to-cyan-500',
    emoji: '🎓',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'POS System',
    description:
      'A robust point-of-sale desktop application built with Java Swing, featuring inventory management, sales tracking, and receipt generation.',
    techStack: ['Java', 'Swing', 'SQLite', 'MySQL'],
    features: [
      'Product inventory management',
      'Sales transaction processing',
      'Receipt & report generation',
      'Multi-user access support',
    ],
    color: 'from-violet-500 to-purple-500',
    emoji: '💳',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'School Health Clinic Management System',
    description:
      'A Python-based desktop application for managing school health clinic records, patient visits, and medical inventory.',
    techStack: ['Python', 'Tkinter', 'SQLite', 'ReportLab'],
    features: [
      'Patient record management',
      'Visit history tracking',
      'Medical inventory management',
      'Report generation & export',
    ],
    color: 'from-emerald-500 to-teal-500',
    emoji: '🏥',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'RiceGuard',
    description:
      'An AI-powered mobile application that uses image recognition to detect and diagnose rice plant diseases, helping farmers protect their crops.',
    techStack: ['MIT App Inventor', 'TensorFlow Lite', 'Firebase', 'AI/ML'],
    features: [
      'AI-powered disease detection',
      'Image capture & analysis',
      'Disease information database',
      'Treatment recommendations',
    ],
    color: 'from-amber-500 to-orange-500',
    emoji: '🌾',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'SkillLink',
    description:
      'A local service marketplace platform connecting skilled workers with clients, featuring real-time booking and rating systems.',
    techStack: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    features: [
      'Service provider profiles',
      'Real-time booking system',
      'Rating & review system',
      'Location-based search',
    ],
    color: 'from-rose-500 to-pink-500',
    emoji: '🔗',
    demoUrl: '#',
    codeUrl: '#',
  },
];

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="A showcase of my recent work and personal projects"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group card-shine gradient-border rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
              darkMode
                ? 'bg-dark-card border-dark-border hover:shadow-primary/5'
                : 'bg-white border-gray-100 hover:shadow-gray-200/50'
            }`}
          >
            {/* Project Header with Gradient */}
            <div className={`relative h-40 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500" />
              <motion.span
                className="text-5xl relative z-10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {project.emoji}
              </motion.span>
              {/* Decorative circles */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/5" />
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-4 line-clamp-2 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      darkMode
                        ? 'bg-primary/10 text-primary-light border border-primary/20'
                        : 'bg-primary/5 text-primary border border-primary/10'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className={`text-xs space-y-1.5 mb-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-[10px]">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View demo of ${project.title}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <FaExternalLinkAlt size={11} />
                  Demo
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${project.title}`}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                    darkMode
                      ? 'border-dark-border text-gray-300 hover:border-primary/30 hover:text-primary-light hover:bg-primary/5'
                      : 'border-gray-200 text-gray-600 hover:border-primary/30 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <FaGithub size={14} />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
