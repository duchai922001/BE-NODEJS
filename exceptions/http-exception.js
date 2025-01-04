const HttpException = (err, req, res, next) => {
  return res.status(err.status).json({
    ok: false,
    statusCode: err.status ? err.status : 500,
    message: err.message,
  });
};

module.exports = HttpException;
