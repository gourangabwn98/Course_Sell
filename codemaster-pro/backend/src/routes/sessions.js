const express = require("express");
const Session = require("../models/Session");
const router = express.Router();

router.get("/", async (req, res) => {
  const sessions = await Session.find({ date: { $gte: new Date() } });
  res.json(sessions);
});

router.post("/book", async (req, res) => {
  // Logic for booking (update capacity, etc.)
  res.json({ message: "Booked!" });
});

module.exports = router;
