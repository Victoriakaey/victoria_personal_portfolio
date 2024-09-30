import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    "font-bold",
    "mb-1 sm:mb-4",
    "font-semibold text-3xl sm:text-5xl",
    "italic font-light text-md sm:text-2xl",
    "underline",
    "underline-offset-4",
    "hover:text-blue-500",
  ],
  plugins: [],
  darkMode: "class",
}
export default config
