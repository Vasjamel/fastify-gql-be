import { PUPILS_INCLUDE } from '../utils/includes.js';

export async function getPupils(_parent, { find }, ctx) {
  return ctx.prisma.pupil.findMany({ where: find, include: PUPILS_INCLUDE });
}
