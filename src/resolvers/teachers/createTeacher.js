import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function createTeacher(_parent, { data }, ctx) {
  try {
    const { name } = data;
    const existingTeacher = await ctx.prisma.teacher.findFirst({
      where: {
        name,
      },
    });
    if (existingTeacher) {
      return Error(`Teacher ${name} already exists.`);
    }

    const teacher = await ctx.prisma.teacher.create({
      data,
      include: TEACHERS_INCLUDE,
    });
    return teacher;
  } catch (error) {
    return error;
  }
}
