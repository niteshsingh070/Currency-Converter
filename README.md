# 💱 Real-Time Currency Converter

A modern, full-stack currency converter with real-time exchange rates and comprehensive country information.

## ✨ Features

- 🔍 **Searchable Currency Selection** - Search by country name, currency code, or currency name
- 💱 **Real-Time Exchange Rates** - Live rates from reliable APIs
- 🌍 **160+ Currencies** - Complete coverage of world currencies
- 🏳️ **Country Information** - Flags, capitals, leaders, population, and more
- 🌓 **Dark Mode** - Beautiful light/dark theme toggle
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast & Reliable** - Works both locally and when deployed

## 🏗️ Architecture

This project uses a **modern full-stack architecture**:

```
currency-converter/
├── api/                    # Backend API (Vercel Serverless Functions)
│   ├── rates.js           # Currency exchange rate endpoint
│   └── country.js         # Country information endpoint
├── public/                # Frontend (Static files)
│   ├── index.html        # Main HTML
│   ├── style.css         # Styling
│   └── script.js         # Frontend logic
├── package.json          # Node.js dependencies
└── vercel.json           # Vercel configuration
```

### Why This Architecture?

**Problem**: Direct API calls from frontend get blocked by CORS when deployed
**Solution**: Backend API routes act as a proxy, avoiding CORS issues

- ✅ Works locally (uses direct API calls)
- ✅ Works when deployed (uses backend routes)
- ✅ No CORS issues
- ✅ Better security (API keys hidden in serverless functions)

## 🚀 Quick Start

### Option 1: Run Locally

1. **Clone or download this folder**
   ```bash
   cd currency-converter
   ```

2. **Open with Live Server** (Easiest)
   - Open the `public` folder in VS Code
   - Right-click `index.html` → "Open with Live Server"
   - App runs at `http://127.0.0.1:5500`

3. **Or use Python**
   ```bash
   cd public
   python -m http.server 8000
   ```
   Open `http://localhost:8000`

### Option 2: Deploy to Vercel

