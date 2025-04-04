const ROLES = require('../../enums/roles.enum.js');
const { TEACHERS_INCLUDE } = require('../utils/includes.js');
const getQueryOptions = require('../utils/options.js')

module.exports = async function getTeachers(_parent, { find, options }, ctx) {
  const { user, prisma } = ctx;

  if (user.role === ROLES.STUDENT) return;

  const where = {
    ...(user.role === ROLES.TEACHER && { id: user.id }),
    ...find,
  };
  return prisma.teacher.findMany({ where, include: TEACHERS_INCLUDE, ...getQueryOptions(options) });
};
