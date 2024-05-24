const userModel = require("../Models/users");
const User = userModel.user;
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
  const user = new User(req.body);
  var token = jwt.sign({ email: req.body.email }, "shhhhh");
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  user.token = token;
  user
    .save()
    .then((doc) => {
      console.log({ doc });
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(404, "Error while saving").json(err);
    });
  // product.save((err, doc) => {
  //   // console.log({ err, doc });
  //   // if (err) {
  //   //   res.status(404, "Error while saving").json(err);
  //   // } else {
  //   //   res.status(200).json(doc);
  //   // }
  // });
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    var token = jwt.sign({ email: user.email }, "shhhhh");
    var decoded = jwt.verify(user.token, "shhhhh");
    console.log(decoded);
    const isAuth = bcrypt.compareSync(req.body.password, user.password);
    if (isAuth) {
      user.token = token;
    } else {
      res.sendStatus(401);
    }

    res.json(user);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
};
