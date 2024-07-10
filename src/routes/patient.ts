import { Router } from "express"; 
import PatientContorller from "../controller/PatientController";
import validationRegisterPatint from "../middleware/validatePatient";
import validationResult from "../middleware/validationResult";

const router = Router();

router.post('/', validationRegisterPatint(),validationResult,PatientContorller);
router.get('/');
router.patch('/');
router.put('/');

export default router;

