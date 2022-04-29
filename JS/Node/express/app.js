const express = require("express");
const { engine } = require("express-handlebars");
const DBofUsers = require("./dataBase/users");
const DBofCars = require("./dataBase/cars");
const app = express();

app.engine(".hbs", engine({ defaultLayout: false }));
app.set("view engine", ".hbs");
app.set("views", "./hbs");

app.get("/welcome", (req, res) => {
  res.render("start");
});
//List of users
app.get("/users", (req, res) => {
  res.render("users", { DBofUsers });
});
//List of cars
app.get("/cars", (req, res) => {
  res.render("cars", { DBofCars });
});

app.get("/users/:userIndex", (req, res) => {
  const { userIndex } = req.params;
  console.log(req.params);
  if (DBofUsers[userIndex]) {
    res.json(DBofUsers[userIndex]);
  } else {
    res.status(404).json("User is not found");
  }
});

app.get("/cars/:carIndex", (req, res) => {
  const { carIndex } = req.params;
  if (DBofCars[carIndex]) {
    res.json(DBofCars[userIndex]);
  } else {
    res.status(404).json("Car is not found");
  }
});
app.listen(5000, () => {
  console.log("App listen 5000");
});
