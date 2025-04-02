const bcrypt = require('bcrypt');
const prisma = require('../prisma/index.js');

const SALT_ROUNDS = 10;

module.exports = async function createUser(req, reply) {
  try {
    const { password, email, name } = JSON.parse(req.body);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return Error('User already exists with this email');
    }

    const createHash = async (pwd) => await bcrypt.hash(pwd, SALT_ROUNDS);
    const newUser = {
      name,
      email,
      password: await createHash(password),
    };

    const user = await prisma.user.create({ data: newUser });
    return user;
  } catch (error) {
    return error;
  }
};
