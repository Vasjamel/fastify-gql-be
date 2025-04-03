const { LESSONS_INCLUDE } = require('../utils/includes.js');

module.exports = async function createLesson(_parent, { data }, ctx) {
  const lessonContent = await ctx.prisma.lesson.create({
    data,
    include: LESSONS_INCLUDE,
  });
  return lessonContent;
}