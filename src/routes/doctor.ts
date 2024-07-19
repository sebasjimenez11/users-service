import { Router } from "express";
import { 
    registerDoctorController, 
    getAllDoctorsController, 
    getDoctorByEmailController, 
    getDoctorCatalogController, 
    updateProfileDoctorContoller
} from "../controller/DoctorController";
    
import validateToken from "../middleware/verifyToken";
import {doctorValidator, validationUpdateProfile } from "../middleware/validateDoctor";
import validationResult from "../middleware/validationResult";
import { isAdmin, isDoctor } from "../middleware/hasRole";

const router = Router();

router.post('/register',doctorValidator(), validationResult,validateToken,isAdmin ,registerDoctorController);
router.get('/profile', validateToken, isDoctor, getDoctorByEmailController);
router.get('/catalog', getDoctorCatalogController);
router.get('/doctors', validateToken, isAdmin, getAllDoctorsController);
router.put('/updateProfile',validationUpdateProfile(),validationResult, validateToken, isDoctor, updateProfileDoctorContoller);

export default router;

