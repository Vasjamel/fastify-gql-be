import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function getTeachers(_parent, { find }, ctx) {
  return ctx.prisma.teacher.findMany({ where: find, include: TEACHERS_INCLUDE });
}
