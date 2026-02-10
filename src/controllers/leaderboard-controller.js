import Agent from "../models/agent.js";

export const getLeaderboard = async (limit = 50) => {
  try {
    const agents = await Agent.find({}, "agentName amountSold salesCount createdAt")
      .sort({ 
        salesCount: -1,     
        amountSold: -1,     
        createdAt: 1         
      })
      .limit(limit);

    const leaderboard = agents.map((agent, index) => {
      return {
        rank: index + 1,     
        agentName: agent.agentName,
        totalSalesAmount: agent.amountSold,
        totalSalesCount: agent.salesCount,
      };
    });

   return { leaderboard };
  } catch (error) {
    console.error("Leaderboard Error:", error);
    throw error;  
  }
};
