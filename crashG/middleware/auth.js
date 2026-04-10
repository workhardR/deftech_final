const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'deftech_jwt_secret_change_in_production';

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer '))
    return res.status(401).json({ success: false, message: 'Unauthorized — no token provided.' });
  try {
    req.user = jwt.verify(header.split(' ')[1], JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'Unauthorized — invalid or expired token.' });
  }
}

module.exports = authMiddleware;
