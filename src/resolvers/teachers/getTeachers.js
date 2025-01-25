import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function getTeachers(_parent, _args, ctx) {
  return ctx.prisma.teacher.findMany({ include: TEACHERS_INCLUDE });
}
