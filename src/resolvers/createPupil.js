export async function createPupil(_parent, { name, grade, birthday }, ctx) {
  try {

    const existingPupil = await ctx.prisma.pupil.findFirst({
      where: {
        name,
        ...(birthday && { birthday })
      },
    });
    if (existingPupil) {
      const born = birthday ? `born "${birthday}"` : ""
      return Error(`Pupil "${name}" ${born} already exists`);
    }

    const newPupil = {
      name, 
      grade,
      ...(birthday && { birthday })
    };

    const pupil = await ctx.prisma.pupil.create({ data: newPupil });
    return pupil;
  } catch (error) {
    return error
  }
}
