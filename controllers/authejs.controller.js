const UserModel = require("../models/user.model");
const url = require("url");
module.exports = {
  login: async (req, res) => {
    const body = req.body;
    try {
      const user = await UserModel.findOne({ username: body.username });
      if (!user) {
        return res.render("auth/login", {
          errorMessage: "Tài khoản không tồn tại",
        });
      }
      if (user.password !== body.password) {
        return res.render("auth/login", {
          errorMessage: "Mật khẩu không đúng",
        });
      }
      res.redirect(
        url.format({
          pathname: "/login-success",
          query: {
            username: user.username,
            address: user.address,
          },
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  },
  renderPageLogin: (req, res) => {
    res.render("auth/login.ejs", { errorMessage: "" });
  },
  loginSuccess: (req, res) => {
    res.render("loginSuccess.ejs", {
      username: req.query.username,
      address: req.query.address,
    });
  },
};
