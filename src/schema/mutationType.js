export const mutation = `
  type Mutation {

    createTeacher(data: TeacherInput): Teacher,

    createLesson(data: LessonInput): Lesson,

    createPupil(data: PupilInput): Pupil

    deletePupil(id: String!): Pupil,

    deleteTeacher(id: String!): Teacher,

    deleteLesson(id: String!): Lesson,

  }
`