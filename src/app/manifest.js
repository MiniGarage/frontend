export default function manifest() {
  return {
    name: "Base Privy Gateway",
    short_name: "Base",
    description: "Next.js + Tailwind + PWA starter with Privy auth.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e7",
    theme_color: "#0f766e",
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
