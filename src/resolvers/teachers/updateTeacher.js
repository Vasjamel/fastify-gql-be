import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function updateTeacher(_parent, { id, name, email }, ctx) {
  try {
    const existingTeacher = await ctx.prisma.teacher.findUnique({
      where: {
        id,
      },
    });
    if (!existingTeacher) {
      return Error(`Teacher with id "${id}" does not exist`);
    }

    const updatedTeacher = await ctx.prisma.teacher.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
      include: TEACHERS_INCLUDE
    });

    return updatedTeacher;
  } catch (error) {
    return error;
  }
}