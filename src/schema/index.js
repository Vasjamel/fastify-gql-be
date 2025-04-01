import { query } from './queryType.js';
import { mutation } from './mutationType.js';
import { inputTypes } from './inputTypes.js';

const schema = `
  
  ${query}

  ${mutation}

  ${inputTypes}
  

  type Lesson {
    id: String,
    subject: String, 
    teacher: Teacher,
    pupils: [Pupil]
  }

  type Pupil {
    id: String,
    name: String,
    birthday: Date,
    group: String,
    lessons: [Lesson]
    user: User
  }

  type Teacher {
    id: String, 
    name: String,
    lessons: [Lesson]
    user: User
  }

  type User {
    id: String,
    email: String,
    name: String,
    role: Role,
    pupil: Pupil,
    teacher: Teacher
  }

  scalar Date

  enum Role {
    TEACHER
    STUDENT
    GUEST
    ADMIN
    SUPER_ADMIN
  }
`;

export default schema;
