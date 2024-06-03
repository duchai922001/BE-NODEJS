const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("../utils/error");
module.exports = {
  register: async (req, res, next) => {
    try {
      const body = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(body.password, salt); //mã hóa password
      const exitedUser = await UserModel.findOne({ username: body.username });
      if (body.password.length < 8) {
        return next(createError(res, 403, "Vui lòng nhập mật khẩu có 8 ký tự")); //check mật khẩu có đủ 8 ký tự hay không
      }
      if (exitedUser) {
        return next(createError(res, 403, "Tài khoản này đã tồn tại")); // kiểm tra tài khoản này đã tồn tại
      }
      //check password có ký tự đặc biệt
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
  login: async (req, res, next) => {
    try {
      const body = req.body; //nhận data FE
      const user = await UserModel.findOne({ username: body.username }); //user {...} //null
      //xử lý mật khẩu
      if (!user) {
        return next(createError(res, 404, "Người dùng không tồn tại"));
      } //pass
      const isPasswordCorrect = await bcrypt.compare(
        body.password,
        user.password
      ); //false
      if (!isPasswordCorrect) {
        return next(
          createError(res, 400, "Mật khẩu hoặc tài khoản không chính xác")
        );
      }
      //user có tồn tại không

      //tạo ra token => lưu token
      const token = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin }, //data muốn lưu vào token (decoded)
        process.env.JWT_SECRET,
        { expiresIn: "7d" } //xử lý hạn sử dụng token s, m, h, d
      ); //tạo ra token
      const { password, ...otherDetails } = user._doc;
      {
      } //key: value
      return res.cookie("access_token", token, { httpOnly: true }).json({
        success: true,
        message: "Đăng nhập thành công",
        user: { ...otherDetails },
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
};
