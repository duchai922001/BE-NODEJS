const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    des: {
      type: String,
    },
  },
  {
    versionKey: false, //bỏ cái version đi
    timestamps: true, // tạo ra ngày tạo object, tạo ra ngày update object
  }
);

module.exports = mongoose.model("product", productSchema);
