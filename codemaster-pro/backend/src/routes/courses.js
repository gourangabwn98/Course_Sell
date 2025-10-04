const express = require("express");
const Course = require("../models/Course");
const auth = require("../middleware/auth"); // JWT middleware below
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find().sort({ rating: -1 });
  res.json(courses);
});

// Get single course
router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
});

// Create payment intent (protected)
// router.post("/:id/purchase", auth, async (req, res) => {
//   const course = await Course.findById(req.params.id);
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: course.price * 100,
//     currency: "usd",
//   });
//   res.json({ clientSecret: paymentIntent.client_secret });
// });

module.exports = router;
