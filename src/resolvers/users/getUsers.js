const { USERS_INCLUDE } = require('../utils/includes.js');
const getQueryOptions = require('../utils/options.js');

module.exports = async function getUsers(_parent, { find, options = {} }, ctx) {
  try {
    const { prisma } = ctx;

    return prisma.user.findMany({
      where: find,
      include: USERS_INCLUDE,
      ...getQueryOptions(options),
    });
  } catch (err) {
    throw err;
  }
};
