/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--bg-primary) / <alpha-value>)',
        secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
        card: 'rgb(var(--bg-card) / <alpha-value>)',
        accent: '#f5471f',
        'accent-hover': '#e03a12',
        accent2: '#5b4bf5',
        'accent2-hover': '#4a3ce0',
        foreground: 'rgb(var(--text-foreground) / <alpha-value>)',
        'secondary-fg': 'rgb(var(--text-secondary) / <alpha-value>)',
        'muted-fg': 'rgb(var(--text-muted) / <alpha-value>)',
        'faint-fg': 'rgb(var(--text-faint) / <alpha-value>)',
        'theme-border': 'rgb(var(--border-color) / <alpha-value>)',
        'theme-border-light': 'rgb(var(--border-light) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
