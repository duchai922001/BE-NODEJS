const express = require("express");
const router = express.Router();
const HotelController = require("../controllers/hotel.controller");
const verify = require("../middlewares/verifyToken");
router.post(
  "/create-hotel",
  verify.verifyToken,
  verify.verifyAdmin,
  HotelController.createHotel
); ///api/create-hotel,
router.get("/get-hotel", HotelController.getHotel);
module.exports = router;
