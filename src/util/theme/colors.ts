const colors: Record<ColorThemeName, ThemeColors> = {
  light: {
    text: '#333',
    textMuted: '#777',
    textLight: '#fff',
    backgrounds: {
      default: '#fff',
      soft: '#f0f0f0',
      strong: '#444',
      primary: '#e03131',
      inverted: '#2a2a2a',
      secondary: '#4287f5',
      accent: '#ff9800',
    },
  },
  dark: {
    text: '#fff',
    textMuted: '#ccc',
    textLight: '#fff',
    backgrounds: {
      default: '#1a1a1a',
      soft: '#303030',
      strong: '#777',
      primary: '#e03131',
      inverted: '#fff',
      secondary: '#84b3ff',
      accent: '#ffa000',
    },
  },
};

export default colors;

export type ThemeColors = {
  text: string;
  textMuted: string;
  textLight: string;
  backgrounds: {
    /** white in light mode, dark in dark mode */
    default: string;
    soft: string;
    /** dark in light mode, light in dark mode */
    strong: string;
    primary: string;
    inverted: string;
    secondary: string;
    accent: string;
  };
};

export type ColorThemeName = 'light' | 'dark';
