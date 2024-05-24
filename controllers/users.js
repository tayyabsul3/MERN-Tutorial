const userModel = require("../Models/users");
const User = userModel.user;

// // Server Side remdering
// exports.getAllSSR = async (req, res) => {
//   try {
//     const products = await Product.find();

//     ejs.renderFile(
//       path.resolve(__dirname, "../pages/index.ejs"),
//       { products: products },
//       (err, str) => {
//         if (err) {
//           res.json(err);
//           return;
//         }
//         res.send(str);
//       }
//     );
//   } catch (error) {
//     console.log({ error });
//     res.json(error);
//   }
// };

// exports.addSSR = (req, res) => {
//   ejs.renderFile(
//     path.resolve(__dirname, "../pages/add.ejs"),

//     (err, str) => {
//       if (err) {
//         res.json(err);
//         return;
//       }
//       res.send(str);
//     }
//   );
// };

///CRETAE API USING MONGOODSE


//REAL ALL API USING MONGOOSE
exports.getAll = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
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
