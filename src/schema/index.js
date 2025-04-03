const { query } = require('./queryType.js');
const { mutation } = require('./mutationType.js');
const { inputTypes } = require('./inputTypes.js');

const schema = `
  scalar Date

  enum Role {
    TEACHER
    STUDENT
    GUEST
    ADMIN
    SUPER_ADMIN
  }

  enum LessonContentType {
    TEXT
    VIDEO
    AUDIO
    IMAGE
    PDF
    LINK
  }
  ${query}

  ${mutation}

  ${inputTypes}
  

  type Lesson {
    id: String
    subject: String 
    teacher: Teacher
    pupils: [Pupil]
    category: String
    objective: String
    title: String
    content: [LessonContent]
  }

  type Pupil {
    id: String
    name: String
    birthday: Date
    group: String
    lessons: [Lesson]
    user: User
  }

  type Teacher {
    id: String 
    name: String
    lessons: [Lesson]
    user: User
  }

  type User {
    id: String
    email: String
    name: String
    role: Role
    pupil: Pupil
    teacher: Teacher
  }

  type LessonContent {
    id: String
    type: LessonContentType
    order: Int
    value: String
  }
`;

module.exports = schema;
