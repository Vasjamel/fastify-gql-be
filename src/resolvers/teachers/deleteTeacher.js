import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function deleteTeacher(_parent, { find }, ctx) {
  try {
    const deletedTeacher = await ctx.prisma.teacher.delete({
      where: find,
      include: TEACHERS_INCLUDE,
    });

    return deletedTeacher;
  } catch (error) {
    return error;
  }
}
