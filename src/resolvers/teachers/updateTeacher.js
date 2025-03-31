import ROLES from '../../enums/roles.enum.js';
import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function updateTeacher(_parent, { find, data }, ctx) {
  const { user, prisma } = ctx;
  if (user.role === ROLES.STUDENT) return;
  if (user.role === ROLES.TEACHER && user.id !== find.id) return
  
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
}
