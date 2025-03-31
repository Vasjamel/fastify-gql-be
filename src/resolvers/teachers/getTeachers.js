import ROLES from '../../enums/roles.enum.js';
import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function getTeachers(_parent, { find }, ctx) {
  const { user, prisma } = ctx;

  if (user.role === ROLES.STUDENT) return;

  const where = {
    ...(user.role === ROLES.TEACHER && { id: user.id }),
    ...find,
  }

  return prisma.teacher.findMany({ where, include: TEACHERS_INCLUDE });
}
