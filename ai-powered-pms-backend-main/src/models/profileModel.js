const e = require("express");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const PerformanceHistorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  rating: { type: Number, required: true },
  // You can add more fields as needed, such as comments, goals achieved, etc.
});

const AppraisalCycleSchema = new mongoose.Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});
const GoalSchema = new mongoose.Schema({
  goalId: { type: String },
  goalType: { type: String },
  empComment: { type: String },
  empRating: { type: Number },
  mgrComment: { type: String },
  mgrRating: { type: Number },
  isAccepted: { type: Boolean, default: true } // Defaulting isAccepted to true
});

const EmployeeSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  userId: { type: String},
  employeeId: { type: String, required: true },
  displayName: { type: String },
  userPrincipalName: { type: String },
  mail: { type: String},
  jobTitle: { type: String },
  departmentId: { type: String },
  department: { type: String },
  currentManager: { type: String },
  managerId: { type: String },
  lastManager: { type: String },
  appraisalCycle: {
    type: AppraisalCycleSchema,
    required: true,
  },
  currentStatus: { type: String }, // Example: Active, On Leave, etc.
  final_rating: { type: Number,default:null }, // Current performance rating
  history: [PerformanceHistorySchema], // Array of performance history objects
  goals: [GoalSchema]
});

module.exports = mongoose.model("colProfile", EmployeeSchema);