import { Router } from "express";
import DoctorController from "../controller/DoctorController";
import validateToken from "../middleware/verifyToken";
import isAdmin from "../middleware/isAdmin";
import doctorValidator  from "../middleware/validateDoctor";
import validationResult from "../middleware/validationResult";

const router = Router();

router.post('/',doctorValidator(), validationResult,validateToken,isAdmin ,DoctorController);
router.get('/');
router.patch('/');
router.put('/');

export default router;

