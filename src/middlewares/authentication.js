import jwt from 'jsonwebtoken'
import config from '../config.js'

export const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token)
    return res.status(401).send({
      general: 'You need to sign in to use this resource',
    })

  jwt.verify(token, config.authentication.jwtSecret, (err, user) => {
    if (err || !user) {
      return res.status(403).send({
        general: 'You do not have access to this resource',
      })
    }
    req.user = user
    next()
  })
}

export const isNotAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return next()

  jwt.verify(token, config.authentication.jwtSecret, (err, user) => {
    if (err || !user) {
      return next()
    }
    return res.json({ token, user })
  })
}
