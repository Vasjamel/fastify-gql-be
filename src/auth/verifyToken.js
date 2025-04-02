const jwt = require('jsonwebtoken')
const prisma = require('../prisma/index.js')

module.exports = async function verifyToken(req, reply) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({ error: 'Unauthorized' });
    }
    
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decoded.user) {
      const isExisting = await prisma.user.findUnique({
        where: { id: decoded.user.id },
      });
      if (isExisting) {
        return {user: decoded.user, valid: true }
      } else {
        throw Error('Does not exist')
      }
    }

    throw Error('Incorrect');
  } catch (err) {
    return reply.status(401).send({ error: 'Unauthorized' });
  }
}
