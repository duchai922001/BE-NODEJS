const express = require("express"); //import thư viện express
const router = express.Router(); //khai báo router và sử dụng thư express.Router()
const AuthEJSController = require("../controllers/authejs.controller");
router.get("/login", AuthEJSController.renderPageLogin);
router.post("/login", AuthEJSController.login);
router.get("/login-success", AuthEJSController.loginSuccess);
module.exports = router; //export router
