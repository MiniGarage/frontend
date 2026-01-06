import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Base Privy Gateway",
  description: "Next.js + Tailwind + PWA starter with Privy auth.",
  applicationName: "Base Privy Gateway",
  manifest: "/manifest.webmanifest",
  themeColor: "#0f766e",
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
