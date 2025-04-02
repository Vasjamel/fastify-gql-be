const ROLES = require('../../enums/roles.enum.js');
const { TEACHERS_INCLUDE } = require('../utils/includes.js');

module.exports = async function updateTeacher(_parent, { find, data }, ctx) {
  const { user, prisma } = ctx;
  if (user.role === ROLES.STUDENT) return;
  if (user.role === ROLES.TEACHER && user.id !== find.id) return;

  try {
    const updatedTeacher = await prisma.teacher.update({
      where: find,
      data,
      include: TEACHERS_INCLUDE,
    });

    return updatedTeacher;
  } catch (error) {
    return error;
  }
};
