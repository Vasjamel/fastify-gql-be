export async function updateLesson(_parent, { id, subject, teacherId }, ctx) {
  try {
    const existingLesson = await ctx.prisma.lesson.findUnique({
      where: {
        id,
      },
    });
    if (!existingLesson) {
      return Error(`Lesson with id "${id}" does not exist`);
    }

    const updatedLesson = await ctx.prisma.lesson.update({
      where: {
        id,
      },
      data: {
        subject,
        teacherId,
      },
    });

    return updatedLesson;
  } catch (error) {
    return error;
  }
}