import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme.js';
import SectionWrapper from './SectionWrapper.jsx';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

/**
 * Contact - Contact form with validation and social links.
 */

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:cornelio.lantes@email.com',
    color: 'hover:text-red-500',
  },
];

export default function Contact() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Basic form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // In production, this would send data to a backend or email service
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const inputClasses = (fieldName) =>
    `w-full px-4 py-3 rounded-lg border text-sm transition-all outline-none ${
      errors[fieldName]
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
        : darkMode
        ? 'bg-dark-card border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20'
        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20'
    }`;

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to collaborate? Feel free to reach out!"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div
              className={`rounded-xl p-8 text-center border ${
                darkMode ? 'bg-dark-card border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Message Sent!
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses('name')}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={inputClasses('email')}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className={inputClasses('message')}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200"
              >
                <FaPaperPlane size={14} />
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Links & Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let&apos;s Connect
          </h3>
          <p className={`mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Feel free to reach out through any of the channels below.
          </p>

          {/* Social Links */}
          <div className="space-y-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group ${
                    darkMode
                      ? 'border-gray-700 hover:border-gray-600 hover:bg-dark-card'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      darkMode
                        ? 'bg-gray-800 text-gray-400 group-hover:text-primary-light'
                        : 'bg-gray-100 text-gray-500 group-hover:text-primary'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {link.name}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {link.url.replace('https://', '').replace('mailto:', '')}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
