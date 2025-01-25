import { LESSONS_INCLUDE } from '../utils/includes.js';

export async function deleteLesson(_parent, { id }, ctx) {
  try {
    const existingLesson = await ctx.prisma.lesson.findUnique({
      where: { id },
    });

    if (!existingLesson) {
      return Error(`Lesson with ID "${id}" does not exist`);
    }

    await ctx.prisma.lesson.delete({
      where: { id },
      include: LESSONS_INCLUDE
    });

    return existingLesson;
  } catch (error) {
    return error;
  }
}