const express = require("express");
const { engine } = require("express-handlebars");
const mongoose = require("mongoose");

const { PORT1 } = require("./configs/config");
const userRouter = require("./routes/user.router");
const carRouter = require("./routes/car.router");
const reportRouter = require("./routes/report.router");

const app = express();

app.engine(".hbs", engine({ defaultLayout: false }));
app.set("view engine", ".hbs");
app.set("views", "./hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reports", reportRouter);
app.use("/users", userRouter);
app.use("/cars", carRouter);

mongoose.connect("mongodb://localhost:27017/hebron_course").then((value) => {
  console.log("Connection success");
});

app.listen(PORT1, () => {
  console.log(`App listen ${PORT1}`);
});
