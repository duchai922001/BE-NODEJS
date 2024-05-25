const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const createError = require("../utils/error");
module.exports = {
  register: async (req, res, next) => {
    try {
      const body = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(body.password, salt);
      const exitedUser = await UserModel.findOne({ username: body.username });
      if (exitedUser) {
        return next(createError(res, 403, "Tài khoản này đã tồn tại"));
      }
      const newUser = await UserModel.create({
        ...body,
        password: hashPassword,
      });
      return res
        .status(201)
        .json({ success: true, message: "Đăng ký thành công", user: newUser });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
};
