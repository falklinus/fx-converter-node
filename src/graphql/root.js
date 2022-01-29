import { getCountriesBySearch, getExchangeRatesFromSymbols } from '../controllers/index.js'

export const root = {
  searchCountries: ({ name }) => getCountriesBySearch(name),
  getExchangeRates: ({ symbols }) => getExchangeRatesFromSymbols(symbols),
}
