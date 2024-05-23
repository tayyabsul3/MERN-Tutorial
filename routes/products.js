const express = require("express");

const productController = require("../controllers/product.js");

const router = express.Router();

router
  .post("/", productController.create)
  .get("/", productController.getAll)
  .get("/:id", productController.get)
  .put("/:id", productController.replace)
  .patch("/:id", productController.update)
  .delete("/:id", productController.Delete);

exports.router = router;
