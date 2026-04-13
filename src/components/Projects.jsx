import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';
import SectionWrapper from './SectionWrapper.jsx';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

/**
 * Projects - Displays portfolio projects in a responsive card grid.
 * Each card shows title, description, tech stack, features, and action buttons.
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
            className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              darkMode
                ? 'bg-dark-card border-gray-700 hover:border-gray-600'
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Project Image Placeholder */}
            <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
              <span className="text-white text-lg font-bold text-center px-4 relative z-10">
                {project.title}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-3 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-0.5 rounded text-xs font-medium ${
                      darkMode
                        ? 'bg-primary/10 text-primary-light'
                        : 'bg-primary/10 text-primary-dark'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className={`text-xs space-y-1 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    darkMode
                      ? 'bg-primary/20 text-primary-light hover:bg-primary/30'
                      : 'bg-primary/10 text-primary-dark hover:bg-primary/20'
                  }`}
                >
                  <FaExternalLinkAlt size={12} />
                  View Demo
                </button>
                <button
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    darkMode
                      ? 'border-gray-600 text-gray-300 hover:bg-white/5'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaGithub size={14} />
                  View Code
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
