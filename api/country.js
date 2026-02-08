// api/country.js - Vercel Serverless Function

export default async function handler(req, res) {
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
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await response.json();

        if (response.ok && data && data.length > 0) {
            return res.status(200).json({
                success: true,
                data: data[0]
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
}
