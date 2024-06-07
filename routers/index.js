//rootRouter: hellorouter, productrouter
//mục đích là để tổng hợp các router lại
const HelloRouter = require("./hello.router");
const ProductRouter = require("./product.router");
const AuthRouter = require("./auth.router");
const HotelRouter = require("./hotel.router");
const RoomRouter = require("./room.Router");
const rootRouter = (app) => {
  app.use("/api", HelloRouter); //http://localhost:5000/api/hello
  app.use("/api", ProductRouter); // http://localhost:5000/api/product
  app.use("/api", AuthRouter); //http://localhost:5000/api/register
  app.use("/api", HotelRouter); //http://localhost:5000/api/...
  app.use("/api", RoomRouter);
};

module.exports = rootRouter;
