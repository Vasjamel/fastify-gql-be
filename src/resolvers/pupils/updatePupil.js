const { PUPILS_INCLUDE } = require('../utils/includes.js');

module.exports = async function updatePupil(_parent, { find, data }, ctx) {
  try {
    const updatedPupil = await ctx.prisma.pupil.update({
      where: find,
      data,
      include: PUPILS_INCLUDE,
    });

    return updatedPupil;
  } catch (error) {
    throw error;
  }
}
