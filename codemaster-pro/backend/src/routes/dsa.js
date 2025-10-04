const express = require("express");
const DSAProblem = require("../models/DSAProblem");
const router = express.Router();

router.get("/", async (req, res) => {
  const { difficulty } = req.query;
  const problems = await DSAProblem.find(difficulty ? { difficulty } : {});
  res.json(problems);
});

router.post("/submit", async (req, res) => {
  // Mock submission check
  res.json({ correct: true, feedback: "Great job!" });
});

module.exports = router;
