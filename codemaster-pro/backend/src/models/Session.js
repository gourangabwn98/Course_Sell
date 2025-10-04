const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  title: String,
  date: Date,
  topic: String,
  capacity: Number,
  price: Number,
});

module.exports = mongoose.model("Session", sessionSchema);
