const express = require("express");

const router = express.Router();
//req: request, res: response
router.get("/hello", function (req, res) {
  res.send("Hello World, Nodejs");
});

module.exports = router;
