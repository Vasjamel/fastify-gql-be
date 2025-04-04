const inputTypes = `
  input TeacherInput {
    name: String
    lessons: LessonsConnection
  }
  
  input LessonInput {
    subject: String 
    teacher: TeachersConnection
    pupils: PupilsConnection
    category: String
    objective: String
    title: String
    content: [LessonContentInput]
  }

  input PupilInput {
    name: String
    birthday: Date
    group: String
    lessons: LessonsConnection
  }

  input LessonsConnection {
    connect: [LessonFind]
    disconnect: [LessonFind]
  }

  input PupilsConnection {
    connect: [PupilFind]
    disconnect: [PupilFind]
  }
 

  input TeachersConnection {
    connect: [TeacherFind]
    disconnect: [TeacherFind]
  }

  input TeacherFind {
    id: String 
    name: String
  }

  input LessonFind {
    id: String
    subject: String
  }

  input PupilFind {
    id: String
    name: String
  }

  input UserFind {
    id: String
    email: String
    name: String
    role: Role
  }

  input LessonContentInput {
    type: LessonContentType
    order: Int
    value: String
    lessonId: String
  }
  
  input PaginationInput {
    skip: Int
    take: Int
  }

  input SortingInput {
    field: String!
    order: SortOrder!
  }

  input OptionsInput {
    sort: SortingInput
    pagination: PaginationInput
  }
`;
module.exports = { inputTypes };
