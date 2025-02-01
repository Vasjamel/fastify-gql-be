import jwt from 'jsonwebtoken';
export async function checkAuth(req, reply) {
  if (req.routerPath === '/login' && req.routerPath === '/signup') return;

  try {
    if (req.url === '/login' || req.url === '/signup') {
      return;
    }

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
