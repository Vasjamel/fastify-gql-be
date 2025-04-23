const { PUPILS_INCLUDE } = require('../utils/includes.js');

module.exports = async function deletePupil(_parent, { find }, ctx) {
  try {
    const deletedPupil = await ctx.prisma.pupil.delete({
      where: find,
      include: PUPILS_INCLUDE,
    });

    return deletedPupil;
  } catch (error) {
    throw error;
  }
}
