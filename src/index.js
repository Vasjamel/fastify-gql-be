const Fastify = require('fastify');
const mercurius = require('mercurius');
const prisma = require('../prisma/index.js');
const cors = require('@fastify/cors');
require('dotenv/config');

const schema = require('./schema/index.js');
const resolvers = require('./resolvers/index.js');

const createUser = require('./auth/createUser.js');
const loginUser = require('./auth/loginUser.js');
const checkAuth = require('./auth/checkAuth.js');
const verifyToken = require('./auth/verifyToken.js');

async function startServer() {
  const app = Fastify();
  await app.register(cors, { origin: 'http://localhost:5173' });

  app.post('/verify-token', verifyToken);
  app.post('/signup', createUser);
  app.post('/login', loginUser);

  await app.register(mercurius, {
    schema,
    resolvers,
    graphiql: true,

    errorFormatter: (error, ctx) => {
      console.error('GraphQL Error:', error);
      return {
        statusCode: 200,
        response: {
          errors: error.errors.map((err) => ({
            message: err.message,
            code: err.extensions?.code || 'INTERNAL_SERVER_ERROR',
            path: err.path,
          })),
        },
      };
    },
  });

  app.addHook('onRequest', checkAuth);

  app.post('/', async function (req, reply) {
    const query = req.body.query;
    const variables = req.body.variables;
    return reply.graphql(query, { prisma, user: req.user }, variables);
  });

  app.listen({ port: process.env.PORT });
}

startServer();

module.exports = startServer;
