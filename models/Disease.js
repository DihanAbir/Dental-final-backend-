const mongoose = require("mongoose");

const DiseaseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is required"],
  },
  userid: {
    type: String,
  },
  bill: {
    type: Number,
  },
  due: {
    type: Number,
  },
  pay: {
    type: Number,
  },
  treatment: {
    type: String,
  },
  treatmentPlan: {
    type: String,
  },
  InV: {
    type: String,
  },
  BP: {
    type: String,
  },
  Diabetes: {
    type: String,
  },
  Temp: {
    type: String,
  },
  DeseaseHistory: {
    type: String,
  },
  MedicineHistory: {
    type: String,
  },

  days: {
    type: mongoose.Schema.ObjectId,
    ref: "days",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Disease = mongoose.model("disease", DiseaseSchema);
module.exports = Disease;
