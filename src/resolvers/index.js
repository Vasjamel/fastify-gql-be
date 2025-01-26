import lessons from './lessons/index.js';
import pupils from './pupils/index.js';
import teachers from './teachers/index.js';

const { createLesson, deleteLesson, updateLesson, getLessons } = lessons;
const { createPupil, deletePupil, updatePupil, getPupils } = pupils;
const { createTeacher, deleteTeacher, updateTeacher, getTeachers } = teachers;


const resolvers = {
  Query: {
    pupils: getPupils,
    lessons: getLessons,
    teachers: getTeachers
  },
  Mutation: {
    createTeacher,
    createLesson,
    createPupil,
    deletePupil,
    deleteLesson,
    deleteTeacher,
    updateLesson,
    updateTeacher,
    updatePupil

  },
};

export default resolvers;
