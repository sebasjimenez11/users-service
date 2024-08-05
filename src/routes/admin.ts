import { Router } from "express";
import { getAdminByIdController, updateProfileAdminController } from "../controller/AdminController";
import validateToken from "../middleware/verifyToken";
import {isAdmin} from "../middleware/hasRole";
import { adminUpdateValidate } from "../middleware/validateAdmin";
import handleValidationErrors from "../middleware/validationResult";

const router = Router();

router.get('/profile', validateToken, isAdmin, getAdminByIdController);
router.put('/updateProfile', adminUpdateValidate(), handleValidationErrors ,validateToken, isAdmin, updateProfileAdminController)

export default router;  

