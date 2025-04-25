module.exports = async function getLessonContent(_parent, { find, options = {} }, ctx) {
  try {
    return ctx.prisma.lessonContent.findMany({ where: find })
  } catch(e) {
    throw e
  }
}