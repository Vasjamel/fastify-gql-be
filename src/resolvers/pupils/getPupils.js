const { PUPILS_INCLUDE } = require('../utils/includes.js');

module.exports = async function getPupils(_parent, { find }, ctx) {
  return ctx.prisma.pupil.findMany({ where: find, include: PUPILS_INCLUDE });
}
