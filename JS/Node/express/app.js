require("module-alias/register");
const express = require("express");
const http = require("http");
const { engine } = require("express-handlebars");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const socketIO = require("socket.io");

dotenv.config();

const { PORT1, MONGO_URL } = require("./configs/config");
const cronRun = require("./cron");
const { router, socketRouter } = require("./routes");
const { _mainErrorHandler } = require("./errors/error.handler");
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

app.use("/", (req, res) => {
  res.render("start");
});
app.use(router);

app.use(_mainErrorHandler);

mongoose.connect(MONGO_URL).then((value) => {
  console.log("Connection success");
});

server.listen(PORT1, () => {
  console.log(`App listen ${PORT1}`);

  cronRun();
});
