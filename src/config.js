import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  config()
}

export default {
  port: process.env.PORT || 8081,
  authentication: {
    jwtSecret:
      process.env.JWT_SECRET ||
      'jwtSecret',
  },
  fixerKey: process.env.FIXER_KEY || 'fixerKey',
}
