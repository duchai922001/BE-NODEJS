// isAdmin
class RegisterDTO {
  constructor(data) {
    this.username = data.username;
    this.password = data.password;
    this.avatar = data.avatar;
    this.address = data.address;
  }

  validate() {
    const errors = [];
    if (!this.username || !this.password) {
      errors.push({ field: "username, password", message: "Bắt buộc nhập" });
    }

    if (this.password.length < 6) {
      errors.push({ field: "password", message: "Password tối thiếu 6 ký tự" });
    }

    return errors;
  }
}

module.exports = RegisterDTO;
