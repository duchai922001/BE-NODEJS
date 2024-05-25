const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/book-app"); ///127.0.0.1 or localhost
    console.log("Connect DB successful");
  } catch (error) {
    console.log("Connect DB failure " + error.message);
  }
}

module.exports = connectDB;
