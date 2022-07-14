const express = require("express");
const http = require("http");
const { engine } = require("express-handlebars");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const socketIO = require("socket.io");
require("module-alias/register");

dotenv.config();

const { PORT1, MONGO_URL } = require("./configs/config");
const cronRun = require("./cron");
const {
  reportRouter,
  userRouter,
  carRouter,
  chatRouter,
  authRouter,
  socketRouter,
} = require("./routes");
const ApiError = require("./errors/ApiError");
const morgan = require("morgan");

const app = express();

const server = http.createServer(app);

const io = socketIO(server, { cors: { origin: "*" } });

io.on("connection", (socket) => socketRouter(io, socket));

app.engine(".hbs", engine({ defaultLayout: false }));
app.set("view engine", ".hbs");
app.set("views", "./hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({}));
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/reports", reportRouter);
app.use("/users", userRouter);
app.use("/cars", carRouter);
app.use("/chat", chatRouter);
app.use("*", _notFoundHandler);

app.use(_mainErrorHandler);

function _notFoundHandler(req, res, next) {
  next(new ApiError("Not found", 404));
}

function _mainErrorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message || "Server error",
    status: err.status,
    data: {},
  });
}

mongoose.connect(MONGO_URL).then((value) => {
  console.log("Connection success");
});

server.listen(PORT1, () => {
  console.log(`App listen ${PORT1}`);

  cronRun();
});
