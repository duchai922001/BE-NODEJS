const HttpStatus = require("../enums/http-status.enum");

const BadRequest = (message, errors) => {
  return {
    ok: false,
    statusCode: HttpStatus.BAD_REQUEST,
    message: message ? message : "Bad request",
    errors: errors ? errors : [],
  };
};

module.exports = BadRequest;
