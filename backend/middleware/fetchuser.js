const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ msg: "Authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).send({ msg: "Authenticate using a valid token" });
  }
};
module.exports = fetchuser;
