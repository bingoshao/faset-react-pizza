/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   pizza:"#123456",
      // },
      fontSize: {
        huge:['80rem','1.2']
      },
      height: {
        screen: '100dvh'
      }
    },

  },
  plugins: [],
}

