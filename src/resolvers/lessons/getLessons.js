import { LESSONS_INCLUDE } from '../utils/includes.js';

export async function getLessons(_parent, { find }, ctx) {
  return ctx.prisma.lesson.findMany({ where: find, include: LESSONS_INCLUDE });
}
