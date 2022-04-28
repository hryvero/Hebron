const fs = require("fs");
let fsextra = require("fs-extra");
// const path = require("path");

// const txtpathBoy = path.join(__dirname, "./boys", "boys");
// const txtpathGirl = path.join(__dirname, "girls", "girls");

fs.readFile("./boys/boys.json", function (err, data) {
  if (err) throw err;
  let arr = data.toString();
  arr = JSON.parse(arr);

  for (let elems of arr) {
    if (elems.gender == "woman") {
      fsextra.move("./boys/boys.json", "./girls/girls.json", (err) => {
        console.log("success");
      });
    } else if (elems.gender == "man") {
      fsextra.move("./girls/girls.json", "./boys/boys.json", (err) => {
        console.log("success");
      });
    }
  }

  console.log(arr);
});
