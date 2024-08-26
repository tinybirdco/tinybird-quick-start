import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tinybird: {
          'space-cadet': '#25283D',
          'independence': '#3F4154',
          'sonic-silver': '#717380',
          'emerald': '#1FCC83',
          'capri': '#00C1FF',
          'blue': '#2D27F7',
          'emerald-ice': '#27F795',
          'mustard': '#F8AC49',
          'white': '#F6F7F9',
          'gray-1': '#E8E9ED',
          'gray-2': '#CBCCD1',
          'gray-3': '#D6DBDC',
          'gray-4': '#A5A7B4',
          'gray-background': '#F6F7F9',
          'navbar-green': '#27F795',
        }
      }
    },
  },
  plugins: [],
};
export default config;
