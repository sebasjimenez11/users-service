import { Router } from "express"; 
import {
    registerPatientController,
    getAllPatientsController,
    getPatientByEmailController,
    updateProfilePatientController
} from "../controller/PatientController";
import {validationRegisterPatint, validationUpdatePatient } from "../middleware/validatePatient";
import validationResult from "../middleware/validationResult";
import validateToken from "../middleware/verifyToken";
import {isPatient, isAdminOrDoctor} from "../middleware/hasRole";

const router = Router();

router.post('/register', validationRegisterPatint(),validationResult,registerPatientController);
router.get('/profile', validateToken, isPatient, getPatientByEmailController);
router.get('/patients', validateToken, isAdminOrDoctor, getAllPatientsController);
router.put('/updateProfile',validationUpdatePatient(),validationResult,validateToken,isPatient, updateProfilePatientController);

export default router;

