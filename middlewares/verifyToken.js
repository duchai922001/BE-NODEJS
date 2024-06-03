const createError = require("../utils/error");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; //undefined - value
  if (!token) {
    return next(createError(res, 403, "Bạn không xác thực")); //trả về
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(createError(res, 403, "Token không tồn tại"));
    req.user = decoded; //verify
    next(); //pass
  });
};

const verifyAdmin = (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    return createError(res, 403, "Bạn không có quyền vào đây");
  }
  next(); //pass isAdmin
};
//body : req.body
//params: req.params
//query: req.query

//sign taoj ra token

module.exports = { verifyToken, verifyAdmin };
