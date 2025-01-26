import Fastify from 'fastify';
import mercurius from 'mercurius';
import prisma from './prisma/index.js';

import 'dotenv/config';

import schema from './schema/index.js';
import resolvers from './resolvers/index.js';

import { createUser } from './auth/createUser.js';
import { loginUser } from './auth/loginUser.js';
import { checkAuth } from './auth/checkAuth.js';

const app = Fastify();

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

app.post('/signup', createUser);
app.post('/login', loginUser);

app.addHook('onRequest', checkAuth)

app.post('/', async function (req, reply) {
  const query = req.body.query;
  const variables = req.body.variables;
  return reply.graphql(query, { prisma, user: req.user }, variables);
});

app.listen({ port: process.env.PORT });
