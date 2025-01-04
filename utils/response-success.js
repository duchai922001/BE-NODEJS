const responseSuccess = (data, message) => {
  return {
    ok: true,
    message: message ? message : "Thành công",
    data: data ? data : [],
  };
};

module.exports = responseSuccess;
