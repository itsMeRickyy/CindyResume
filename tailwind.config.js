/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins"],
        JakartaSans: ["Plus Jakarta Sans"],
        Raleway: ["Raleway"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
