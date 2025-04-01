import { USERS_INCLUDE } from '../utils/includes.js';

export async function getUsers(_parent, { find }, ctx) {
  const { prisma } = ctx;

  return prisma.user.findMany({ where: find, include: USERS_INCLUDE });
}
