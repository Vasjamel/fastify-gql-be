import Fastify from 'fastify'
import mercurius from 'mercurius';
import prisma from './prisma/index.js';
import { createUser } from './auth/createUser.js';

import 'dotenv/config'


import schema from './schema/index.js';
import resolvers from './resolvers/index.js';

const app = Fastify()

// app.register(process)

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
})

app.post('/signup', createUser)

app.post('/', async function (req, reply) {
  const query = req.body.query;
  const variables = req.body.variables
  return reply.graphql(query, { prisma }, variables)
})

app.listen({ port: process.env.PORT })