const express = require("express");

const server = express();
server.use(express.json());

const productRouter = require("./routes/products.js");
const userRouter = require("./routes/users.js");

console.log();
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(3000, () => {
  console.log("server started");
});
