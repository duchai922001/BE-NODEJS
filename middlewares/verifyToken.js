const createError = require("../utils/error");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.cookies.token; //undefined
  if (!token) {
    return next(createError(res, 403, "Bạn không xác thực"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(createError(res, 403, "Token không tồn tại"));
    req.user = decoded; //verify
    next(); //pass
  });
};

//sign taoj ra token

module.exports = verifyToken;
