export async function createLesson(_parent, { subject, teacherId }, ctx) {
  try {
    const existingLesson = await ctx.prisma.lesson.findFirst({
      where: {
        subject,
      },
    });
    if (existingLesson) {
      return Error(`A lesson "${subject}" already exists`);
    }

    const newLesson = {
      subject,
      teacherId,
    };

    const lesson = await ctx.prisma.lesson.create({ data: newLesson });
    return lesson;
  } catch (error) {
    return error;
  }
}
