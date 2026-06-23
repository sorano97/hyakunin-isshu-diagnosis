import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        washi: "#f6f0e4",
        sumi: "#29251f",
        shu: "#a44332",
        enji: "#6f2e2b",
        kin: "#b9934a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Yu Mincho", "YuMincho", "serif"],
        sans: ["var(--font-sans)", "Hiragino Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 50px rgba(68, 49, 31, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
