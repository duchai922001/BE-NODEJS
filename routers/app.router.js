const router = require("express").Router();

router.get("/home", (req, res) => res.render("home.ejs"));

module.exports = router;
