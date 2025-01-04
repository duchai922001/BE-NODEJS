const HttpStatus = require("../enums/http-status.enum");
const HttpException = require("./http-exception");

class NotFoundException extends HttpException {
  constructor(message = "Not Found") {
    super(HttpStatus.NOT_FOUND, message);
  }
}

module.exports = NotFoundException;
