import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
  {
    agentId: {
      type: String,
      required: true,
      trim: true,
      index: true,
      unique: true
    },
    agentName: {
      type: String,
      required: true,
    },
    amountSold: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },
    salesCount: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Agent = mongoose.model("Agent", agentSchema);
export default Agent;