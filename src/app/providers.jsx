"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId="cmjxyscmx03pulf0cadbpdmvq"
      config={{
        loginMethods: ["email", "wallet", "google", "twitter", "discord"],
        appearance: {
          theme: "light",
          accentColor: "#ff7a59",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
