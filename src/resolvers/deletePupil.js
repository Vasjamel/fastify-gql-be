export async function deletePupil(_parent, { id }, ctx) {
  try {
    const existingPupil = await ctx.prisma.pupil.findUnique({
      where: { id },
    });

    if (!existingPupil) {
      return Error(`Pupil with ID "${id}" does not exist`);
    }

    await ctx.prisma.pupil.delete({
      where: { id },
    });

    return existingPupil;
  } catch (error) {
    return error;
  }
}
