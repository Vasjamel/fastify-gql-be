import { PUPILS_INCLUDE } from '../utils/includes.js';

export async function deletePupil(_parent, { find }, ctx) {
  try {
    const deletedPupil = await ctx.prisma.pupil.delete({
      where: find,
      include: PUPILS_INCLUDE
    });

    return deletedPupil;
  } catch (error) {
    return error;
  }
}
