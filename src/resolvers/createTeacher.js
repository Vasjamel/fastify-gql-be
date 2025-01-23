export async function createTeacher(_parent, { name }, ctx) {
  try {
    const existingTeacher = await ctx.prisma.teacher.findFirst({
      where: {
        name,
      },
    });
    if (existingTeacher) {
      return Error('Teacher already exists with this name');
    }

    const newTeacher = {
      name,
    };

    const teacher = await ctx.prisma.teacher.create({ data: newTeacher });
    return teacher;
  } catch (error) {
    return error;
  }
}
