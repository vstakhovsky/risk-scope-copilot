import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        risk: { DEFAULT: '#ef4444', 50:'#fef2f2' },
        scope: { DEFAULT: '#3b82f6', 50:'#eff6ff' },
        evidence: { DEFAULT: '#a855f7', 50:'#faf5ff' },
        adr: { DEFAULT: '#6b7280', 50:'#f3f4f6' },
      }
    },
  },
  plugins: [],
}
export default config
