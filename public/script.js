// Auto-detect environment (local vs deployed)
const isLocal = window.location.hostname === 'localhost' || 
                 window.location.hostname === '127.0.0.1' ||
                 window.location.hostname === '';

// API endpoints based on environment
const API_BASE = isLocal ? '' : '/api';

console.log('Environment:', isLocal ? 'Local' : 'Deployed');
console.log('API Base:', API_BASE || 'Direct API calls');

// Complete Currency and Country Data
const currencyData = {
    'AED': { country: 'United Arab Emirates', code: 'AE', name: 'UAE Dirham', symbol: 'د.إ' },
    'AFN': { country: 'Afghanistan', code: 'AF', name: 'Afghan Afghani', symbol: '؋' },
    'ALL': { country: 'Albania', code: 'AL', name: 'Albanian Lek', symbol: 'L' },
    'AMD': { country: 'Armenia', code: 'AM', name: 'Armenian Dram', symbol: '֏' },
    'ANG': { country: 'Netherlands Antilles', code: 'AN', name: 'Antillean Guilder', symbol: 'ƒ' },
    'AOA': { country: 'Angola', code: 'AO', name: 'Angolan Kwanza', symbol: 'Kz' },
    'ARS': { country: 'Argentina', code: 'AR', name: 'Argentine Peso', symbol: '$' },
    'AUD': { country: 'Australia', code: 'AU', name: 'Australian Dollar', symbol: '$' },
    'AWG': { country: 'Aruba', code: 'AW', name: 'Aruban Florin', symbol: 'ƒ' },
    'AZN': { country: 'Azerbaijan', code: 'AZ', name: 'Azerbaijani Manat', symbol: '₼' },
    'BAM': { country: 'Bosnia and Herzegovina', code: 'BA', name: 'Bosnia Mark', symbol: 'KM' },
    'BBD': { country: 'Barbados', code: 'BB', name: 'Barbadian Dollar', symbol: '$' },
    'BDT': { country: 'Bangladesh', code: 'BD', name: 'Bangladeshi Taka', symbol: '৳' },
    'BGN': { country: 'Bulgaria', code: 'BG', name: 'Bulgarian Lev', symbol: 'лв' },
    'BHD': { country: 'Bahrain', code: 'BH', name: 'Bahraini Dinar', symbol: '.د.ب' },
    'BIF': { country: 'Burundi', code: 'BI', name: 'Burundian Franc', symbol: 'Fr' },
    'BMD': { country: 'Bermuda', code: 'BM', name: 'Bermudian Dollar', symbol: '$' },
    'BND': { country: 'Brunei', code: 'BN', name: 'Brunei Dollar', symbol: '$' },
    'BOB': { country: 'Bolivia', code: 'BO', name: 'Bolivian Boliviano', symbol: 'Bs.' },
    'BRL': { country: 'Brazil', code: 'BR', name: 'Brazilian Real', symbol: 'R$' },
    'BSD': { country: 'Bahamas', code: 'BS', name: 'Bahamian Dollar', symbol: '$' },
    'BTN': { country: 'Bhutan', code: 'BT', name: 'Bhutanese Ngultrum', symbol: 'Nu.' },
    'BWP': { country: 'Botswana', code: 'BW', name: 'Botswana Pula', symbol: 'P' },
    'BYN': { country: 'Belarus', code: 'BY', name: 'Belarusian Ruble', symbol: 'Br' },
    'BZD': { country: 'Belize', code: 'BZ', name: 'Belize Dollar', symbol: '$' },
    'CAD': { country: 'Canada', code: 'CA', name: 'Canadian Dollar', symbol: '$' },
    'CDF': { country: 'Democratic Republic of Congo', code: 'CD', name: 'Congolese Franc', symbol: 'Fr' },
    'CHF': { country: 'Switzerland', code: 'CH', name: 'Swiss Franc', symbol: 'Fr' },
    'CLP': { country: 'Chile', code: 'CL', name: 'Chilean Peso', symbol: '$' },
    'CNY': { country: 'China', code: 'CN', name: 'Chinese Yuan', symbol: '¥' },
    'COP': { country: 'Colombia', code: 'CO', name: 'Colombian Peso', symbol: '$' },
    'CRC': { country: 'Costa Rica', code: 'CR', name: 'Costa Rican Colón', symbol: '₡' },
    'CUP': { country: 'Cuba', code: 'CU', name: 'Cuban Peso', symbol: '$' },
    'CVE': { country: 'Cape Verde', code: 'CV', name: 'Cape Verdean Escudo', symbol: '$' },
    'CZK': { country: 'Czech Republic', code: 'CZ', name: 'Czech Koruna', symbol: 'Kč' },
    'DJF': { country: 'Djibouti', code: 'DJ', name: 'Djiboutian Franc', symbol: 'Fr' },
    'DKK': { country: 'Denmark', code: 'DK', name: 'Danish Krone', symbol: 'kr' },
    'DOP': { country: 'Dominican Republic', code: 'DO', name: 'Dominican Peso', symbol: '$' },
    'DZD': { country: 'Algeria', code: 'DZ', name: 'Algerian Dinar', symbol: 'د.ج' },
    'EGP': { country: 'Egypt', code: 'EG', name: 'Egyptian Pound', symbol: '£' },
    'ERN': { country: 'Eritrea', code: 'ER', name: 'Eritrean Nakfa', symbol: 'Nfk' },
    'ETB': { country: 'Ethiopia', code: 'ET', name: 'Ethiopian Birr', symbol: 'Br' },
    'EUR': { country: 'European Union', code: 'EU', name: 'Euro', symbol: '€' },
    'FJD': { country: 'Fiji', code: 'FJ', name: 'Fijian Dollar', symbol: '$' },
    'FKP': { country: 'Falkland Islands', code: 'FK', name: 'Falkland Pound', symbol: '£' },
    'FOK': { country: 'Faroe Islands', code: 'FO', name: 'Faroese Króna', symbol: 'kr' },
    'GBP': { country: 'United Kingdom', code: 'GB', name: 'British Pound', symbol: '£' },
    'GEL': { country: 'Georgia', code: 'GE', name: 'Georgian Lari', symbol: '₾' },
    'GGP': { country: 'Guernsey', code: 'GG', name: 'Guernsey Pound', symbol: '£' },
    'GHS': { country: 'Ghana', code: 'GH', name: 'Ghanaian Cedi', symbol: '₵' },
    'GIP': { country: 'Gibraltar', code: 'GI', name: 'Gibraltar Pound', symbol: '£' },
    'GMD': { country: 'Gambia', code: 'GM', name: 'Gambian Dalasi', symbol: 'D' },
    'GNF': { country: 'Guinea', code: 'GN', name: 'Guinean Franc', symbol: 'Fr' },
    'GTQ': { country: 'Guatemala', code: 'GT', name: 'Guatemalan Quetzal', symbol: 'Q' },
    'GYD': { country: 'Guyana', code: 'GY', name: 'Guyanese Dollar', symbol: '$' },
    'HKD': { country: 'Hong Kong', code: 'HK', name: 'Hong Kong Dollar', symbol: '$' },
    'HNL': { country: 'Honduras', code: 'HN', name: 'Honduran Lempira', symbol: 'L' },
    'HRK': { country: 'Croatia', code: 'HR', name: 'Croatian Kuna', symbol: 'kn' },
    'HTG': { country: 'Haiti', code: 'HT', name: 'Haitian Gourde', symbol: 'G' },
    'HUF': { country: 'Hungary', code: 'HU', name: 'Hungarian Forint', symbol: 'Ft' },
    'IDR': { country: 'Indonesia', code: 'ID', name: 'Indonesian Rupiah', symbol: 'Rp' },
    'ILS': { country: 'Israel', code: 'IL', name: 'Israeli Shekel', symbol: '₪' },
    'IMP': { country: 'Isle of Man', code: 'IM', name: 'Manx Pound', symbol: '£' },
    'INR': { country: 'India', code: 'IN', name: 'Indian Rupee', symbol: '₹' },
    'IQD': { country: 'Iraq', code: 'IQ', name: 'Iraqi Dinar', symbol: 'ع.د' },
    'IRR': { country: 'Iran', code: 'IR', name: 'Iranian Rial', symbol: '﷼' },
    'ISK': { country: 'Iceland', code: 'IS', name: 'Icelandic Króna', symbol: 'kr' },
    'JEP': { country: 'Jersey', code: 'JE', name: 'Jersey Pound', symbol: '£' },
    'JMD': { country: 'Jamaica', code: 'JM', name: 'Jamaican Dollar', symbol: '$' },
    'JOD': { country: 'Jordan', code: 'JO', name: 'Jordanian Dinar', symbol: 'د.ا' },
    'JPY': { country: 'Japan', code: 'JP', name: 'Japanese Yen', symbol: '¥' },
    'KES': { country: 'Kenya', code: 'KE', name: 'Kenyan Shilling', symbol: 'Sh' },
    'KGS': { country: 'Kyrgyzstan', code: 'KG', name: 'Kyrgyzstani Som', symbol: 'с' },
    'KHR': { country: 'Cambodia', code: 'KH', name: 'Cambodian Riel', symbol: '៛' },
    'KID': { country: 'Kiribati', code: 'KI', name: 'Kiribati Dollar', symbol: '$' },
    'KMF': { country: 'Comoros', code: 'KM', name: 'Comorian Franc', symbol: 'Fr' },
    'KRW': { country: 'South Korea', code: 'KR', name: 'South Korean Won', symbol: '₩' },
    'KWD': { country: 'Kuwait', code: 'KW', name: 'Kuwaiti Dinar', symbol: 'د.ك' },
    'KYD': { country: 'Cayman Islands', code: 'KY', name: 'Cayman Dollar', symbol: '$' },
    'KZT': { country: 'Kazakhstan', code: 'KZ', name: 'Kazakhstani Tenge', symbol: '₸' },
    'LAK': { country: 'Laos', code: 'LA', name: 'Lao Kip', symbol: '₭' },
    'LBP': { country: 'Lebanon', code: 'LB', name: 'Lebanese Pound', symbol: 'ل.ل' },
    'LKR': { country: 'Sri Lanka', code: 'LK', name: 'Sri Lankan Rupee', symbol: 'Rs' },
    'LRD': { country: 'Liberia', code: 'LR', name: 'Liberian Dollar', symbol: '$' },
    'LSL': { country: 'Lesotho', code: 'LS', name: 'Lesotho Loti', symbol: 'L' },
    'LYD': { country: 'Libya', code: 'LY', name: 'Libyan Dinar', symbol: 'ل.د' },
    'MAD': { country: 'Morocco', code: 'MA', name: 'Moroccan Dirham', symbol: 'د.م.' },
    'MDL': { country: 'Moldova', code: 'MD', name: 'Moldovan Leu', symbol: 'L' },
    'MGA': { country: 'Madagascar', code: 'MG', name: 'Malagasy Ariary', symbol: 'Ar' },
    'MKD': { country: 'North Macedonia', code: 'MK', name: 'Macedonian Denar', symbol: 'ден' },
    'MMK': { country: 'Myanmar', code: 'MM', name: 'Myanmar Kyat', symbol: 'K' },
    'MNT': { country: 'Mongolia', code: 'MN', name: 'Mongolian Tögrög', symbol: '₮' },
    'MOP': { country: 'Macau', code: 'MO', name: 'Macanese Pataca', symbol: 'P' },
    'MRU': { country: 'Mauritania', code: 'MR', name: 'Mauritanian Ouguiya', symbol: 'UM' },
    'MUR': { country: 'Mauritius', code: 'MU', name: 'Mauritian Rupee', symbol: '₨' },
    'MVR': { country: 'Maldives', code: 'MV', name: 'Maldivian Rufiyaa', symbol: 'Rf' },
    'MWK': { country: 'Malawi', code: 'MW', name: 'Malawian Kwacha', symbol: 'MK' },
    'MXN': { country: 'Mexico', code: 'MX', name: 'Mexican Peso', symbol: '$' },
    'MYR': { country: 'Malaysia', code: 'MY', name: 'Malaysian Ringgit', symbol: 'RM' },
    'MZN': { country: 'Mozambique', code: 'MZ', name: 'Mozambican Metical', symbol: 'MT' },
    'NAD': { country: 'Namibia', code: 'NA', name: 'Namibian Dollar', symbol: '$' },
    'NGN': { country: 'Nigeria', code: 'NG', name: 'Nigerian Naira', symbol: '₦' },
    'NIO': { country: 'Nicaragua', code: 'NI', name: 'Nicaraguan Córdoba', symbol: 'C$' },
    'NOK': { country: 'Norway', code: 'NO', name: 'Norwegian Krone', symbol: 'kr' },
    'NPR': { country: 'Nepal', code: 'NP', name: 'Nepalese Rupee', symbol: '₨' },
    'NZD': { country: 'New Zealand', code: 'NZ', name: 'New Zealand Dollar', symbol: '$' },
    'OMR': { country: 'Oman', code: 'OM', name: 'Omani Rial', symbol: 'ر.ع.' },
    'PAB': { country: 'Panama', code: 'PA', name: 'Panamanian Balboa', symbol: 'B/.' },
    'PEN': { country: 'Peru', code: 'PE', name: 'Peruvian Sol', symbol: 'S/.' },
    'PGK': { country: 'Papua New Guinea', code: 'PG', name: 'Papua New Guinean Kina', symbol: 'K' },
    'PHP': { country: 'Philippines', code: 'PH', name: 'Philippine Peso', symbol: '₱' },
    'PKR': { country: 'Pakistan', code: 'PK', name: 'Pakistani Rupee', symbol: '₨' },
    'PLN': { country: 'Poland', code: 'PL', name: 'Polish Złoty', symbol: 'zł' },
    'PYG': { country: 'Paraguay', code: 'PY', name: 'Paraguayan Guaraní', symbol: '₲' },
    'QAR': { country: 'Qatar', code: 'QA', name: 'Qatari Riyal', symbol: 'ر.ق' },
    'RON': { country: 'Romania', code: 'RO', name: 'Romanian Leu', symbol: 'lei' },
    'RSD': { country: 'Serbia', code: 'RS', name: 'Serbian Dinar', symbol: 'дин' },
    'RUB': { country: 'Russia', code: 'RU', name: 'Russian Ruble', symbol: '₽' },
    'RWF': { country: 'Rwanda', code: 'RW', name: 'Rwandan Franc', symbol: 'Fr' },
    'SAR': { country: 'Saudi Arabia', code: 'SA', name: 'Saudi Riyal', symbol: 'ر.س' },
    'SBD': { country: 'Solomon Islands', code: 'SB', name: 'Solomon Islands Dollar', symbol: '$' },
    'SCR': { country: 'Seychelles', code: 'SC', name: 'Seychellois Rupee', symbol: '₨' },
    'SDG': { country: 'Sudan', code: 'SD', name: 'Sudanese Pound', symbol: 'ج.س.' },
    'SEK': { country: 'Sweden', code: 'SE', name: 'Swedish Krona', symbol: 'kr' },
    'SGD': { country: 'Singapore', code: 'SG', name: 'Singapore Dollar', symbol: '$' },
    'SHP': { country: 'Saint Helena', code: 'SH', name: 'Saint Helena Pound', symbol: '£' },
    'SLL': { country: 'Sierra Leone', code: 'SL', name: 'Sierra Leonean Leone', symbol: 'Le' },
    'SOS': { country: 'Somalia', code: 'SO', name: 'Somali Shilling', symbol: 'Sh' },
    'SRD': { country: 'Suriname', code: 'SR', name: 'Surinamese Dollar', symbol: '$' },
    'SSP': { country: 'South Sudan', code: 'SS', name: 'South Sudanese Pound', symbol: '£' },
    'STN': { country: 'São Tomé and Príncipe', code: 'ST', name: 'São Tomé Dobra', symbol: 'Db' },
    'SYP': { country: 'Syria', code: 'SY', name: 'Syrian Pound', symbol: '£' },
    'SZL': { country: 'Eswatini', code: 'SZ', name: 'Swazi Lilangeni', symbol: 'L' },
    'THB': { country: 'Thailand', code: 'TH', name: 'Thai Baht', symbol: '฿' },
    'TJS': { country: 'Tajikistan', code: 'TJ', name: 'Tajikistani Somoni', symbol: 'ЅМ' },
    'TMT': { country: 'Turkmenistan', code: 'TM', name: 'Turkmenistani Manat', symbol: 'm' },
    'TND': { country: 'Tunisia', code: 'TN', name: 'Tunisian Dinar', symbol: 'د.ت' },
    'TOP': { country: 'Tonga', code: 'TO', name: 'Tongan Paʻanga', symbol: 'T$' },
    'TRY': { country: 'Turkey', code: 'TR', name: 'Turkish Lira', symbol: '₺' },
    'TTD': { country: 'Trinidad and Tobago', code: 'TT', name: 'Trinidad Dollar', symbol: '$' },
    'TVD': { country: 'Tuvalu', code: 'TV', name: 'Tuvaluan Dollar', symbol: '$' },
    'TWD': { country: 'Taiwan', code: 'TW', name: 'New Taiwan Dollar', symbol: 'NT$' },
    'TZS': { country: 'Tanzania', code: 'TZ', name: 'Tanzanian Shilling', symbol: 'Sh' },
    'UAH': { country: 'Ukraine', code: 'UA', name: 'Ukrainian Hryvnia', symbol: '₴' },
    'UGX': { country: 'Uganda', code: 'UG', name: 'Ugandan Shilling', symbol: 'Sh' },
    'USD': { country: 'United States', code: 'US', name: 'US Dollar', symbol: '$' },
    'UYU': { country: 'Uruguay', code: 'UY', name: 'Uruguayan Peso', symbol: '$' },
    'UZS': { country: 'Uzbekistan', code: 'UZ', name: 'Uzbekistani Som', symbol: "so'm" },
    'VES': { country: 'Venezuela', code: 'VE', name: 'Venezuelan Bolívar', symbol: 'Bs.' },
    'VND': { country: 'Vietnam', code: 'VN', name: 'Vietnamese Đồng', symbol: '₫' },
    'VUV': { country: 'Vanuatu', code: 'VU', name: 'Vanuatu Vatu', symbol: 'Vt' },
    'WST': { country: 'Samoa', code: 'WS', name: 'Samoan Tālā', symbol: 'T' },
    'XAF': { country: 'Central African CFA', code: 'CF', name: 'Central African Franc', symbol: 'Fr' },
    'XCD': { country: 'East Caribbean', code: 'AG', name: 'East Caribbean Dollar', symbol: '$' },
    'XDR': { country: 'IMF', code: 'XX', name: 'Special Drawing Rights', symbol: 'SDR' },
    'XOF': { country: 'West African CFA', code: 'SN', name: 'West African Franc', symbol: 'Fr' },
    'XPF': { country: 'French Polynesia', code: 'PF', name: 'CFP Franc', symbol: 'Fr' },
    'YER': { country: 'Yemen', code: 'YE', name: 'Yemeni Rial', symbol: '﷼' },
    'ZAR': { country: 'South Africa', code: 'ZA', name: 'South African Rand', symbol: 'R' },
    'ZMW': { country: 'Zambia', code: 'ZM', name: 'Zambian Kwacha', symbol: 'ZK' },
    'ZWL': { country: 'Zimbabwe', code: 'ZW', name: 'Zimbabwean Dollar', symbol: '$' }
};

