const pwd = require("./pwd");

pwd();

const ls = require("./ls");
ls();

const fs = require("fs");

module.exports = function () {
  fs.readFile("./", "utf8", (err, fileName) => {
    process.stdout.write(fileName);
    if (err) {
      throw err;
    } else {
      process.stdout.write(fileName.split(" "));
      process.stdout.write("prompt > ");
    }
  });
};
