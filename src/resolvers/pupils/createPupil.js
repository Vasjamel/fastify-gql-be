import ROLES from '../../enums/roles.enum.js';
import { PUPILS_INCLUDE } from '../utils/includes.js';

export async function createPupil(_parent, { data }, ctx) {
  const { user, prisma } = ctx;
  if (user.role === ROLES.STUDENT || user.role === ROLES.GUEST) return; 
  try {
    const { name, birthday } = data;

    const existingPupil = await prisma.pupil.findFirst({
      where: {
        name: name,
        ...(birthday && { birthday }),
      },
    });

    if (existingPupil) {
      const born = birthday ? `who born "${birthday}"` : '';
      throw Error(`Pupil "${name}" ${born} already exists`);
    }

    const pupil = await prisma.pupil.create({
      data,
      include: PUPILS_INCLUDE,
    });
    return pupil;
  } catch (error) {
    return error;
  }
}
