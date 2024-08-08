import { Router } from "express";
import { 
    registerDoctorController, 
    getAllDoctorsController, 
    getDoctorByIdController, 
    getDoctorCatalogController, 
    updateProfileDoctorContoller,
    UpdateDoctorProfilePicController
} from "../controller/DoctorController";
    
import validateToken from "../middleware/verifyToken";
import {doctorValidator, validationUpdateProfile } from "../middleware/validateDoctor";
import validationResult from "../middleware/validationResult";
import { isAdmin, isDoctor } from "../middleware/hasRole";
import imageUploadMiddleware from "../middleware/imageUploadMiddleware";

const router = Router();

router.post('/register',validateToken, isAdmin,imageUploadMiddleware,doctorValidator(), validationResult ,registerDoctorController);
router.get('/profile', validateToken, isDoctor, getDoctorByIdController);
router.get('/catalog', getDoctorCatalogController);
router.get('/doctors', validateToken, isAdmin, getAllDoctorsController);
router.put('/updateProfile',validationUpdateProfile(),validationResult, validateToken, isDoctor, updateProfileDoctorContoller);
router.patch('/updatePhoto', validateToken, isDoctor, imageUploadMiddleware, UpdateDoctorProfilePicController);

export default router;

