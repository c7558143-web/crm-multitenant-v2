import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', 'html[class~="dark"]'],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
