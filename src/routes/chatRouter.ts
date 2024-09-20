
import express from 'express';
import {ChatBotController} from '../controller/ChatBotController';

const router = express.Router();

router.post('/', ChatBotController);

export default router;