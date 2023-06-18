const Schema = require('./schema');
class Middleware {
  static schemeValidate(schema) {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
      next();
    };
  }
  static verifyToken(req, res, next) {
    const authHeader = req.headers.Authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(401).json({ error: 'Invalid token' });
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      res.status(401).json({ error: 'Missing authorization header' });
    }
  }
}
module.exports = Middleware;