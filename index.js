const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const productRouter = require("./routes/products.js");
const userRouter = require("./routes/users.js");

const server = express();
server.use(cors());
server.use(express.urlencoded());
server.use(express.static(path.resolve(__dirname, "public")));
server.use(express.json());
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://MuhammadTayyab:hXeg3v1P3m2vngbi@cluster0.pine65s.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Connected");
    server.listen(3000, () => {
      console.log("Server started");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
