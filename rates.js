// Vercel Serverless Function for Currency Rates
// This runs on the backend and avoids CORS issues

const EXCHANGE_API_KEY = 'c3cc086ab6a41d94c34e6f2a';
const EXCHANGE_API_URL = `https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}`;
const BACKUP_API_URL = 'https://api.exchangerate-api.com/v4/latest';

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { base = 'USD' } = req.query;

    try {
        // Try primary API
        let response = await fetch(`${EXCHANGE_API_URL}/latest/${base}`);
        let data = await response.json();

        if (response.ok && data.result === 'success') {
            return res.status(200).json({
                success: true,
                base: base,
                rates: data.conversion_rates,
                timestamp: data.time_last_update_utc,
                source: 'primary'
            });
        }

        // Fallback to backup API
        console.log('Primary API failed, trying backup...');
        response = await fetch(`${BACKUP_API_URL}/${base}`);
        data = await response.json();

        if (data && data.rates) {
            return res.status(200).json({
                success: true,
                base: base,
                rates: data.rates,
                timestamp: data.date,
                source: 'backup'
            });
        }

        // If both fail, return static fallback rates
        const fallbackRates = {
            'USD': 1, 'EUR': 0.92, 'GBP': 0.79, 'JPY': 149.50, 'INR': 83.25,
            'AUD': 1.52, 'CAD': 1.36, 'CHF': 0.88, 'CNY': 7.24, 'MXN': 17.05,
            'BRL': 4.96, 'ZAR': 18.75, 'RUB': 92.50, 'KRW': 1320.00, 'SGD': 1.34,
            'HKD': 7.82, 'NOK': 10.65, 'SEK': 10.45, 'DKK': 6.86, 'NZD': 1.65,
            'THB': 35.50, 'MYR': 4.65, 'IDR': 15650, 'PHP': 56.50, 'PLN': 4.05,
            'CZK': 23.15, 'HUF': 365, 'ILS': 3.65, 'TRY': 32.50, 'AED': 3.67,
            'SAR': 3.75, 'EGP': 48.50, 'ARS': 985, 'CLP': 975, 'COP': 4150,
            'VND': 24500, 'PKR': 278, 'BDT': 110, 'NGN': 1475, 'KES': 155,
            'GHS': 15.50, 'UAH': 41.25
        };

        return res.status(200).json({
            success: true,
            base: base,
            rates: fallbackRates,
            timestamp: new Date().toISOString(),
            source: 'fallback',
            message: 'Using cached rates - API temporarily unavailable'
        });

    } catch (error) {
        console.error('API Error:', error);
        
        // Return fallback rates even on error
        const fallbackRates = {
            'USD': 1, 'EUR': 0.92, 'GBP': 0.79, 'JPY': 149.50, 'INR': 83.25,
            'AUD': 1.52, 'CAD': 1.36, 'CHF': 0.88, 'CNY': 7.24, 'MXN': 17.05,
            'BRL': 4.96, 'ZAR': 18.75, 'RUB': 92.50, 'KRW': 1320.00, 'SGD': 1.34
        };

        return res.status(200).json({
            success: true,
            base: base,
            rates: fallbackRates,
            timestamp: new Date().toISOString(),
            source: 'fallback',
            message: 'Using cached rates - Network error'
        });
    }
};
