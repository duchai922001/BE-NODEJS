const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumber: [
      {
        number: Number, //201
        unavailableDates: {
          type: [Date], //5,6,7-6-2024
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("room", roomSchema);
