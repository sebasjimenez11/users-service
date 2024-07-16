import { Router } from "express";
import {isAdmin} from "../middleware/hasRole";
import validateToken from "../middleware/verifyToken";
import { controllerGetAllSpecialty, controllerRegister } from "../controller/SpecialtyController";

const router = Router();

router.post('/create', validateToken,isAdmin, controllerRegister);
router.get('/all', controllerGetAllSpecialty);

export default router;