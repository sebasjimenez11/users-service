import { Router } from "express";
import AuhtContorller from "../controller/AuhController";

const auht = new AuhtContorller()
const router = Router();

router.post("/", auht.Auht)

export default router;