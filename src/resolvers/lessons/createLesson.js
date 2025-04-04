const { LESSONS_INCLUDE } = require('../utils/includes.js');

module.exports = async function createLesson(_parent, { data }, ctx) { 
  try {
    const { subject } = data;

    const existingLesson = await ctx.prisma.lesson.findFirst({
      where: {
        subject,
      },
    });

    if (existingLesson) {
      return Error(`A lesson "${subject}" already exists`);
    }

    const newLesson = Object.entries(data).reduce((lesson, [key, value]) => {
      if (key === 'teacher') {
        lesson.teacherId = value.connect[0].id;
        return lesson;
      }
      lesson[key] = value;
      return lesson;
    }, {});

    const lesson = await ctx.prisma.lesson.create({
      data: { ...newLesson, content: { create: newLesson.content } },
      include: LESSONS_INCLUDE,
    });

    return lesson;
  } catch (error) {
    return error;
  }
};
