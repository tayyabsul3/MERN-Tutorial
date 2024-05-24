const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, minLength: 6, required: true },
  token: String,
});

exports.user = mongoose.model("user", userSchema);
