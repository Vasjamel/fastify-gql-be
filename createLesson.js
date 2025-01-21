import prisma from './prisma/index.js';

export async function createLesson(_parent, { subject, teacherId, pupils }, ctx) {
  try {
    const existingLesson = await ctx.prisma.lesson.findFirst({
      where: {
        subject,
      },
    });
    if (existingLesson) {
      throw Error('This lesson already exists');
    }

    const newLesson = {
      subject,
      pupils,
      teacherId
    };

    const lesson = await prisma.lesson.create({ data: newLesson });
    return lesson;
  } catch (error) {
    console.log(error);
  }
}
