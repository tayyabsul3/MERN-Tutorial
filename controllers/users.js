const data = require("../data.json");
const users = data.users;

exports.create = (req, res) => {
  users.push(req.body);
  res.json(req.body);
};
exports.getAll = (req, res) => {
  res.json(users);
};
exports.get = (req, res) => {
  const id = req.params.id;
  const user = users.find((p) => p.id === +id);
  res.json(user);
};

exports.replace = (req, res) => {
  const id = +req.params.id;
  const index = users.findIndex((p) => p.id === +id);
  users.splice(index, 1, { id: id, ...req.body });
  res.json(users);
};

exports.update = (req, res) => {
  const id = +req.params.id;
  const index = users.findIndex((p) => p.id === +id);
  const user = users.find((p) => p.id === +id);
  users.splice(index, 1, { ...user, ...req.body });
  res.json(users);
};

exports.Delete = (req, res) => {
  const id = +req.params.id;
  const index = users.findIndex((p) => p.id === id);
  users.splice(index, 1);
  res.json(users);
};
