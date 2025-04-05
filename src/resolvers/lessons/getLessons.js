const { LESSONS_INCLUDE } = require('../utils/includes.js');
const getQueryOptions = require('../utils/options.js')

module.exports = async function getLessons(_parent, { find, options = {} }, ctx) {
  try {
    return ctx.prisma.lesson.findMany({ where: find, include: LESSONS_INCLUDE, ...getQueryOptions(options) });
  } catch(e) {
    throw e
  }
}
