# 🎰 Gacha System

The heart of MiniGarage. Spin to win rare cars or collecting parts.

---

## 🎲 Core Mechanics

MiniGarage uses a **Gacha Box** system. You pay **IDRX (in-game currency)** to open a box, and you receive a random NFT reward.

### 4 Box Tiers
Higher tiers cost more but contain better rewards.

<table data-card-size="large" data-view="cards">
<thead><tr><th></th><th></th><th></th></tr></thead>
<tbody>
<tr>
<td><strong>🥉 Standard Box</strong></td>
<td>25,000 IDRX</td>
<td>Best for beginners</td>
</tr>
<tr>
<td><strong>🥈 Rare Box</strong></td>
<td>30,000 IDRX</td>
<td>Higher chance of Rare items</td>
</tr>
<tr>
<td><strong>🥇 Premium Box</strong></td>
<td>35,000 IDRX</td>
<td>Includes Epic items</td>
</tr>
<tr>
<td><strong>💎 Legendary Box</strong></td>
<td>50,000 IDRX</td>
<td>Win the rarest cars!</td>
</tr>
</tbody>
</table>

> **💡 Mental Model:** `25,000 IDRX` ≈ `Rp 25.000` (Affordable entry point).

---

## 📊 Probabilities

Every spin has two possible outcomes:

1.  **🚗 Complete Car NFT** (Instant Win)
    *   **Chance:** ~20%
    *   **Result:** A fully assembled car is minted to your wallet. You own it immediately.

2.  **🧩 Fragment NFT** (Progress)
    *   **Chance:** ~80%
    *   **Result:** A specific car part (e.g., Engine, Body) is minted. Collect 5 to craft a full car!

> **Why Fragments?** They ensure you *always get something valuable*. Even a "bad roll" gives you progress toward a guaranteed car.

---

## ⚡ Gasless Spinning

We removed the friction of crypto transactions.

1.  **Approve IDRX:** One-time signature to authorize spending.
2.  **Spin:** Click the button.
3.  **Backend Pays Gas:** Our server pays the network fee to process your spin.
4.  **Instant Reveal:** See your reward immediately.

---

## 🛡️ Fairness

Currently, our RNG (Random Number Generator) runs on a verifiable backend service. In the future roadmap, we will implement **Chainlink VRF** for fully on-chain provable fairness.

All results are recorded on the **Base Sepolia blockchain**, so you can verify every item you receive.
