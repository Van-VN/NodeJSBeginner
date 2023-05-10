const fs = require("fs");

console.log("Start");
fs.readFile("./ReadFile/test.txt", "utf-8", function (err, data) {
  console.log(data);
});
console.log("End!");
