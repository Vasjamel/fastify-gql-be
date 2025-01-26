import { LESSONS_INCLUDE } from '../utils/includes.js';

export async function createLesson(_parent, {data}, ctx) {
  try {

    const { subject } = data
    
    const existingLesson = await ctx.prisma.lesson.findFirst({
      where: {
        subject,
      },
    });
    
    if (existingLesson) {
      return Error(`A lesson "${subject}" already exists`);
    }

    const newTeacher = Object.entries(data).reduce((teacher, [key, value]) => {

      // add teacherId field for one-to-many connection
      if (key === 'teacher') {
        teacher.teacherId = value.connect[0].id;
        return teacher
      }
      teacher[key] = value;
      return teacher
    }, {})
    

    if (data.teacher) {
      data.teacherId = data.teacher.connect.id;
    }

    const lesson = await ctx.prisma.lesson.create({ data: newTeacher, include: LESSONS_INCLUDE });
    return lesson;
  } catch (error) {
    return error;
  }
}
