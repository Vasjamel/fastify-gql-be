import prisma from '../prisma/index.js';
import jwt from 'jsonwebtoken';

function normalizeUser(user) {
  return Object.entries(user).reduce((normalizedUser, [key, value]) => {
    if (key === 'updatedAt') return normalizedUser;
    if (key === 'password') return normalizedUser;
    normalizedUser[key] = value;
    return normalizedUser;
  }, {});
}

export async function verifyToken(req, reply) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.userId) {
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });
      return { data: normalizeUser(user) };
    }

    throw Error('Incorrect');
  } catch (err) {
    return reply.status(401).send({ error: 'Unauthorized' });
  }
}
