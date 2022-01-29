import { buildSchema } from 'graphql'

// Construct a schema, using GraphQL schema language
export const schema = buildSchema(`
  type Currency {
    code: String,
    name: String,
    symbol: String
  },
  type Country {
    name: String,
    population: Int
    currency: Currency
  },
  type Rate {
    code: String,
    rate: Float!
  },
  type Query {
    searchCountries(name: String!): [Country],
    getExchangeRates(symbols: [String!]): [Rate]
  }
`)
