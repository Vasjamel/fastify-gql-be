const ROLES = require('../../enums/roles.enum.js');
const { TEACHERS_INCLUDE } = require('../utils/includes.js');

module.exports = async function getTeachers(_parent, { find }, ctx) {
  const { user, prisma } = ctx;

  if (user.role === ROLES.STUDENT) return;

  const where = {
    ...(user.role === ROLES.TEACHER && { id: user.id }),
    ...find,
  };

  return prisma.teacher.findMany({ where, include: TEACHERS_INCLUDE });
};
