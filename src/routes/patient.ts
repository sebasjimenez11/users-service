import { Router } from "express"; 
import {
    registerPatientController,
    getAllPatientsController,
    getPatientByEmailController,
    updateProfileDoctorController
} from "../controller/PatientController";
import validationRegisterPatint from "../middleware/validatePatient";
import validationResult from "../middleware/validationResult";
import validateToken from "../middleware/verifyToken";
import {isPatient, isAdminOrDoctor} from "../middleware/hasRole";

const router = Router();

router.post('/register', validationRegisterPatint(),validationResult,registerPatientController);
router.get('/profile', validateToken, isPatient, getPatientByEmailController);
router.get('/patients', validateToken, isAdminOrDoctor, getAllPatientsController);
router.put('/updateProfile',validateToken,isPatient, updateProfileDoctorController);

export default router;

