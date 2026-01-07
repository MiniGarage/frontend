import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Base Wheels - NFT Car Collection",
  description: "Collect, build, and own real toy cars as NFTs on Base blockchain. The ultimate Hot Wheels digital collection.",
  applicationName: "Base Wheels",
  manifest: "/manifest.webmanifest",
  themeColor: "#ff7a00",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/icons/icon.svg",
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
