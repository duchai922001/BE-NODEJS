const User = require("../models/user.model");

class AuthRepository {
  async create(data) {
    try {
      return await User.create(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findUserByUsername(username) {
    try {
      return await User.findOne({ username: username });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new AuthRepository();
