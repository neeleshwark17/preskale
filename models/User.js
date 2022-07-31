const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Enter name"],
    lowercase: true,
    trim: true,
  },
  spottedAt: {
    type: String,
    required: [true, "Enter first location"],
    trim: true,
  },
  conservationStatus: {
    type: String,
    required: [true, "Enter Last Spotted!"],
    lowercase: true,
    trim: true,
    enum: ["low", "high"],
  },
  lastSpottedAt: {
    type: Date,
    required: [true, "Enter Last Spotted!"],
    lowercase: true,
    trim: true,
  },
  scientificName: {
    type: String,
    required: [true, "Enter Last Spotted!"],
    lowercase: true,
    unique: true,
    trim: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
