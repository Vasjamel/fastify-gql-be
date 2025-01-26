import { PUPILS_INCLUDE } from '../utils/includes.js';

export async function createPupil(_parent, { data }, ctx) {
  try {

    const { name, birthday } = data;

    const existingPupil = await ctx.prisma.pupil.findFirst({
      where: {
        name: name,
        ...(birthday && { birthday }),
      },
    });

    if (existingPupil) {
      const born = birthday ? `who born "${birthday}"` : '';
      throw Error(`Pupil "${name}" ${born} already exists`);
    }

    const pupil = await ctx.prisma.pupil.create({
      data,
      include: PUPILS_INCLUDE,
    });
    return pupil;
  } catch (error) {
    return error;
  }
}
