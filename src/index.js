import Fastify from 'fastify';
import mercurius from 'mercurius';
import prisma from './prisma/index.js';
import cors from '@fastify/cors';
import 'dotenv/config';

import schema from './schema/index.js';
import resolvers from './resolvers/index.js';

import { createUser } from './auth/createUser.js';
import { loginUser } from './auth/loginUser.js';
import { checkAuth } from './auth/checkAuth.js';
import { verifyToken } from './auth/verifyToken.js';

const app = Fastify();
await app.register(cors, { origin: 'http://localhost:5173' });

app.post('/verify-token', verifyToken);
app.post('/signup', createUser);
app.post('/login', loginUser);

await app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

app.addHook('onRequest', checkAuth);

app.post('/', async function (req, reply) {
  const query = req.body.query;
  const variables = req.body.variables;
  return reply.graphql(query, { prisma, user: req.user }, variables);
});

app.listen({ port: process.env.PORT });
