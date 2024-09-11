const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone_number: {
    type: String,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
  adhar_num: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
