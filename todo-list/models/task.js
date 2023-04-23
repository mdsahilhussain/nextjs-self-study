import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: [20, "Title too long"],
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Data,
    default: Data.now,
  },
});
mongoose.models = {};
export const Task = mongoose.model("Task", schema);
