import jwt from 'jsonwebtoken';
export async function checkAuth(req, reply) {
  if (req.raw.url === '/login' || req.raw.url === '/signup' || req.raw.url === '/verify-token') return;

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return reply.status(401).send({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
  } catch (err) {
    return reply.status(401).send({ error: 'Unauthorized' });
  }
}
