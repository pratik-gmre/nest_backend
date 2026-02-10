import express from "express";
import { addAgent } from "../controllers/agent-controller.js"



const router = express.Router();


router.route("/leaderboard").post(addAgent);

export default router;
