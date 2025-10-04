const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  topic: String, // 'Frontend', 'Backend', etc.
  price: Number,
  modules: [{ title: String, duration: Number }],
  instructor: String,
  trailerUrl: String,
  rating: { type: Number, default: 4.8 },
});

module.exports = mongoose.model("Course", courseSchema);
