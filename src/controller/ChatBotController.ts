import { Request, Response } from "express";
import chatBotService from "../service/chatBotService";
export default class ChatBotController {
    private service = new chatBotService();

    ChatBotController = async (req: Request, res: Response)=>{
        const data = req.body;
    }
}