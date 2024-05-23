const express = require("express");
const data = require("./data.json");
const products = data.products;

const server = express();
server.use(express.json());

console.log();

//FUNCTIONS:

//CREATE API
server.post("/", (req, res) => {
  products.push(req.body);
  res.json(req.body);
});

// READ API
server.get("/", (req, res) => {
  res.json(products);
});
server.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === +id);
  res.json(product);
});

//UPDATE API
//replace
server.put("/:id", (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === +id);
  products.splice(index, 1, { id: id, ...req.body });
  res.json(products);
});
//Update without overwriting
server.patch("/:id", (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === +id);
  const product = products.find((p) => p.id === +id);
  products.splice(index, 1, { ...product, ...req.body });
  res.json(products);
});

//Delete
server.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  products.splice(index, 1);
  res.json(products);
});

server.listen(3000, () => {
  console.log("server started");
});
