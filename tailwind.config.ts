import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belano: ["Belanosima", "sans - serif"],
      },
      screens: {
        mm: "550px",
        xlg: "850px",
      },
      colors: {
        primary: "#525FE1",
      },
    },
  },
  plugins: [],
};
export default config;
