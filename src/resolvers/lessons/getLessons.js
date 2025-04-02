const { LESSONS_INCLUDE } = require('../utils/includes.js');

module.exports = async function getLessons(_parent, { find }, ctx) {
  return ctx.prisma.lesson.findMany({ where: find, include: LESSONS_INCLUDE });
}
