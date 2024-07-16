import { Router } from "express"; 
import {
    registerPatientController,
    getAllPatientsController,
    getPatientByEmailController
} from "../controller/PatientController";
import validationRegisterPatint from "../middleware/validatePatient";
import validationResult from "../middleware/validationResult";
import validateToken from "../middleware/verifyToken";
import {isAdmin, isAdminOrDoctor} from "../middleware/hasRole";

const router = Router();

router.post('/register', validationRegisterPatint(),validationResult,registerPatientController);
router.get('/profile', validateToken, isAdmin, getPatientByEmailController);
router.get('/patients', validateToken, isAdminOrDoctor, getAllPatientsController);

export default router;

