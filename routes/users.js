const express = require("express");

const usersController = require("../controllers/users.js");

const router = express.Router();

router
  .post("/", usersController.create)
  .get("/", usersController.getAll)
  .get("/:id", usersController.get)
  .put("/:id", usersController.replace)
  .patch("/:id", usersController.update)
  .delete("/:id", usersController.Delete);

exports.router = router;
