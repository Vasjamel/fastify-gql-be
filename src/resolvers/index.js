const lessons = require('./lessons/index.js');
const pupils = require('./pupils/index.js');
const teachers = require('./teachers/index.js');
const users = require('./users/index.js');
const createLessonContent = require('./lessonContent/createLessonContent.js')

const { createLesson, deleteLesson, updateLesson, getLessons } = lessons;
const { createPupil, deletePupil, updatePupil, getPupils } = pupils;
const { createTeacher, deleteTeacher, updateTeacher, getTeachers } = teachers;
const { getUsers } = users;

const resolvers = {
  Query: {
    pupils: getPupils,
    lessons: getLessons,
    teachers: getTeachers,
    users: getUsers,
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
    createLessonContent
  },
};

module.exports = resolvers;
