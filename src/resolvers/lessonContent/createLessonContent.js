module.exports = async function createLessonContent(_parent, { data }, ctx) {
  const lessonContent = await ctx.prisma.lessonContent.create({
    data
  });
  return lessonContent;
}