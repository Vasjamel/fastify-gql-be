module.exports = async function createLessonContent(_parent, { data }, ctx) {
  try {
    const lessonContent = await ctx.prisma.lessonContent.create({
      data,
    });
    return lessonContent;
  } catch (error) {
    throw error;
  }
};
