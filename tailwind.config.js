/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(199, 72%, 67%)",
        secondary: "hsl(200, 71%, 15%)",
        accent: "hsl(199, 72%, 55%)",
      },
    },
  },
  plugins: [],
};
