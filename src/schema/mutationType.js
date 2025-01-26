export const mutation = `
  type Mutation {

    createTeacher(data: TeacherInput): Teacher,

    createLesson(data: LessonInput): Lesson,

    createPupil(data: PupilInput): Pupil

    deletePupil(find: PupilFind): Pupil,

    deleteTeacher(find: TeacherFind): Teacher,

    deleteLesson(find: LessonFind): Lesson,

  }
`