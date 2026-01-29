function withValidProperties(properties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
  );
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || "https://minigarageapp.vercel.app";

  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjI1MTk4NDgsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg2NTk2OWVGMGFGQzk4RmQ4YzMxMDgxQ0NBNENkMDc1NUFGMTc2MjNCIn0",
      payload: "eyJkb21haW4iOiJtaW5pZ2FyYWdlYXBwLnZlcmNlbC5hcHAifQ",
      signature: "JSLffvo0IoMqfQZMz94lWJjNSOR2Hn3IO1Vb7Sb2jU8WHMNg7vCsBuqC7+JvcB5OH5yFDB+j764fxb/lAecSABs="
    },
    miniapp: {
      version: "1",
      name: "MiniGarage",
      subtitle: "NFT Car Collection on Base",
      description: "Collect, race, and own digital collectible cars as NFTs on Base blockchain. Your personal garage of legendary racing machines.",
      screenshotUrls: [
        `${URL}/screenshots/home.png`,
        `${URL}/screenshots/gacha.png`,
        `${URL}/screenshots/inventory.png`
      ],
      iconUrl: `${URL}/icons/icon-512.png`,
      splashImageUrl: `${URL}/icons/icon-512.png`,
      splashBackgroundColor: "#ff7a00",
      homeUrl: URL,
      webhookUrl: `${URL}/api/webhook`,
      primaryCategory: "social",
      tags: ["nft", "cars", "racing", "collectibles", "base"],
      heroImageUrl: `${URL}/icons/icon-512.png`,
      tagline: "Your digital car collection",
      ogTitle: "MiniGarage - NFT Cars",
      ogDescription: "Collect, race, and own digital collectible cars as NFTs on Base blockchain",
      ogImageUrl: `${URL}/icons/icon-512.png`,
      noindex: false
    }
  };

  return Response.json(withValidProperties(manifest));
}
