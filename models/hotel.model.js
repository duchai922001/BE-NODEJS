const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    title: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    rooms: {
      type: [String],
    },
    cheapestPrice: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("hotel", hotelSchema);
