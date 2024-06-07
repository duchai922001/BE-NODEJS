const router = require("express").Router();
const RoomController = require("../controllers/room.controller");
router.post("/create-room/:id", RoomController.createRoom);
module.exports = router;
