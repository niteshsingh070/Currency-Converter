# 🚀 Deployment Guide - Step by Step

## Why Your App Showed Loading on Vercel

**The Problem:**
When you deployed just the HTML/CSS/JS files, the browser tried to call external APIs directly. Vercel (and most hosting) blocks these calls for security (CORS policy).

**The Solution:**
We've created backend API routes that run on Vercel's servers. These make the API calls for you, then send the data back to your frontend.

## ✅ What's Different Now?

### Old Structure (Didn't Work on Vercel)
```
my-project/
├── index.html
├── style.css
└── script.js
```
❌ Script tries to call APIs directly → CORS error → Loading forever

### New Structure (Works Everywhere!)
```
currency-converter/
├── api/              ← Backend (serverless functions)
│   ├── rates.js
│   └── country.js
├── public/           ← Frontend (what users see)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── package.json
└── vercel.json
```
✅ Frontend → Your API → External API → Response → Frontend

## 📝 Deployment Steps

### Step 1: Prepare Your Project

1. **Download the new `currency-converter` folder**
   - This has the complete project with backend + frontend

2. **Verify folder structure**
   ```bash
   currency-converter/
   ├── api/
   │   ├── rates.js      ✓
   │   └── country.js    ✓
   ├── public/
   │   ├── index.html    ✓
   │   ├── style.css     ✓
   │   └── script.js     ✓
   ├── package.json      ✓
   └── vercel.json       ✓
   ```

### Step 2: Test Locally (Optional but Recommended)

```bash
cd currency-converter/public
python -m http.server 8000
```

Open http://localhost:8000 - should work perfectly!

### Step 3: Deploy to Vercel

#### Option A: Using Vercel CLI (Best)

```bash
# Install Vercel CLI (one time only)
npm install -g vercel

# Navigate to project
cd currency-converter

# Deploy!
vercel
```

**Follow the prompts:**
```
? Set up and deploy? [Y/n] Y
? Which scope? Your account name
? Link to existing project? [y/N] N
? What's your project's name? currency-converter
? In which directory is your code located? ./
```

Wait 30 seconds... Done! You'll get a URL like:
```
https://currency-converter-xyz123.vercel.app
```

#### Option B: GitHub + Vercel (Automatic)

1. **Create GitHub Repo**
   ```bash
   cd currency-converter
   git init
   git add .
   git commit -m "Initial commit with backend"
   ```

2. **Push to GitHub**
   - Create new repo on GitHub
   - Copy the commands GitHub gives you:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/currency-converter.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Select `currency-converter` repo
   - Click "Deploy"
   - ✅ Done!

#### Option C: Drag & Drop (Easiest!)

1. Go to https://vercel.com/new
2. Drag the entire `currency-converter` folder into the browser
3. Wait 30 seconds
4. ✅ App is live!

### Step 4: Verify Deployment

1. **Open your deployed URL**

2. **Check browser console (F12)**
   - Should see: "Environment: Deployed"
   - Should see: "API Base: /api"
   - Should NOT see CORS errors

3. **Test conversion**
   - Enter amount: 100
   - Select: United States (USD) → India (INR)
   - Click Convert
   - Should show result immediately!

4. **Test country search**
   - Click "From" field
   - Type "india"
   - Should see "India" option
   - Select it
   - Should see Indian flag and info

## 🔍 Debugging

### Issue: Still shows loading

**Check:**
1. Open browser console (F12)
2. Look for errors
3. Common fixes:

```javascript
// If you see "API Base: " (empty)
// It means vercel.json wasn't deployed

// If you see "CORS error"
// It means api/ folder wasn't deployed

// If you see "404 /api/rates"
// Check folder structure - must be /api not /apis
```

### Issue: No currencies loading

**Fix:**
```bash
# Redeploy with correct structure
vercel --force
```

### Issue: Country info not showing

**Check:**
- Open Network tab in browser (F12)
- Look for `/api/country` requests
- Should return 200 status
- If 404, check `api/country.js` exists

## 📊 Verify Backend is Working

### Test API endpoints directly:

1. **Test currency rates:**
   ```
   https://YOUR_APP.vercel.app/api/rates?base=USD
   ```
   Should return JSON with currency rates

2. **Test country info:**
   ```
   https://YOUR_APP.vercel.app/api/country?code=US
   ```
   Should return JSON with USA data

If these work but the app doesn't, the issue is in frontend code.
If these don't work, the issue is in backend deployment.

## ⚠️ Common Mistakes

### ❌ Wrong: Deploying only public/ folder
```
vercel deploy public/
```

### ✅ Right: Deploy the entire currency-converter/
```
cd currency-converter
vercel
```

---

### ❌ Wrong: Missing api/ folder
```
my-project/
├── index.html
└── script.js
```

### ✅ Right: Has both api/ and public/
```
currency-converter/
├── api/
└── public/
```

---

### ❌ Wrong: Files in wrong places
```
currency-converter/
├── index.html     ← Should be in public/
├── rates.js       ← Should be in api/
```

### ✅ Right: Correct structure
```
currency-converter/
├── api/rates.js
├── public/index.html
```

## 🎯 Success Checklist

After deployment, verify:

- [  ] App loads (no infinite loading)
- [  ] Can search for currencies
- [  ] Can select USD and INR
- [  ] Can enter amount and convert
- [  ] Shows correct exchange rate (e.g., 1 USD = 83.25 INR, not backwards!)
- [  ] Shows country flags
- [  ] Shows country information
- [  ] Dark mode toggle works
- [  ] Swap button works
- [  ] Responsive on mobile (test with Chrome DevTools)

## 🔄 Re-Deploying

If you make changes:

```bash
# Save your changes
git add .
git commit -m "Updated feature X"

# If using GitHub + Vercel
git push
# → Vercel auto-deploys!

# If using CLI only
vercel --prod
```

## 🆘 Need Help?

1. Check Vercel deployment logs:
   - Go to https://vercel.com/dashboard
   - Click your project
   - Click "Deployments"
   - Click latest deployment
   - Look for errors in logs

2. Check browser console:
   - F12 → Console tab
   - Look for red errors

3. Verify all files uploaded:
   - In Vercel dashboard
   - Click "Source" tab
   - Should see `/api` and `/public` folders

## 🎉 You're Done!

Your currency converter is now:
- ✅ Running on Vercel's global CDN
- ✅ Has a public URL you can share
- ✅ Updates automatically (if using GitHub)
- ✅ Works perfectly (no more loading issues!)

**Share your URL with friends! 🚀**

Example: https://currency-converter-abc123.vercel.app
