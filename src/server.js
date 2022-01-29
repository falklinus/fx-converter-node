import express from 'express'
import cors from 'cors'
import config from './config.js'
import useRoutes from './routes.js'

const app = express()
app.use(cors())
app.use(express.json())
useRoutes(app) // Adding routes exported from './routes.js'

const PORT = config.port
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`))
