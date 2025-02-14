import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../prisma/index.js';

export async function loginUser(req, reply) {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return reply.status(401).send({ error: 'Invalid email or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return reply.status(401).send({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  return reply.send({ token });
}
