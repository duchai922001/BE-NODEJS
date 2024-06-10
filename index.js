const express = require("express");
const connectDb = require("./configs/connectDb");
const rootRouter = require("./routers/index");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
const expressLayout = require("express-ejs-layouts");
const HomeRouter = require("./routers/app.router");
const AuthEJSRouter = require("./routers/authejs.router");
dotenv.config(); //để xử dụng file .env
app.use(expressLayout);
app.use(express.json()); //server sẽ nhận dữ liệu là json
app.use(express.urlencoded({ extended: true })); //nó sẽ hiểu là json lồng nhau
app.use(cookieParser());
rootRouter(app);
connectDb();
app.set("view engine", "ejs");
app.set("views", "views"); //"views": config , views folder
app.use(express.static("./public")); //để sử dụng được file trong folder public
app.set("layout", "./master");
//đang định nghĩa 1 cái route với / => localhost:5000
app.use("/", HomeRouter); //http://localhost:5000/home method GET
app.use("/", AuthEJSRouter);
//exact: true

app.listen(5000, () => console.log("Server start port 5000"));
