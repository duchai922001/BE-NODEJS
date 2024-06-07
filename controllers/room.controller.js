const createError = require("../utils/error");
const RoomModel = require("../models/room.model");
const HotelModel = require("../models/hotel.model");
module.exports = {
  createRoom: async (req, res, next) => {
    try {
      const hotelId = req.params.id;
      const body = req.body;
      const newRoom = await RoomModel.create(body); //tao duoc phong
      try {
        await HotelModel.findByIdAndUpdate(hotelId, {
          $push: { rooms: newRoom._id },
        });
      } catch (error) {
        return next(createError(res, 500, error.message));
      }
      return res.status(201).json({
        success: true,
        message: "Tạo phòng thành công",
        room: newRoom,
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
};
