const productModel = require("../Models/product");
const Product = productModel.Product;

///CRETAE API USING MONGOODSE
exports.create = (req, res) => {
  const product = new Product(req.body);

  product
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

//REAL ALL API USING MONGOOSE
exports.getAll = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
};

//READ WITH ID API USING MONGOOSE
exports.get = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
};

//REPLACE WITH ID API USING MONGOOSE
exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
};

//UPDATE WITH ID API USING MONGOOSE
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
};

//DELETE WITH ID API USING MONGOOSE
exports.Delete = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
};