// Legacy mapping
const currencyToCountry = {};
Object.keys(currencyData).forEach(code => {
    currencyToCountry[code] = currencyData[code].code;
});

// DOM Elements
const elements = {
    amount: document.getElementById('amount'),
    fromCurrency: document.getElementById('fromCurrency'),
    toCurrency: document.getElementById('toCurrency'),
    fromDropdown: document.getElementById('fromDropdown'),
    toDropdown: document.getElementById('toDropdown'),
    fromSelected: document.getElementById('fromSelected'),
    toSelected: document.getElementById('toSelected'),
    swapButton: document.getElementById('swapButton'),
    convertButton: document.getElementById('convertButton'),
    resultSection: document.getElementById('resultSection'),
    resultAmount: document.getElementById('resultAmount'),
    exchangeRate: document.getElementById('exchangeRate'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    lastUpdated: document.getElementById('lastUpdated'),
    themeToggle: document.getElementById('themeToggle'),
    loadingScreen: document.getElementById('loadingScreen'),
    mainContainer: document.getElementById('mainContainer')
};

// State
let exchangeRates = {};
let lastUpdateTime = null;
let selectedFromCurrency = 'USD';
let selectedToCurrency = 'INR';

// Initialize the application
async function init() {
    setupTheme();
    await loadCurrencies();
    setupEventListeners();
    updateLastUpdatedTime();
    
    selectCurrency('from', 'USD');
    selectCurrency('to', 'INR');
    
    setTimeout(() => {
        elements.loadingScreen.classList.add('hidden');
        elements.mainContainer.style.display = 'block';
        setTimeout(() => {
            elements.mainContainer.style.opacity = '1';
        }, 50);
    }, 500);
}

// Theme Management
function setupTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = elements.themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Load available currencies using backend API
async function loadCurrencies() {
    try {
        const url = isLocal 
            ? 'https://api.exchangerate-api.com/v4/latest/USD'
            : `${API_BASE}/rates?base=USD`;
        
        console.log('Fetching from:', url);
        const response = await fetch(url);
        const data = await response.json();
        
        console.log('API Response:', data);
        
        if (isLocal && data.rates) {
            exchangeRates = data.rates;
            lastUpdateTime = new Date(data.date);
        } else if (data.success && data.rates) {
            exchangeRates = data.rates;
            lastUpdateTime = new Date(data.timestamp);
        } else {
            throw new Error('Invalid API response');
        }
        
        updateLastUpdatedTime();
        await updateCountryInfo('fromCurrency', 'USD');
        await updateCountryInfo('toCurrency', 'INR');
        
    } catch (error) {
        console.error('Error loading currencies:', error);
        loadFallbackCurrencies();
    }
}

// Fallback currency list
function loadFallbackCurrencies() {
    exchangeRates = {
        'USD': 1, 'EUR': 0.92, 'GBP': 0.79, 'JPY': 149.50, 'INR': 83.25,
        'AUD': 1.52, 'CAD': 1.36, 'CHF': 0.88, 'CNY': 7.24, 'MXN': 17.05,
        'BRL': 4.96, 'ZAR': 18.75, 'RUB': 92.50, 'KRW': 1320.00, 'SGD': 1.34,
        'HKD': 7.82, 'NOK': 10.65, 'SEK': 10.45, 'DKK': 6.86, 'NZD': 1.65
    };
    
    lastUpdateTime = new Date('2025-01-15');
    updateLastUpdatedTime();
}

// Search and filter currencies
function filterCurrencies(searchTerm, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.innerHTML = '';
    
    if (!searchTerm || searchTerm.length < 1) {
        dropdown.classList.remove('show');
        return;
    }
    
    const term = searchTerm.toLowerCase();
    const matches = Object.keys(currencyData).filter(code => {
        const data = currencyData[code];
        return data.country.toLowerCase().includes(term) ||
               code.toLowerCase().includes(term) ||
               data.name.toLowerCase().includes(term);
    }).slice(0, 10);
    
    if (matches.length === 0) {
        dropdown.innerHTML = '<div class="currency-option" style="pointer-events: none; color: var(--text-secondary);">No matches found</div>';
        dropdown.classList.add('show');
        return;
    }
    
    matches.forEach(code => {
        const data = currencyData[code];
        const option = document.createElement('div');
        option.className = 'currency-option';
        option.innerHTML = `
            <span class="currency-option-main">${data.country}</span>
            <span class="currency-option-code">${code}</span>
        `;
        option.addEventListener('click', () => {
            const type = dropdownId === 'fromDropdown' ? 'from' : 'to';
            selectCurrency(type, code);
        });
        dropdown.appendChild(option);
    });
    
    dropdown.classList.add('show');
}

// Select a currency
function selectCurrency(type, code) {
    const data = currencyData[code];
    if (!data) return;
    
    if (type === 'from') {
        selectedFromCurrency = code;
        elements.fromCurrency.value = '';
        elements.fromSelected.textContent = `${data.country} (${code}) - ${data.symbol}`;
        elements.fromDropdown.classList.remove('show');
        updateCountryInfo('fromCurrency', code);
    } else {
        selectedToCurrency = code;
        elements.toCurrency.value = '';
        elements.toSelected.textContent = `${data.country} (${code}) - ${data.symbol}`;
        elements.toDropdown.classList.remove('show');
        updateCountryInfo('toCurrency', code);
    }
    
    if (elements.amount.value) {
        convertCurrency();
    }
}

// Convert currency
async function convertCurrency() {
    const amount = parseFloat(elements.amount.value);
    const fromCurrency = selectedFromCurrency;
    const toCurrency = selectedToCurrency;
    
    if (!amount || amount <= 0) {
        showError('Please enter a valid amount');
        return;
    }
    
    if (!fromCurrency || !toCurrency) {
        showError('Please select both currencies');
        return;
    }
    
    try {
        elements.convertButton.classList.add('loading');
        hideError();
        
        if (exchangeRates && Object.keys(exchangeRates).length > 0) {
            let rate;
            
            if (fromCurrency === 'USD') {
                rate = exchangeRates[toCurrency];
            } else if (toCurrency === 'USD') {
                rate = 1 / exchangeRates[fromCurrency];
            } else {
                const fromRate = exchangeRates[fromCurrency];
                const toRate = exchangeRates[toCurrency];
                rate = toRate / fromRate;
            }
            
            const convertedAmount = (amount * rate).toFixed(2);
            
            elements.resultAmount.textContent = `${parseFloat(convertedAmount).toLocaleString()} ${toCurrency}`;
            elements.exchangeRate.textContent = `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
            elements.resultSection.style.display = 'block';
        }
    } catch (error) {
        console.error('Conversion error:', error);
        showError(`Conversion failed: ${error.message}`);
    } finally {
        elements.convertButton.classList.remove('loading');
    }
}

// Update country information
async function updateCountryInfo(type, currencyCode) {
    const countryCode = currencyToCountry[currencyCode];
    const prefix = type === 'fromCurrency' ? 'from' : 'to';
    
    if (!countryCode) {
        resetCountryInfo(prefix);
        return;
    }
    
    try {
        const url = isLocal 
            ? `https://restcountries.com/v3.1/alpha/${countryCode}`
            : `${API_BASE}/country?code=${countryCode}`;
        
        const response = await fetch(url);
        const result = await response.json();
        
        const data = isLocal ? result : result.data;
        
        if (data && (isLocal ? data.length > 0 : true)) {
            const country = isLocal ? data[0] : data;
            
            document.getElementById(`${prefix}Flag`).innerHTML = 
                `<img src="${country.flags.svg}" alt="${country.name.common} flag">`;
            document.getElementById(`${prefix}CountryName`).textContent = country.name.common;
            document.getElementById(`${prefix}Capital`).textContent = 
                country.capital ? country.capital[0] : 'N/A';
            document.getElementById(`${prefix}Continent`).textContent = 
                country.continents ? country.continents.join(', ') : 'N/A';
            document.getElementById(`${prefix}Population`).textContent = 
                country.population ? country.population.toLocaleString() : 'N/A';
            
            const currencyInfo = country.currencies?.[currencyCode];
            document.getElementById(`${prefix}CurrencyName`).textContent = 
                currencyInfo ? `${currencyInfo.name} (${currencyInfo.symbol})` : currencyCode;
            
            const leader = getCountryLeader(countryCode);
            document.getElementById(`${prefix}Leader`).textContent = leader;
        }
    } catch (error) {
        console.error('Error fetching country info:', error);
        resetCountryInfo(prefix);
    }
}

// Get country leader
function getCountryLeader(countryCode) {
    const leaders = {
        'US': 'President Donald Trump', 'GB': 'Prime Minister Keir Starmer',
        'IN': 'Prime Minister Narendra Modi', 'FR': 'President Emmanuel Macron',
        'DE': 'Chancellor Olaf Scholz', 'JP': 'Prime Minister Shigeru Ishiba',
        'CN': 'President Xi Jinping', 'RU': 'President Vladimir Putin',
        'CA': 'Prime Minister Justin Trudeau', 'AU': 'Prime Minister Anthony Albanese',
        'BR': 'President Luiz Inácio Lula da Silva', 'MX': 'President Claudia Sheinbaum',
        'IT': 'Prime Minister Giorgia Meloni', 'ES': 'Prime Minister Pedro Sánchez',
        'KR': 'President Yoon Suk Yeol', 'SA': 'King Salman bin Abdulaziz',
        'TR': 'President Recep Tayyip Erdoğan', 'AR': 'President Javier Milei',
        'ZA': 'President Cyril Ramaphosa', 'EG': 'President Abdel Fattah el-Sisi'
    };
    
    return leaders[countryCode] || 'Information not available';
}

// Reset country information
function resetCountryInfo(prefix) {
    document.getElementById(`${prefix}Flag`).innerHTML = '<div class="placeholder-flag">🌍</div>';
    document.getElementById(`${prefix}CountryName`).textContent = '-';
    document.getElementById(`${prefix}Capital`).textContent = '-';
    document.getElementById(`${prefix}Leader`).textContent = '-';
    document.getElementById(`${prefix}CurrencyName`).textContent = '-';
    document.getElementById(`${prefix}Continent`).textContent = '-';
    document.getElementById(`${prefix}Population`).textContent = '-';
}

// Swap currencies
function swapCurrencies() {
    const temp = selectedFromCurrency;
    selectedFromCurrency = selectedToCurrency;
    selectedToCurrency = temp;
    
    selectCurrency('from', selectedFromCurrency);
    selectCurrency('to', selectedToCurrency);
    
    if (elements.amount.value) {
        convertCurrency();
    }
}

// Update last updated time
function updateLastUpdatedTime() {
    if (!lastUpdateTime) {
        elements.lastUpdated.querySelector('.update-text').textContent = 'Ready';
        elements.lastUpdated.querySelector('.update-icon').style.animation = 'none';
        return;
    }
    
    const now = new Date();
    const diffMinutes = Math.floor((now - lastUpdateTime) / 60000);
    
    let timeText = '';
    if (diffMinutes < 1) {
        timeText = 'Just now';
    } else if (diffMinutes < 60) {
        timeText = `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    } else {
        const diffHours = Math.floor(diffMinutes / 60);
        timeText = `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    }
    
    elements.lastUpdated.querySelector('.update-text').textContent = `Updated ${timeText}`;
    elements.lastUpdated.querySelector('.update-icon').style.animation = 'none';
}

// Show error message
function showError(message) {
    elements.errorText.textContent = message;
    elements.errorMessage.style.display = 'flex';
    elements.resultSection.style.display = 'none';
}

// Hide error message
function hideError() {
    elements.errorMessage.style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    elements.convertButton.addEventListener('click', convertCurrency);
    elements.swapButton.addEventListener('click', swapCurrencies);
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    elements.fromCurrency.addEventListener('input', (e) => {
        filterCurrencies(e.target.value, 'fromDropdown');
    });
    
    elements.toCurrency.addEventListener('input', (e) => {
        filterCurrencies(e.target.value, 'toDropdown');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            elements.fromDropdown.classList.remove('show');
            elements.toDropdown.classList.remove('show');
        }
    });
    
    elements.amount.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            convertCurrency();
        }
    });
    
    let amountTimeout;
    elements.amount.addEventListener('input', () => {
        clearTimeout(amountTimeout);
        amountTimeout = setTimeout(() => {
            if (elements.amount.value && selectedFromCurrency && selectedToCurrency) {
                convertCurrency();
            }
        }, 1000);
    });
    
    setInterval(updateLastUpdatedTime, 60000);
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
