import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import { useTheme } from './context/useTheme.js';

/**
 * App component - Main layout with all sections rendered as a single-page app.
 * Uses React Router for potential future multi-page support.
 */
function App() {
  const { darkMode } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-dark-bg text-dark-text' : 'bg-white text-gray-900'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
