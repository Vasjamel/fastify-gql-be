export const mutation = `
  type Mutation {

    createTeacher(name: String): Teacher,

    createLesson(subject: String!, teacherId: String): Lesson,

    createPupil(name: String!, grade: Int, birthday: Date, group: String, lessons: [String]): Pupil

    deletePupil(id: String!): Pupil,

    deleteTeacher(id: String!): Teacher,

    deleteLesson(id: String!): Lesson,

  }
`