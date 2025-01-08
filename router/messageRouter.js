import express from "express";
import { getAllMessage, sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlwares/auth.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessage);

export default router;
