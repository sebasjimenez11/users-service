import { Router } from "express";
import DoctorController from "../controller/DoctorController";
import validateToken from "../middleware/verifyToken";
import isAdmin from "../middleware/isAdmin";

const router = Router();

router.post('/', validateToken,isAdmin, DoctorController);
router.get('/');
router.patch('/');
router.put('/');

export default router;

