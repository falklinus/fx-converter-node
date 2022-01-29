// Controllers
import { login } from './controllers/index.js'

// Middleware
import { isAuthenticated, isNotAuthenticated, rateLimiter } from './middlewares/index.js'

// Graphql
import { graphqlHTTP } from 'express-graphql'
import { schema, root } from './graphql/index.js'

export default (app) => {
  app.get('/login', isNotAuthenticated, login)
  app.use(
    '/graphql',
    isAuthenticated,
    rateLimiter,
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  )
}
