const schema = `
  type Query {
    lessons: [Lesson],
    pupils: [Pupil],
    teachers: [Teacher],
  }

  type Mutation {
    createTeacher(name: String): Teacher,
    createLesson(subject: String!, teacherId: String): Lesson,
    createPupil(name: String!, grade: Int, birthday: Date): Pupil
    deletePupil(id: String!): Pupil,
    deleteTeacher(id: String!): Teacher,
    deleteLesson(id: String!): Lesson,
  }

  type Lesson {
    id: String,
    subject: String, 
    teacher: Teacher,
    pupils: [Pupil]
  }

  type Pupil {
    id: String,
    name: String,
    birthday: Int,
    grade: Int,
    lessons: [Lesson]
  }

  type Teacher {
    id: String, 
    name: String,
    lessons: [Lesson]
  }

  scalar Date
`

export default schema;