module.exports = async function getLessonContent(_parent, { find, options = {} }, ctx) {
  console.log('pes')
  try {
    return ctx.prisma.lessonContent.findMany({ where: find })
  } catch(e) {
    throw e
  }
}