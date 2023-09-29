/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bricolageGrotesque: ["Bricolage Grotesque", "san-serif"],
      },
      colors: {
        primary: "hsl(199, 72%, 67%)",
        secondary: "hsl(200, 71%, 15%)",
        accent: "hsl(199, 72%, 55%)",
        text: "hsl(199, 73%, 94%)",
        background: "hsl(198, 72%, 7%)",
      },
    },
  },
  plugins: [],
};
