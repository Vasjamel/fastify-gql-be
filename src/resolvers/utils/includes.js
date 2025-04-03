

const LESSONS_INCLUDE = {
  teacher: { include: { lessons: true, user: true } },
  pupils: { include: { lessons: true, user: true } },
  content: true
};

const PUPILS_INCLUDE = {
  lessons: {
    include: {
      teacher: { include: { lessons: true } },
      pupils: { include: { lessons: true } },
      content: true
    },
  },
  user: true,
};

const TEACHERS_INCLUDE = {
  lessons: { include: { teacher: true, pupils: true, content: true } },
  user: true,
};

const USERS_INCLUDE = {
  teacher: { include: { lessons: true, user: true } },
  pupil: { include: { lessons: true, user: true } },
};


module.exports = {
  LESSONS_INCLUDE,
  TEACHERS_INCLUDE,
  PUPILS_INCLUDE,
  USERS_INCLUDE
}