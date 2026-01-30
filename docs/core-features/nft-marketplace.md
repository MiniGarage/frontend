# 🏪 NFT Marketplace

Trade, sell, and expand your collection in our peer-to-peer marketplace.

---

## 📈 Trading Features

The MiniGarage Marketplace is designed for **collectors** to exchange items easily.

*   **List Your Items:** Sell duplicate cars or spare fragments for IDRX.
*   **Buy Missing Pieces:** Find the exact Engine or Wheels you need to complete a set.
*   **Transparent Pricing:** See real-time market prices set by other players.

---

## 💰 Fees & Economics

<table data-card-size="large" data-view="cards">
<thead><tr><th></th><th></th></tr></thead>
<tbody>
<tr>
<td><strong>Listing Fee</strong></td>
<td><strong>Free</strong></td>
</tr>
<tr>
<td><strong>Transactions</strong></td>
<td><strong>Gasless</strong></td>
</tr>
<tr>
<td><strong>Service Fee</strong></td>
<td><strong>2.5%</strong> (Deducted from sale)</td>
</tr>
<tr>
<td><strong>Currency</strong></td>
<td><strong>IDRX</strong> Only</td>
</tr>
</tbody>
</table>

> **♻️ Economic Loop:** Fees collected are sent to the **Treasury** to fund gas sponsorship and future rewards.

---

## ⚡ How It Works (Atomic Swap)

Our marketplace uses a secure **Atomic Swap** mechanism. This means the exchange happens instantly and safely in a single transaction.

1.  **Seller Lists Item:** You sign a permission to sell your NFT for a specific price (e.g., 50,000 IDRX). The NFT stays in your wallet until sold.
2.  **Buyer Purchases:** The buyer clicks "Buy".
3.  **Swap Happens:**
    *   Buyer sends 50,000 IDRX.
    *   Seller receives 48,750 IDRX (97.5%).
    *   Treasury receives 1,250 IDRX (2.5%).
    *   Buyer receives the NFT.

> **🔒 Security:** If the buyer doesn't have enough IDRX, the transaction fails. No one loses anything.

---

## 🔍 Smart Contract

**Contract:** `Marketplace.sol`

The marketplace contract handles the logic for listings and sales. It interacts directly with the `MockIDRX` and `CarNFT`/`FragmentNFT` contracts.

```solidity
function buyItem(uint256 listingId) external {
    // 1. Check buyer balance
    // 2. Transfer IDRX from Buyer -> Seller
    // 3. Transfer NFT from Seller -> Buyer
    // 4. Emit ItemSold event
}
```
