import { Router } from "express";
import AuthController from "../controller/AuthController";
import {validateAuht, validateRecovery} from "../middleware/validateAuth";
import validationResult from "../middleware/validationResult";

const router = Router();
const controller = new AuthController()

router.post('/login',validateAuht(), validationResult ,controller.login);
router.post('/recovery-password', validateRecovery(), validationResult ,controller.recoveryPassword)

export default router;