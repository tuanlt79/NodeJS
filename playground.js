const fs = require("fs");
const chalk = require("chalk");
fs.writeFileSync("test.txt", "Learn nodejs");

console.log(chalk.red("test"));
