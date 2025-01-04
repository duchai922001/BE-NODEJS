const express = require("express");
const connectDb = require("./configs/connectDb");
const rootRouter = require("./routers/index");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
const expressLayout = require("express-ejs-layouts");
dotenv.config(); //để xử dụng file .env
app.use(expressLayout);
app.use(express.json()); //server sẽ nhận dữ liệu là json
app.use(express.urlencoded({ extended: true })); //nó sẽ hiểu là json lồng nhau
app.use(cookieParser());
rootRouter(app);
connectDb();

app.listen(5000, () => console.log("Server start port 5000"));
