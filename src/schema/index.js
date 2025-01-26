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
  }

  type Teacher {
    id: String, 
    name: String,
    lessons: [Lesson]
  }

  scalar Date
`;

export default schema;
