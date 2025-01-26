import { LESSONS_INCLUDE } from '../utils/includes.js';

export async function getLessons(_parent, _args, ctx) {
  return ctx.prisma.lesson.findMany({ include: LESSONS_INCLUDE });
}
