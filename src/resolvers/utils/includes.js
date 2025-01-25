export const LESSONS_INCLUDE = {
  teacher: { include: { lessons: true } },
  pupils: { include: { lessons: true } },
};

export const PUPILS_INCLUDE = {
  lessons: {
    include: {
      teacher: { include: { lessons: true } },
      pupils: { include: { lessons: true } },
    },
  },
};

export const TEACHERS_INCLUDE = {
  lessons: { include: { teacher: true, pupils: true } },
};