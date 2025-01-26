import { PUPILS_INCLUDE } from '../utils/includes.js';

export async function getPupils(_parent, _args, ctx) {
  return ctx.prisma.pupil.findMany({ include: PUPILS_INCLUDE });
}
