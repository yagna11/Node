module.exports = function () {
  //   process.stdout.write("prompt >");
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
      console.log(process.cwd());
      process.stdout.write("\npropmt > ");
    } else {
      process.stdout.write("You typed: " + cmd);
      process.stdout.write("\npropmt > ");
    }
  });
};
