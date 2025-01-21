import bcrypt from 'bcrypt';
import prisma from './prisma/index.js';

const SALT_ROUNDS = 10;

export async function createUser(req, reply) {
  try {
    const { password, email, name } = JSON.parse(req.body);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      throw Error('User already exists with this email');
    }

    const newUser = {
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      email: email,
      name: name,
    };

    const user = await prisma.user.create({ data: newUser });
    return user
  } catch (error) {
    console.log(error);
  }
}
