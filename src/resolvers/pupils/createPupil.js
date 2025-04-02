const ROLES = require('../../enums/roles.enum.js');
const { PUPILS_INCLUDE } = require('../utils/includes.js');

module.exports = async function createPupil(_parent, { data }, ctx) {
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
