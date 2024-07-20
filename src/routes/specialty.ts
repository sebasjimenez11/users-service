import { Router } from "express";
import {isAdmin} from "../middleware/hasRole";
import validateToken from "../middleware/verifyToken";
import { controllerGetAllSpecialty, controllerRegister } from "../controller/SpecialtyController";
import { specialtyValidator } from "../middleware/validateSpecialty";
import handleValidationErrors from "../middleware/validationResult";

const router = Router();

router.post('/create',specialtyValidator(),handleValidationErrors,validateToken,isAdmin, controllerRegister);
router.get('/all', controllerGetAllSpecialty);

export default router;