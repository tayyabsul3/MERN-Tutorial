// import { sum } from "./app.js";
const fs = require("fs");
const os = require("os");
const process = require("process")
const path = require("path");
const app = require("./app.js");
const { chdir } = require("process");
const filedata = fs.readFile("file.txt", "utf8", (err, txt) => {
  console.log(txt);
});
console.log(app.sum(1, 2));

// console.log(os.arch());
// console.log(os.cpus())
// console.log((os.freemem()));
console.log(path.dirname(__dirname));
// console.log()

console.log(fs.readdirSync(path.dirname(__dirname))[1]);
console.log(`Starting directory: ${process.cwd()}`);
try {
    process.chdir(fs.readdirSync(path.dirname(__dirname))[1]);
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

console.log(__dirname)