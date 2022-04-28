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
app.get("/welcome/users", (req, res) => {
  res.render("users", { DBofUsers });
});
//List of cars
app.get("/welcome/cars", (req, res) => {
  res.render("cars", { DBofCars });
});

app.get("/welcome/users/:userIndex", (req, res) => {
  const { userIndex } = req.params;
  res.json(DBofUsers[userIndex] || {});
});

app.get("/welcome/cars/:carIndex", (req, res) => {
  const { carIndex } = req.params;
  res.json(DBofCars[carIndex] || {});
});
app.listen(5000, () => {
  console.log("App listen 5000");
});
