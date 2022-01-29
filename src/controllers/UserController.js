import jwt from 'jsonwebtoken'
import config from '../config.js'
import { v4 as uuidv4 } from 'uuid'

const jwtSignUser = (user) => {
  const ONE_HOUR = 60 * 60
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_HOUR,
  })
}

export const login = async (_, res) => {
  try {
    const user = { id: uuidv4() }
    res.json({ token: jwtSignUser(user), user })
  } catch (err) {
    res.status(403).send({
      general: 'An error has occured trying to log in',
    })
  }
}
