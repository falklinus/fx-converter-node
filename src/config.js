import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  config()
}

export default {
  port: process.env.PORT || 8081,
  authentication: {
    jwtSecret:
      process.env.JWT_SECRET ||
      '44870eccc64b6ab1437f12724dfc17479f0dd7d892a817d1acd8673c83802103fb1365e6b782da9cd12e746c32a9e45584e8531c8250489621a5215e0bac5429',
  },
  fixerKey: process.env.FIXER_KEY || '45b434d233095b21a3291fee9c1727a0',
}
