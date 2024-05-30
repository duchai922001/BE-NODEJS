const express = require("express");
const connectDb = require("./configs/connectDb");
const rootRouter = require("./routers/index");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");

dotenv.config(); //để xử dụng file .env
app.use(express.json()); //server sẽ nhận dữ liệu là json
app.use(express.urlencoded({ extended: true })); //nó sẽ hiểu là json lồng nhau
app.use(cookieParser());
rootRouter(app);
connectDb();

app.get("/api/v1/booking", async (req, res) => {
  res.send("Data");
});
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, () => console.log("Server start port 5000"));
