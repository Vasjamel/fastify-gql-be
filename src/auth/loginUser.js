const jwt = require('jsonwebtoken')
const prisma = require('../prisma/index.js')
const bcrypt = require('bcrypt')


module.exports = async function loginUser(req, reply) {
  const { email, password } = JSON.parse(req.body);
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return reply.status(401).send({ error: 'Invalid email or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return reply.status(401).send({ error: 'Invalid email or password' });
  }
  const tokenizedUser = { id: user.id, role: user.role, name: user.name }
  const token = jwt.sign(
    tokenizedUser,
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
  return reply.send({ token });
}
