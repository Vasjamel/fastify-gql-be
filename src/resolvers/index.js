import lessons from './lessons/index.js';
import pupils from './pupils/index.js';
import teachers from './teachers/index.js';
import users from './users/index.js';

const { createLesson, deleteLesson, updateLesson, getLessons } = lessons;
const { createPupil, deletePupil, updatePupil, getPupils } = pupils;
const { createTeacher, deleteTeacher, updateTeacher, getTeachers } = teachers;
const { getUsers } = users

const resolvers = {
  Query: {
    pupils: getPupils,
    lessons: getLessons,
    teachers: getTeachers,
    users: getUsers
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
    updatePupil,
  },
};

export default resolvers;
