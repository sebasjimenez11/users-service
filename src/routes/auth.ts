import { Router } from "express";
import AuthController from "../controller/AuthController";
import validateAuth from "../middleware/validateAuth";
import validationResult from "../middleware/validationResult";

const router = Router();
const controller = new AuthController()

router.post('/login',validateAuth(), validationResult ,controller.login);


export default router;