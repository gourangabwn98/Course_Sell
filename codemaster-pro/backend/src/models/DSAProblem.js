const mongoose = require("mongoose");

const dsaSchema = new mongoose.Schema({
  title: String,
  difficulty: String, // 'easy', 'medium', 'hard'
  codeTemplate: String, // C++ starter code
  solution: String,
});

module.exports = mongoose.model("DSAProblem", dsaSchema);
