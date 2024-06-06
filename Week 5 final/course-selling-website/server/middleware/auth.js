const jwt = require('jsonwebtoken');

const SECRET = "seC3et";

// Auth Token
const authVerify = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const token = auth.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(403).send("Admin/User authorization failed");
      }
      req.user = user;
      next();
    })
  } else {
    res.status(403).send();
  }
}

module.exports = {
    SECRET, authVerify
}