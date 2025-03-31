import ROLES from '../../enums/roles.enum.js';
import { TEACHERS_INCLUDE } from '../utils/includes.js';

export async function createTeacher(_parent, { data }, ctx) {
  const { user, prisma } = ctx;
  if (user.role !== ROLES.ADMIN && user.role !== ROLES.SUPER_ADMIN) return;
  
  try {
    const { name } = data;
    const existingTeacher = await prisma.teacher.findFirst({
      where: {
        name,
      },
    });
    if (existingTeacher) {
      return Error(`Teacher ${name} already exists.`);
    }

    const teacher = await prisma.teacher.create({
      data,
      include: TEACHERS_INCLUDE,
    });
    return teacher;
  } catch (error) {
    return error;
  }
}
