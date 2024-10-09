const convertButton = document.getElementById('convert-button');
const exchangeButton = document.getElementById('exchange-button');
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const resultDisplay = document.getElementById('result');

// Exchange rates for simplicity
// Exchange rates for simplicity
const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 73.56, JPY: 109.63, PKR: 280, IRR: 42000, CAD: 1.25, AUD: 1.35, CNY: 6.45 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 86.49, JPY: 129.67, PKR: 330, IRR: 49000, CAD: 1.47, AUD: 1.58, CNY: 7.61 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 98.00, JPY: 147.50, PKR: 440, IRR: 65000, CAD: 1.66, AUD: 1.77, CNY: 8.38 },
    INR: { USD: 0.014, EUR: 0.012, GBP: 0.010, JPY: 1.50, PKR: 3.59, IRR: 6700, CAD: 0.017, AUD: 0.018, CNY: 0.091 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, INR: 0.67, PKR: 2.00, IRR: 1500, CAD: 0.012, AUD: 0.013, CNY: 0.06 },
    PKR: { USD: 0.0036, EUR: 0.0030, GBP: 0.0023, INR: 0.28, JPY: 0.50, IRR: 1900, CAD: 0.0042, AUD: 0.0044, CNY: 0.016 },
    IRR: { USD: 0.000024, EUR: 0.000020, GBP: 0.000015, INR: 0.00015, JPY: 0.00067, PKR: 0.00053, CAD: 0.000029, AUD: 0.000031, CNY: 0.000005 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, INR: 74.50, JPY: 109.63, PKR: 250, IRR: 42000, AUD: 1.02, CNY: 5.03 },
    AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, INR: 70.50, JPY: 100.50, PKR: 240, IRR: 40000, CAD: 0.98, CNY: 4.70 },
    CNY: { USD: 0.15, EUR: 0.13, GBP: 0.12, INR: 10.80, JPY: 16.67, PKR: 62.50, IRR: 18000, CAD: 0.20, AUD: 0.21 },
};


convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (!isNaN(amount) && amount > 0) {
        const rate = exchangeRates[from][to];
        const convertedAmount = (amount * rate).toFixed(2);
        resultDisplay.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
    } else {
        resultDisplay.innerText = 'Please enter a valid amount.';
    }
});

exchangeButton.addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
});
