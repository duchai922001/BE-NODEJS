const HotelModel = require("../models/hotel.model");
const createError = require("../utils/error");
module.exports = {
  createHotel: async (req, res, next) => {
    try {
      const body = req.body;
      const newHotel = await HotelModel.create(body); //tạo hotel
      return res
        .status(201)
        .json({ success: true, message: "Tạo thành công", hotel: newHotel });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
  getHotel: async (req, res) => {
    try {
      const { minPrice, maxPrice, search, limitHotel } = req.query; //lấy dữ liệu từ query
      const queryOption = {}; //khai báo option
      if (minPrice && maxPrice) {
        queryOption.cheapestPrice = {
          $gte: minPrice,
          $lte: maxPrice,
        }; //100 <= cheapestPrice <= 400
      }
      if (search) {
        queryOption.name = {
          $regex: `.*${search}.*`, //so sánh chữ in hoa in thường và ký tự mongdb - moongse
          $options: "i",
        };
      }
      const hotels = await HotelModel.find(queryOption).limit(limitHotel);
      return res.status(200).json({
        success: true,
        message: "Lấy dữ liệu khách sạn thành công",
        hotels,
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
};
