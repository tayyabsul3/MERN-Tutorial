const data = require("../data.json");
const products = data.products;

exports.create = (req, res) => {
  products.push(req.body);
  res.json(req.body);
};
exports.getAll = (req, res) => {
  res.json(products);
};
exports.get = (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === +id);
  res.json(product);
};

exports.replace = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === +id);
  products.splice(index, 1, { id: id, ...req.body });
  res.json(products);
};

exports.update = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === +id);
  const product = products.find((p) => p.id === +id);
  products.splice(index, 1, { ...product, ...req.body });
  res.json(products);
};

exports.Delete = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex((p) => p.id === id);
  products.splice(index, 1);
  res.json(products);
};
