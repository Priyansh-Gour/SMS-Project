const mongoose = require("mongoose");

const numberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: [true, "Phone no. is required"],
  },
});

const Number_model = mongoose.model("Number_model", numberSchema);

module.exports = Number_model;
