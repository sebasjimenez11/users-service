import { Router } from "express";
import { 
    getAdminByIdController, 
    UpdateAdminProfilePicController, 
    updateProfileAdminController 
} from "../controller/AdminController";
import validateToken from "../middleware/verifyToken";
import {isAdmin} from "../middleware/hasRole";
import { adminUpdateValidate } from "../middleware/validateAdmin";
import handleValidationErrors from "../middleware/validationResult";
import imageUploadMiddleware from "../middleware/imageUploadMiddleware";

const router = Router();

router.get('/profile', validateToken, isAdmin, getAdminByIdController);
router.put('/updateProfile', adminUpdateValidate(), handleValidationErrors ,validateToken, isAdmin, updateProfileAdminController)
router.patch('/updatePhoto', validateToken, isAdmin, imageUploadMiddleware(), UpdateAdminProfilePicController);

export default router;  

