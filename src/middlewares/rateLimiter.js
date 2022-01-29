import rateLimit from 'express-rate-limit'

const MAX_WINDOW_REQUEST_COUNT = 30

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute in millseconds
  max: MAX_WINDOW_REQUEST_COUNT,
  message: `You have exceeded the limit of ${MAX_WINDOW_REQUEST_COUNT} requests per minute!`,
  headers: true,
  keyGenerator: (req) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    return token
  },
})
