# Cornelio G. Lantes Jr. — Developer Portfolio

A modern, professional developer portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Dark/Light Mode** — Toggle between themes with persistent preference
- **Smooth Animations** — Scroll-triggered animations powered by Framer Motion
- **Contact Form** — Form with client-side validation
- **Project Showcase** — Card grid layout with tech stacks and descriptions
- **Skills Section** — Categorized skills with animated progress bars
- **Sticky Navigation** — Fixed navbar with mobile hamburger menu and active section highlighting

## Tech Stack

- **React** (with React Router)
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **React Icons** for icons
- **Vite** for fast development and building

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── About.jsx     # About me section
│   ├── Contact.jsx   # Contact form & social links
│   ├── Footer.jsx    # Footer with links
│   ├── Hero.jsx      # Hero/landing section
│   ├── Navbar.jsx    # Sticky navigation bar
│   ├── Projects.jsx  # Project cards grid
│   ├── SectionWrapper.jsx  # Reusable section layout
│   └── Skills.jsx    # Skills with progress bars
├── context/
│   └── ThemeContext.jsx  # Dark/light mode state
├── assets/           # Static assets (images, etc.)
├── pages/            # Page components (for future routing)
├── App.jsx           # Main app layout
├── main.jsx          # Entry point
└── index.css         # Global styles & Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Keypass1/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel

1. Push to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and deploys

### GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm install -D vite-plugin-gh-pages
   ```
2. Set `base` in `vite.config.js` to your repo name (e.g., `'/portfolio/'`)
3. Run `npm run build` and deploy the `dist/` folder

## License

This project is open source and available under the [MIT License](LICENSE).
