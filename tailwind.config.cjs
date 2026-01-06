module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        ink: "#1a1a18",
        parchment: "#f7f1e7",
        ember: "#ff7a59",
        tide: "#0f766e",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(15, 118, 110, 0.15), 0 25px 80px -40px rgba(15, 118, 110, 0.45)",
      },
    },
  },
  plugins: [],
};
