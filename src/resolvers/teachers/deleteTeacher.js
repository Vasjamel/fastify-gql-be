import ROLES from '../../enums/roles.enum.js';
import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function deleteTeacher(_parent, { find }, ctx) {
  const { user, prisma } = ctx;
  if (user.role === ROLES.STUDENT || user.role === ROLES.TEACHER) return;
  
  try {
    const deletedTeacher = await prisma.teacher.delete({
      where: find,
      include: TEACHERS_INCLUDE,
    });

    return deletedTeacher;
  } catch (error) {
    return error;
  }
}
