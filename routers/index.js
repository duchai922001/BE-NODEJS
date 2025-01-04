//rootRouter: hellorouter, productrouter
//mục đích là để tổng hợp các router lại
const AuthRouter = require("./auth.router");
const HotelRouter = require("./hotel.router");
const RoomRouter = require("./room.Router");
const rootRouter = (app) => {
  app.use("/api", AuthRouter); //http://localhost:5000/api/register
  app.use("/api", HotelRouter); //http://localhost:5000/api/...
  app.use("/api", RoomRouter);

  app.use((err, req, res, next) => {
    console.log("vao day");
  });
};

module.exports = rootRouter;
