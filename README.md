# Live Demo: [Click Here](https://currency-converter-khaki-chi-25.vercel.app/)


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




### API Endpoints

The app automatically detects the environment:

- **Local**: Uses direct API calls (http://localhost)
- **Deployed**: Uses backend routes (/api/rates, /api/country)


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
