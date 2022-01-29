import fetch from 'node-fetch'

export const getCountriesBySearch = async (searchStr) => {
  if (searchStr.length < 3) return null
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${searchStr}?fields=name,population,currencies`
  )
  const data = await res.json()

  if (!Array.isArray(data)) return null

  return data.map((country) => {
    const { name, population, currencies } = country
    const currencyCodes = Object.keys(currencies)
    return {
      name: name.common,
      population,
      currency: {
        code: currencyCodes[0],
        name: currencies[currencyCodes[0]].name,
        symbol: currencies[currencyCodes[0]].symbol,
      },
    }
  })
}
