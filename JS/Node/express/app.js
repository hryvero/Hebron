const express = require("express");
const { engine } = require("express-handlebars");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const { PORT1, MONGO_URL } = require("./configs/config");
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
app.use("*", _notFoundHandler);

app.use(_mainErrorHandler);

function _notFoundHandler(req, res, next) {
  next(new ApiError("Not found", 404));
}

function _mainErrorHandler(err, req, res, next) {
  console.log("____________________________-");
  console.log(err);
  console.log("____________________________-");

  res.status(err.status || 500).json({
    message: err.message || "Server error",
    status: err.status,
    data: {},
  });
}

mongoose.connect(MONGO_URL).then((value) => {
  console.log("Connection success");
});

app.listen(PORT1, () => {
  console.log(`App listen ${PORT1}`);
});
