const express = require("express");

const userController = require("../controllers/users.js");

const router = express.Router();

router
  .get("/", userController.getAll)
  .get("/:id", userController.get)
  .put("/:id", userController.replace)
  .patch("/:id", userController.update)
  .delete("/:id", userController.Delete);

exports.router = router;
