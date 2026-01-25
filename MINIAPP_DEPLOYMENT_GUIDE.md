# MiniGarage - Base Mini App Deployment Guide

This guide covers the remaining steps to deploy and publish your Mini App to Base.

## ✅ Completed Steps (Local Development)

- ✅ Step 1: MiniApp SDK installed (`@farcaster/miniapp-sdk`)
- ✅ Step 2: Trigger App Display configured (`sdk.actions.ready()` in providers.jsx)
- ✅ Step 3: Manifest route handler created (`src/app/.well-known/farcaster.json/route.js`)
- ✅ Step 4: Embed metadata added (`fc:miniapp` in layout.jsx)

---

## 📋 Remaining Steps (After Deployment)

### Step 5: Create Account Association Credentials

**Important**: This step can ONLY be done after your app is deployed to production with a public URL.

#### Prerequisites:
- ✅ App deployed to production (Vercel, Netlify, etc.)
- ✅ Public domain URL available (e.g., `https://minigarage.vercel.app`)
- ✅ Base app account created
- ✅ Vercel Deployment Protection is OFF

#### Instructions:

1. **Deploy to Production**
   ```bash
   # Push to main branch (triggers auto-deploy on Vercel)
   git add .
   git commit -m "feat: add Base Mini App configuration"
   git push origin main
   ```

2. **Disable Vercel Deployment Protection**
   - Go to Vercel dashboard → Your Project
   - Navigate to: **Settings → Deployment Protection**
   - Toggle **"Vercel Authentication"** to **OFF**
   - Click **Save**

   > **Why?** Base Build needs public access to read your manifest file.

3. **Update Environment Variable**
   - Go to Vercel dashboard → Your Project
   - Navigate to: **Settings → Environment Variables**
   - Add or update: `NEXT_PUBLIC_URL` = `https://your-app.vercel.app`
   - Click **Save**
   - Redeploy your app

4. **Generate Account Association**
   - Visit: [https://www.base.dev/preview?tab=account](https://www.base.dev/preview?tab=account)
   - Paste your production URL in **App URL** field
     ```
     Example: minigarage.vercel.app (without https://)
     ```
   - Click **Submit**
   - Click **Verify** button
   - Follow the authentication flow to sign with your Base Account
   - Copy the generated `accountAssociation` object

5. **Update Manifest Route**
   - Open: `src/app/.well-known/farcaster.json/route.js`
   - Replace the empty `accountAssociation` object (lines 11-15) with your generated values:

   ```javascript
   accountAssociation: {
     header: "eyJmaWQiOjkxNTIsInR5cGU...", // Your generated header
     payload: "eyJkb21haW4iOiJhcHAuZXh...", // Your generated payload
     signature: "MHgwMDAwMDAwMDAwMDAwMD..." // Your generated signature
   }
   ```

6. **Push Updates**
   ```bash
   git add src/app/.well-known/farcaster.json/route.js
   git commit -m "feat: add account association credentials"
   git push origin main
   ```

---

### Step 6: Preview & Validate

After deploying with account association:

1. **Use Base Build Preview Tool**
   - Visit: [https://base.dev/preview](https://base.dev/preview)
   - Enter your app URL
   - Validate these tabs:
     - **Preview**: Check embed image and launch button
     - **Account**: Verify association is valid ✅
     - **Metadata**: Ensure all manifest fields are correct

2. **Test Locally First**
   - Before production, test your manifest endpoint:
     ```
     https://your-app.vercel.app/.well-known/farcaster.json
     ```
   - Should return JSON with `accountAssociation` and `miniapp` objects

3. **Common Issues & Fixes**

   | Issue | Solution |
   |-------|----------|
   | Manifest 404 | Check route.js file exists in correct path |
   | Empty accountAssociation | Complete Step 5 first |
   | Images not loading | Verify all image URLs are publicly accessible |
   | "Invalid signature" | Regenerate account association |

---

### Step 7: Prepare Assets

Before publishing, ensure you have quality assets:

1. **Screenshots** (Required)
   - Add to: `public/screenshots/`
   - Names: `screenshot1.png`, `screenshot2.png`, `screenshot3.png`
   - Size: 1080x1920 (portrait, mobile-optimized)
   - Format: PNG or JPG
   - Show your app's key features

2. **Icons** (Already exists)
   - `public/icons/icon-512.png` is already configured
   - Ensure it's a clear, recognizable icon

3. **Hero Image** (Optional but recommended)
   - Add: `public/hero.png`
   - Size: 1200x630 (for social sharing)
   - Update manifest route if adding custom hero

---

### Step 8: Update Manifest for Production

When ready to go live:

1. **Update noindex setting**
   - Open: `src/app/.well-known/farcaster.json/route.js`
   - Change `noindex: true` to `noindex: false`

   ```javascript
   miniapp: {
     // ... other fields
     noindex: false // ⚠️ Change this when ready to publish
   }
   ```

2. **Verify all fields are complete**
   - All URLs point to production domain
   - Screenshots are uploaded
   - Description is compelling
   - Tags are relevant

---

### Step 9: Publish to Base App

1. **Create a Post**
   - Open the Base app (mobile or web)
   - Create a new post
   - Paste your app URL: `https://your-app.vercel.app`
   - The embed should appear with your icon and launch button

2. **Test the Launch**
   - Click the "Launch MiniGarage" button in the embed
   - Verify app loads correctly
   - Test key features

3. **Share & Promote**
   - Share your post to reach more users
   - The app will be indexed for search & discovery
   - Monitor Base Build dashboard for analytics

---

## 🚀 Quick Deploy Checklist

Before deploying, verify:

- [ ] All code committed to git
- [ ] `NEXT_PUBLIC_URL` set correctly in .env
- [ ] Screenshots added to `public/screenshots/`
- [ ] App tested locally (`npm run dev`)
- [ ] No console errors
- [ ] Authentication flow works
- [ ] Core features functional

---

## 📚 Resources

- **Base Build Dashboard**: [https://base.dev](https://base.dev)
- **Preview Tool**: [https://base.dev/preview](https://base.dev/preview)
- **Documentation**: [https://docs.base.org](https://docs.base.org)
- **Mini Apps Docs**: [https://docs.base.org/mini-apps](https://docs.base.org/mini-apps)

---

## 🔧 Local Testing

To test manifest locally:

```bash
# Start dev server
npm run dev

# Visit manifest endpoint
http://localhost:3000/.well-known/farcaster.json

# Should return JSON with manifest configuration
```

---

## 📝 Notes

- **Account Association** signatures are long when using Base Account (vs Farcaster custody wallet)
- **noindex: true** during testing prevents indexing in Base search
- **Deployment Protection** must be OFF for Base Build to access your manifest
- **Screenshots** significantly improve conversion rates
- Test everything in preview tool before posting!

---

## ⚠️ Troubleshooting

### Manifest not found (404)
```bash
# Verify route file exists
ls src/app/.well-known/farcaster.json/route.js

# Check build output
npm run build
```

### Account association invalid
- Regenerate at base.dev/preview?tab=account
- Ensure you signed with correct account
- Verify no typos when copying

### Images not loading
- Check public URLs are accessible
- Verify NEXT_PUBLIC_URL is correct
- Test image URLs in browser

---

Good luck with your deployment! 🚀
