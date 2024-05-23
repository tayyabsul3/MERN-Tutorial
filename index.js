const { json } = require("express");
const fs = require("fs");
const http = require("http");

const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const product = data.products;

http
  .createServer((req, res) => {
    console.log("server running ");
    if (req.url.startsWith("/products/")) {
      console.log();
      const id = req.url.split("/")[2];
      const Product = product.find((t) => t.id === +id);
      res.setHeader("Content-Type", "text/html");
      res.end(Product.title);
      return;
    }
    switch (req.url) {
      case "/":
        res.setHeader("Content-Type", "text/html");
        res.end(index);
        return;
        break;
      case "/products":
        res.setHeader("Content-Type", "text/html");
        res.end(product.title);
        return;
      default:
        break;
    }
  })
  .listen(1231);
