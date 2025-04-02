const { LESSONS_INCLUDE } = require('../utils/includes.js');

module.exports = async function deleteLesson(_parent, { find }, ctx) {
  try {
    const deletedLesson = await ctx.prisma.lesson.delete({
      where: find,
      include: LESSONS_INCLUDE,
    });

    return deletedLesson;
  } catch (error) {
    return error;
  }
}
