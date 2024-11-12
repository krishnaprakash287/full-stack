import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name must be at least 3 characters"],
    maxLength: [30, "First name cannot exceed 30 characters"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Last name must be at least 3 characters"],
    maxLength: [30, "Last name cannot exceed 30 characters"],
    trim: true,
  },
  date: {
    type: String,
    required: [true, "Date is required"],
    validate: {
      validator: (v) => validator.isDate(v, { format: "YYYY-MM-DD" }),
      message: "Please provide a valid date in the format YYYY-MM-DD",
    },
  },
  time: {
    type: String,
    required: [true, "Time is required"],
    validate: {
      validator: (v) => validator.isISO8601(`2021-01-01T${v}`), // Checks if time is valid
      message: "Please provide a valid time in the format HH:MM",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please provide a valid email"],
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: (v) => validator.isNumeric(v) && v.length === 11,
      message: "Phone number must be 11 digits",
    },
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
