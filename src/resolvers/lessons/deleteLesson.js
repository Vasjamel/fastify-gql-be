import { LESSONS_INCLUDE } from '../utils/includes.js';

export async function deleteLesson(_parent, { find }, ctx) {
  try {
    const deletedLesson = await ctx.prisma.lesson.delete({
      where: find,
      include: LESSONS_INCLUDE,
    });

    return deletedLesson;
  } catch (error) {
    return error;
  }
}
