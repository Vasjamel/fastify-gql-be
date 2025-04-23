const query = `
  type Query {
    lessons(find: LessonFind, options: OptionsInput): [Lesson],
    pupils(find: PupilFind, options: OptionsInput): [Pupil],
    teachers(find: TeacherFind, options: OptionsInput): [Teacher],
    users(find: UserFind, options: OptionsInput): [User]
    lessonContents(find: LessonContentFind, options: OptionsInput): [LessonContent],
  }
`

module.exports = { query }