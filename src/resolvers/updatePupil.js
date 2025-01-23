export async function updatePupil(_parent, { id, name, age, classId }, ctx) {
  try {
    const existingPupil = await ctx.prisma.pupil.findUnique({
      where: {
        id,
      },
    });
    if (!existingPupil) {
      return Error(`Pupil with id "${id}" does not exist`);
    }

    const updatedPupil = await ctx.prisma.pupil.update({
      where: {
        id,
      },
      data: {
        name,
        age,
        classId,
      },
    });

    return updatedPupil;
  } catch (error) {
    return error;
  }
}