import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "MiniGarage - NFT Car Collection on Base",
  description: "Collect, race, and own digital collectible cars as NFTs on Base blockchain. Your personal garage of legendary racing machines.",
  applicationName: "MiniGarage",
  manifest: "/manifest.webmanifest",
  themeColor: "#ff7a00",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/icons/icon-512.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
