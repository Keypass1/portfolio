import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

/**
 * Custom hook to access the theme context (dark mode state and toggle).
 */
export const useTheme = () => useContext(ThemeContext);
