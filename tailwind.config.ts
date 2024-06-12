import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-3xl": "1920px",
        "screen-4xl": "2560px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cch_text: "#010d11",
        cch_text_hover: "#23343b",
        cch_background: "#aee4fe",
        cch_primary: "#3ea4d6",
        cch_secondary: "#7eccf3",
        cch_accent: "#88a8b7",
      },
    },
  },
  plugins: [],
};
export default config;
