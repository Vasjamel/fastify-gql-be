import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function deleteTeacher(_parent, { id }, ctx) {
  try {
    const existingTeacher = await ctx.prisma.teacher.findUnique({
      where: { id },
    });

    if (!existingTeacher) {
      return Error(`Teacher with ID "${id}" does not exist`);
    }

    await ctx.prisma.teacher.delete({
      where: { id },
      include: TEACHERS_INCLUDE
    });

    return existingTeacher;
  } catch (error) {
    return error;
  }
}