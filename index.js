// const Fastify = require('fastify');
// const mercurius = require('mercurius');
import { createUser } from './createUser.js';

import Fastify from 'fastify'
import mercurius from 'mercurius';
import prisma from './prisma/index.js';
import { pupils, lessons, teachers } from './dummyData.js'
import { createTeacher } from './createTeacher.js';
import { createLesson } from './createLesson.js';

const app = Fastify()

const schema = `
  type Query {
    lessons: [Lesson],
    pupils: [Pupil],
    teachers: [Teacher],
  }

  type Mutation {
    createTeacher(name: String, lessonsId: [Int]): Teacher,
    createLesson(subject: String!, pupils: [String], teacher: String): Lesson
  }

  type Lesson {
    id: String,
    subject: String, 
    teacher: Teacher,
    pupils: [Pupil]
  }

  type Pupil {
    id: String,
    name: String,
    birthday: Int,
    grade: Int,
    lessons: [Lesson]
  }

  type Teacher {
    id: String, 
    name: String,
    lessons: [Lesson] 
  }
`


const resolvers = {
  Query: {
    pupils: () => pupils,
    lessons: () => lessons,
    // teachers: () => teachers
    teachers: async (_parent, args, ctx) => {
      return ctx.prisma.teacher.findMany()
    },
  },
  Mutation: {
    createTeacher,
    createLesson
  }
}

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
  context: (request, reply) => {
    return { prisma }
  },
})

app.post('/signup', createUser)

app.post('/', async function (req, reply) {
  const query = req.body.query;
  return reply.graphql(query)
})

app.listen({ port: 3333 })