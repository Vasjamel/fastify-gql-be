const mutation = `
  type Mutation {

    createTeacher(data: TeacherInput!): Teacher,

    createLesson(data: LessonInput!): Lesson,

    createPupil(data: PupilInput!): Pupil

    createLessonContent(data: LessonContentInput!): LessonContent

    deletePupil(find: PupilFind!): Pupil,

    deleteTeacher(find: TeacherFind!): Teacher,

    deleteLesson(find: LessonFind!): Lesson,

    updateLesson(find: LessonFind!, data: LessonInput!): Lesson,

    updatePupil(find: PupilFind!, data: PupilInput!): Pupil,

    updateTeacher(find: TeacherFind!, data: TeacherInput!): Teacher

  }
`;

module.exports = { mutation };
