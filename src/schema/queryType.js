export const query = `
    type Query {
    lessons(find: LessonFind): [Lesson],
    pupils(find: PupilFind): [Pupil],
    teachers(find: TeacherFind): [Teacher],
  }
`