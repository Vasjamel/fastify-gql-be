import { PUPILS_INCLUDE } from '../utils/includes.js';

export async function updatePupil(_parent, { find, data }, ctx) {
  try {
    const updatedPupil = await ctx.prisma.pupil.update({
      where: find,
      data,
      include: PUPILS_INCLUDE,
    });

    return updatedPupil;
  } catch (error) {
    return error;
  }
}
