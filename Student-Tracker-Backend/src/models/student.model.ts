import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  grade: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  rollNumber: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    enum: ["Male", "Female"],
  },

  imageUrl: String,
  // address: String,
  // email: String,
});

export const Student = mongoose.model("Student", studentSchema);
