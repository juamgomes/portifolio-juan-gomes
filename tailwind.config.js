/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'zinc-main': '#141414',
        'blue': '#317BEA',
        'blue-2': '#045ABF',
        'branco': '#FFFFFF'

      }
    },
  },
  plugins: [],
}
