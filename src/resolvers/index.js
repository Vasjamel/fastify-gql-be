import { createLesson } from './createLesson.js';
import { deleteLesson } from './deleteLesson.js';
import { createPupil } from './createPupil.js';
import { deletePupil } from './deletePupil.js';
import { createTeacher } from './createTeacher.js';
import { deleteTeacher } from './deleteTeacher.js';
// import { updateTeacher } from './updateTeacher.js';
// import { updateLesson } from './updateLesson.js';
// import { updatePupil } from './updatePupil.js';


const resolvers = {
  Query: {
    pupils: async (_parent, _args, ctx) => {
      return ctx.prisma.pupil.findMany()
    },
    lessons: async (_parent, _args, ctx) => {
      return ctx.prisma.lesson.findMany()
    },
    teachers: async (_parent, _args, ctx) => {
      return ctx.prisma.teacher.findMany()
    },
  },
  Mutation: {
    createTeacher,
    createLesson,
    createPupil,
    deletePupil,
    deleteLesson,
    deleteTeacher,
    // updateLesson,
    // updateTeacher,
    // updatePupil
  }
}

export default resolvers