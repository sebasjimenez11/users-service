import { Router } from "express";
import { getByEmailAdminContoller } from "../controller/AdminController";
import validateToken from "../middleware/verifyToken";
import {isAdmin} from "../middleware/hasRole";
import { adminUpdateValidate } from "../middleware/validateAdmin";
import { validationResult } from "express-validator";

const router = Router();

router.get('/profile', validateToken, isAdmin, getByEmailAdminContoller);
router.put('/updateProfile', adminUpdateValidate, validationResult ,validateToken, isAdmin)

export default router;  
