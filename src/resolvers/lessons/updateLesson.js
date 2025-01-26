import { LESSONS_INCLUDE } from '../utils/includes.js';

export async function updateLesson(_parent, { find, data }, ctx) {
  try {

    const updatedLesson = await ctx.prisma.lesson.update({
      where: find,
      data,
      include: LESSONS_INCLUDE
    });

    return updatedLesson;
  } catch (error) {
    return error;
  }
}