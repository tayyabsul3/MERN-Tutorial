const express = require("express");

const server = express();
server.use(express.json());

const productRouter = require("./routes/products.js");
const userRouter = require("./routes/users.js");

console.log();
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

//DB CONNECTIONS
const mongoose = require("mongoose");

main();

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("Mongdb Connected");
  } catch (error) {
    console.log(error);
  }
}

server.listen(3000, () => {
  console.log("server started");
});
