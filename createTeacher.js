import prisma from './prisma/index.js';

export async function createTeacher(_parent, { name, lessonsId }, ctx) {
  try {
    const existingTeacher = await ctx.prisma.teacher.findFirst({
      where: {
        name,
      },
    });
    if (existingTeacher) {
      throw Error('Teacher already exists with this name');
    }

    const newTeacher = {
      name,
      lessonsId,
    };

    const teacher = await prisma.teacher.create({ data: newTeacher });
    return teacher;
  } catch (error) {
    console.log(error);
  }
}
