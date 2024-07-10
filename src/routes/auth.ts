import { Router } from "express";
import AuhtController from "../controller/AuhtController";

const router = Router();

router.post("/", AuhtController)

export default router;