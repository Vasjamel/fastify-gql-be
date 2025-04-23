const ROLES = require('../../enums/roles.enum.js');
const { TEACHERS_INCLUDE } = require('../utils/includes.js');
module.exports = async function deleteTeacher(_parent, { find }, ctx) {
  const { user, prisma } = ctx;
  if (user.role === ROLES.STUDENT || user.role === ROLES.TEACHER) return;
  
  try {
    const deletedTeacher = await prisma.teacher.delete({
      where: find,
      include: TEACHERS_INCLUDE,
    });

    return deletedTeacher;
  } catch (error) {
    throw error;
  }
}
