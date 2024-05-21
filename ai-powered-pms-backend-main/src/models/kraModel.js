const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const KRAEntrySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  //goalId: { type: String, default: uuidv4 },
  type: { type: String, enum: ["behavioural", "technical"], required: true },
  title: { type: String, required: true },
  description: String,
  KPIs: [String], // Assuming multiple KPIs are stored as an array of strings
  weight: { type: Number, required: true },
  isRequired: { type: Boolean, default: false },
  ownerId: { type: String, required: true },
});

module.exports = mongoose.model("ColKRAEntry", KRAEntrySchema);
