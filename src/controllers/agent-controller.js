import Agent from "../models/agent.js"
import { getLeaderboard } from "./leaderboard-controller.js";

export const addAgent = async (req, res) => {
  try {
    const { agentId, agentName, amountSold, salesCount } = req.body;

    const limit = parseInt(req.query.limit) || 50;

    if (!agentId || !agentName || amountSold == null || salesCount == null) {
      return res.status(400).json({
        message: "agentName, amountSold and salesCount are required",
      });
    }

    if (
      typeof agentId !== "string" ||
      typeof agentName !== "string" ||
      !Number.isFinite(Number(amountSold)) ||
      !Number.isInteger(Number(salesCount)) ||
      Number(salesCount) < 0 ||
      Number(amountSold) < 0
    ) {
      return res.status(400).json({
        message:
          "agentId must be a string and agentName must be a string and amountSold & salesCount must be numbers",
      });
    }

    const displayName = agentName
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

      await Agent.updateOne(
        { agentId },
        {
          $inc: {
            amountSold: amountSold,
            salesCount: salesCount,
          },
          $setOnInsert: {
            agentName: displayName,
          },
        },
        { upsert: true }
      );


    const output = await getLeaderboard(res,limit)
    console.log("this is the output",output);
    return res.status(200).json( output);
  } catch (error) {
    console.error("Add Sale Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
