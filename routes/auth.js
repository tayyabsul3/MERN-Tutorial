const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

router
  .post("/signup", authController.signUp)
  .post("/login", authController.login);

exports.router = router;
