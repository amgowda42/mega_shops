const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Shop name is required"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "Shop location is required"],
  },
  owner: {
    type: String,
  },
});

module.exports = mongoose.model("Shop", shopSchema);
