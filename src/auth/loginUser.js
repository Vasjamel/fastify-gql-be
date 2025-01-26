import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../prisma/index.js';

export async function loginUser(req, reply) {
  const { email, password } = JSON.parse(req.body);
  console.log('email,pwd', email, password);
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return reply.status(401).send({ error: 'Invalid email or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return reply.status(401).send({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return reply.send({ token });
}
