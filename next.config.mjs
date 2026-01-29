import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  turbopack: {}, // Required for Next.js 16 with Turbopack
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default withPWA(nextConfig);
