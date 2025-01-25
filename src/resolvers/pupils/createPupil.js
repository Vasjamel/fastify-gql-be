import { PUPILS_INCLUDE } from '../utils/includes.js';

export async function createPupil(_parent, args, ctx) {
  try {
    const existingPupil = await ctx.prisma.pupil.findFirst({
      where: {
        name: args.name,
        ...(args.birthday && { birthday: args.birthday }),
      },
    });
    if (existingPupil) {
      const born = birthday ? `who born "${args.birthday}"` : '';
      return Error(`Pupil "${args.name}" ${born} already exists`);
    }

    const newPupil = {
      ...args,
      ...(args.lessons && {
        lessons: { connect: args.lessons.map((l) => ({ id: l })) },
      }),
    };

    const pupil = await ctx.prisma.pupil.create({
      data: newPupil,
      include: PUPILS_INCLUDE,
    });
    return pupil;
  } catch (error) {
    return error;
  }
}
