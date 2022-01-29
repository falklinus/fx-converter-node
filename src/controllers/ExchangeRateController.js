import config from '../config.js'
import fetch from 'node-fetch'

const DATA = {
  success: true,
  timestamp: 1641081599,
  historical: true,
  base: 'EUR',
  date: '2022-01-01',
  rates: {
    SEK: 10.291223,
    USD: 1.137145,
    CAD: 1.437255,
    EUR: 1,
  },
}

export const getExchangeRatesFromSymbols = async (symbols) => {
  if (!symbols || symbols.length == 0) return null
  const symbolSearch = symbols.join(',')
  try {
    // const res = await fetch(
    //   `http://data.fixer.io/api/2022-01-01?access_key=${config.fixerKey}&symbols=${symbolSearch}`
    // )
    // const data = await res.json()
    // const { rates } = data
    const { rates } = DATA
    const EUR_TO_SEK = rates['SEK'] // Free subscription plan doesn't allow SEK as base currency
    const currencyCodes = Object.keys(rates)
    return currencyCodes.map((currencyCode) => ({
      code: currencyCode,
      rate: rates[currencyCode] / EUR_TO_SEK,
    }))
  } catch (err) {
    return null
  }
}
