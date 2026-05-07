import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac:    "#C0AFD3",
        "lilac-dark": "#9B88C0",
        "lilac-light": "#EDE8F5",
        sand:     "#E5D4BE",
        cream:    "#F4F1EA",
        sage:     "#8B9880",
        charcoal: "#31312F",
      },
      fontFamily: {
        playfair:   ["Playfair Display", "Georgia", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
