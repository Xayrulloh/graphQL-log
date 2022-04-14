import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server'
import { schema } from './modules/index.js'
import model from './utils/model.js'
const PORT = process.env.PORT || 5000

const server = new ApolloServer({
    context: ({ req, res }) => model,
    schema,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    interospection: true
})

server.listen(PORT).then(({ url }) => {})