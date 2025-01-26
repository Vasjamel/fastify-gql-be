import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function updateTeacher(_parent, { find, data }, ctx) {
  try {
    const updatedTeacher = await ctx.prisma.teacher.update({
      where: find,
      data,
      include: TEACHERS_INCLUDE,
    });

    return updatedTeacher;
  } catch (error) {
    return error;
  }
}
