
const express = require("express");
const { createBooking } = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router.post(
  "/book",
  authMiddleware,
  roleMiddleware(["Admin", "Receptionist"]),
  createBooking
);

module.exports = router;
