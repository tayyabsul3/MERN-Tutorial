const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

const productRouter = require("./routes/products.js");
const userRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");

const server = express();

const auth = (req, res, next) => {
  const token = req.get("Authorization").split("Bearer ")[1];
  console.log(token);
  try {
    var decoded = jwt.verify(token, "shhhhh");
    console.log(decoded);
    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(401);
  }
};
server.use(cors());
server.use(express.urlencoded());
server.use(express.static(path.resolve(__dirname, "public")));
server.use(express.json());
server.use("/products", auth, productRouter.router);
server.use("/users", auth, userRouter.router);
server.use("/auth", authRouter.router);
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
