const express = require("express");
const { engine } = require("express-handlebars");

// const DBofUsers = require("./dataBase/users");
// const DBofCars = require("./dataBase/cars");
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

app.listen(PORT1, () => {
  console.log(`App listen ${PORT1}`);
});

// app.get("/welcome", (req, res) => {
//   res.render("start");
// });
// //List of users
// app.get("/users", (req, res) => {
//   res.render("users", { DBofUsers });
// });
// //List of cars
// app.get("/cars", (req, res) => {
//   res.render("cars", { DBofCars });
// });

// app.post("/users", (req, res) => {
//   res.send("Got a POST request");
// });

// app.get("/users/:userIndex", (req, res) => {
//   const { userIndex } = req.params;
//   console.log(req.params);
//   if (DBofUsers[userIndex]) {
//     res.json(DBofUsers[userIndex]);
//   } else {
//     res.status(404).json("User is not found");
//   }
// });

// app.get("/cars/:carIndex", (req, res) => {
//   const { carIndex } = req.params;
//   if (DBofCars[carIndex]) {
//     res.json(DBofCars[userIndex]);
//     return;
//   }
//   res.status(404).json("Car is not found");
// });
