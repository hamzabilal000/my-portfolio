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
        accent: '#22c55e',
        'accent-hover': '#16a34a',
        foreground: 'rgb(var(--text-foreground) / <alpha-value>)',
        'secondary-fg': 'rgb(var(--text-secondary) / <alpha-value>)',
        'muted-fg': 'rgb(var(--text-muted) / <alpha-value>)',
        'faint-fg': 'rgb(var(--text-faint) / <alpha-value>)',
        'theme-border': 'rgb(var(--border-color) / <alpha-value>)',
        'theme-border-light': 'rgb(var(--border-light) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
