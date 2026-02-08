// Vercel Serverless Function for Country Information
// This proxies requests to REST Countries API to avoid CORS issues

const https = require('https');

// Helper function to make HTTPS requests
function httpsGet(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    resolve({ ok: res.statusCode === 200, data: JSON.parse(data) });
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { code } = req.query;

    if (!code) {
        return res.status(400).json({ 
            success: false, 
            error: 'Country code is required' 
        });
    }

    try {
        const result = await httpsGet(`https://restcountries.com/v3.1/alpha/${code}`);

        if (result.ok && result.data && result.data.length > 0) {
            return res.status(200).json({
                success: true,
                data: result.data[0]
            });
        }

        return res.status(404).json({
            success: false,
            error: 'Country not found'
        });

    } catch (error) {
        console.error('Country API Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch country information'
        });
    }
};
