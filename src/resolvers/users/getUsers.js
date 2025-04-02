const { USERS_INCLUDE } = require('../utils/includes.js');

module.exports = async function getUsers(_parent, { find }, ctx) {
  const { prisma } = ctx;

  return prisma.user.findMany({ where: find, include: USERS_INCLUDE });
}
