import { Router } from "express";
import AuhtController from "../controller/AuhtController";
import validateAuht from "../middleware/validateAuth";
import validationResult from "../middleware/validationResult";

const router = Router();

router.post('/login',validateAuht(), validationResult ,AuhtController);

export default router;