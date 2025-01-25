import { PUPILS_INCLUDE } from '../utils/includes.js';

export async function updatePupil(_parent, args, ctx) {
  try {
    const existingPupil = await ctx.prisma.pupil.findUnique({
      where: {
        id: args.id,
      },
    });
    if (!existingPupil) {
      return Error(`Pupil with id "${id}" does not exist`);
    }

    const updatedPupil = await ctx.prisma.pupil.update({
      where: {
        id: args.id,
      },
      data: args,
      include: PUPILS_INCLUDE
    });

    return updatedPupil;
  } catch (error) {
    return error;
  }
}