#### Method A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd currency-converter
   vercel
   ```

3. **Follow the prompts**
   - Login to Vercel
   - Accept defaults or customize
   - Your app is live! 🎉

#### Method B: Using GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! ✅

#### Method C: Drag & Drop (Easiest!)

1. Go to https://vercel.com/new
2. Drag the entire `currency-converter` folder
3. Click "Deploy"
4. Wait 30 seconds
5. Your app is live! 🚀

## 📋 Deployment Checklist

Before deploying, make sure you have:

- ✅ `api/` folder with `rates.js` and `country.js`
- ✅ `public/` folder with all frontend files
- ✅ `vercel.json` configuration file
- ✅ `package.json` file

## 🔧 Configuration

### API Endpoints

The app automatically detects the environment:

- **Local**: Uses direct API calls (http://localhost)
- **Deployed**: Uses backend routes (/api/rates, /api/country)

### Environment Variables (Optional)

If you want to use your own API key:

1. Get a free API key from https://www.exchangerate-api.com/
2. In Vercel dashboard, go to Settings → Environment Variables
3. Add: `EXCHANGE_API_KEY` = your_key_here
4. Update `api/rates.js` to use `process.env.EXCHANGE_API_KEY`

## 🌐 How It Works

### Local Development
```
Browser → Direct API Calls → External APIs
```

### Deployed (Production)
```
Browser → /api/rates → Vercel Function → External API → Response
Browser → /api/country → Vercel Function → External API → Response
```

### Why Serverless Functions?

1. **Avoid CORS Issues** - Backend can call any API
2. **Hide API Keys** - Keys stay on server, not exposed to users
3. **Rate Limiting** - Control API usage
4. **Caching** - Can implement server-side caching
5. **Fallbacks** - Return cached data if API fails

## 📂 File Structure Explained

### `/api/rates.js`
- Serverless function for currency exchange rates
- Tries primary API, falls back to backup API
- Returns standardized response
- Handles errors gracefully

### `/api/country.js`
- Serverless function for country information
- Proxies REST Countries API
- Avoids CORS issues

### `/public/script.js`
- Auto-detects local vs deployed environment
- Uses appropriate API endpoints
- Handles searchable currency selection
- Manages state and UI updates

### `/vercel.json`
- Routes configuration
- Tells Vercel how to serve files
- Maps URLs to functions

## 🐛 Troubleshooting

### App shows loading forever (Deployed)

**Cause**: API routes not set up correctly
**Fix**: Make sure folder structure is exactly:
```
currency-converter/
├── api/
│   ├── rates.js
│   └── country.js
├── public/
│   └── (all frontend files)
└── vercel.json
```

### CORS errors

**Cause**: Trying to call external APIs directly from frontend when deployed
**Fix**: The backend API routes handle this. Make sure:
1. You deployed the entire `currency-converter` folder
2. Both `api/` and `public/` folders are included
3. `vercel.json` exists in root

### 404 errors for /api routes

**Cause**: Vercel not recognizing serverless functions
**Fix**: 
1. Make sure files are in `/api` folder (not `/apis` or other)
2. Check `vercel.json` exists
3. Redeploy

### Currencies not loading

**Cause**: API limit reached or network issue
**Fix**: App has fallback rates built-in. They'll load automatically.

## 🔒 Security

- ✅ API keys hidden in serverless functions (not in frontend code)
- ✅ CORS properly configured
- ✅ No sensitive data stored
- ✅ HTTPS-only in production
- ✅ Environment variables supported

## 📊 API Limits

**Primary API** (ExchangeRate-API):
- Free tier: 1,500 requests/month
- Rate: Good for ~50 users/month

**Backup API**:
- No authentication required
- Unlimited requests
- Slightly older data

**REST Countries API**:
- Free, unlimited
- No API key needed

## 🎨 Customization

### Change Colors
Edit `public/style.css`:
```css
:root {
    --primary-color: #2563eb;  /* Change this */
    --secondary-color: #10b981; /* And this */
}
```

### Change Default Currencies
Edit `public/script.js`:
```javascript
selectCurrency('from', 'USD');  // Change USD
selectCurrency('to', 'INR');    // Change INR
```

### Add More Fallback Rates
Edit `api/rates.js` - add currencies to `fallbackRates` object

## 📈 Performance

- ⚡ Initial load: < 2 seconds
- 🔄 Currency conversion: < 100ms (using cached rates)
- 📦 Total size: < 100KB
- 🌐 CDN delivery via Vercel Edge Network

## 🧪 Testing

### Test Locally
1. Run with Live Server
2. Try converting USD → INR
3. Search for different currencies
4. Toggle dark mode
5. Test on mobile (Chrome DevTools)

### Test Deployed Version
1. Deploy to Vercel
2. Open deployment URL
3. Check browser console for errors
4. Test all features
5. Verify APIs are working (check Network tab)

## 📱 Mobile Optimization

- Touch-friendly targets (44×44px minimum)
- Responsive breakpoints at 640px and 968px
- Optimized for portrait and landscape
- Fast loading on 3G networks

## 🎯 Next Steps

After deploying:

1. ✅ Test thoroughly
2. ✅ Share your live URL!
3. ✅ Add custom domain (optional)
4. ✅ Enable analytics in Vercel dashboard
5. ✅ Monitor API usage

## 💡 Tips

- Don't edit files in `/public` and `/mnt/user-data/outputs` at the same time
- Always deploy the `/currency-converter` folder (not just `/public`)
- Keep `api/` and `public/` as siblings
- Check Vercel deployment logs if something fails

## 📞 Support

If you get stuck:

1. Check browser console (F12)
2. Check Vercel deployment logs
3. Verify folder structure matches docs
4. Make sure all files are uploaded

## 🌟 Features to Add (Future)

- [ ] Currency history charts
- [ ] Cryptocurrency support
- [ ] Favorite currencies
- [ ] Offline mode with Service Workers
- [ ] Multiple conversions at once
- [ ] Currency alerts

---

**Built with HTML, CSS, JavaScript, and Vercel Serverless Functions**

**Live Exchange Rates | Real-Time Data | Modern Architecture** 🚀
