const Booking = require("../models/Booking");
const mailer = require("../config/mailer");

require("dotenv").config();

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { customerName, service, date } = req.body;
    await Booking.create({
      customerName,
      service,
      date,
      createdBy: req.user._id,
    });

    // Send email notification to the admin
    if (!req.user.email) {
      return res.status(400).json({ error: "Email not found" });
    }
    await mailer.sendMail({
      from: process.env.SMTP_USER,
      to: req.user.email,
      subject: "New Booking Confirmation",
      text: `A new booking has been created by ${req.user.name} for ${service} on ${date}.`,
    });

    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBooking,
};