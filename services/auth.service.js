const AuthRepo = require("../repository/auth.repository");
const bcrypt = require("bcrypt");
const AuthService = {
  register: async (data) =>
    new Promise(async (resolve, reject) => {
      const existUser = await AuthRepo.findUserByUsername(data.username);
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(data.password, salt);
      if (existUser) {
        return reject({
          message: "Username đã tồn tại",
        });
      }
      const newUser = await AuthRepo.create({
        ...data,
        password: hashPassword,
      });
      return resolve(newUser);
    }),
};

module.exports = AuthService;
