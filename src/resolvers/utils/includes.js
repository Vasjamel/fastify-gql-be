

export const LESSONS_INCLUDE = {
  teacher: { include: { lessons: true, user: true } },
  pupils: { include: { lessons: true, user: true } },
};

export const PUPILS_INCLUDE = {
  lessons: {
    include: {
      teacher: { include: { lessons: true } },
      pupils: { include: { lessons: true } },
    },
  },
  user: true,
};

export const TEACHERS_INCLUDE = {
  lessons: { include: { teacher: true, pupils: true } },
  user: true,
};

export const USERS_INCLUDE = {
  teacher: { include: { lessons: true, user: true } },
  pupil: { include: { lessons: true, user: true } },
};
