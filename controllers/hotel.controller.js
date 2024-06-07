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
      const { minPrice, maxPrice, search, page = 1, limitHotel } = req.query; //lấy dữ liệu từ query
      const queryOption = {}; //khai báo option
      if (minPrice && maxPrice) {
        queryOption.cheapestPrice = {
          $gte: minPrice,
          $lte: maxPrice,
        }; //100 <= cheapestPrice <= 400, gte: lớn hơn hoặc bằng, lte: bé hơn hoặc bằng
      }
      if (search) {
        queryOption.name = {
          $regex: `.*${search}.*`, //so sánh chữ in hoa in thường và ký tự mongdb - moongse
          $options: "i",
        };
      }
      //limitHotel: undefined
      const limit = 5;
      const limitNumber = Number(limitHotel) || Number(limit); //5
      const skipHotel = (Number(page) - 1) * limitNumber; //0 skip 0 phan tu
      const hotels = await HotelModel.find(queryOption)
        .limit(limitNumber) //limitHotel undefind 5ptu
        .skip(skipHotel); //0 ptu skip skip 0
      return res.status(200).json({
        success: true,
        message: "Lấy dữ liệu khách sạn thành công",
        hotels,
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
  deleteHotel: async (req, res, next) => {
    try {
      const hotelId = req.params.id;
      const exitedHotel = await HotelModel.findById(hotelId);
      if (!exitedHotel) {
        return createError(res, 404, "Không tìm thấy khách sạn");
      }
      await HotelModel.findOneAndDelete({ _id: hotelId });
      return res.json({ success: true, message: "Xóa khách sạn thành công" });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
  updateHotel: async (req, res, next) => {
    try {
      const hotelId = req.params.id;
      const body = req.body;
      const exitedHotel = await HotelModel.findById(hotelId);
      if (!exitedHotel) {
        return createError(res, 404, "Không tìm thấy khách sạn");
      }
      const updateHotel = await HotelModel.findOneAndUpdate(
        { _id: hotelId },
        body,
        { new: true }
      );
      return res.json({
        success: true,
        message: "Cập nhật khách sạn thành công",
        hotel: updateHotel,
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
};
