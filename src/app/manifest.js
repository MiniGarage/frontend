export default function manifest() {
  return {
    name: "Base Wheels - NFT Car Collection",
    short_name: "Base Wheels",
    description: "Collect, build, and own real toy cars as NFTs on Base blockchain.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0907",
    theme_color: "#ff7a00",
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
