const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
  }
});

module.exports = mongoose.model("Admin", adminSchema);
