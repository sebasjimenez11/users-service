import { Router } from "express";
import { getByEmailAdminContoller, updateProfileadminController } from "../controller/AdminController";
import validateToken from "../middleware/verifyToken";
import {isAdmin} from "../middleware/hasRole";
import { adminUpdateValidate } from "../middleware/validateAdmin";
import handleValidationErrors from "../middleware/validationResult";

const router = Router();

router.get('/profile', validateToken, isAdmin, getByEmailAdminContoller);
router.put('/updateProfile', adminUpdateValidate(), handleValidationErrors ,validateToken, isAdmin, updateProfileadminController)

export default router;  
