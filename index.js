const express = require("express");
const connectDb = require("./configs/connectDb");
const rootRouter = require("./routers/index");
const app = express();

app.use(express.json()); //server sẽ nhận dữ liệu là json
app.use(express.urlencoded({ extended: true })); //nó sẽ hiểu là json lồng nhau
rootRouter(app);
connectDb();

app.listen(5000, () => console.log("Server start port 5000"));
