import { Router } from "express"; 
import PatientContorller from "../controller/PatientController";

const router = Router();

router.post('/register', PatientContorller.register);
router.get('/');
router.patch('/');
router.put('/');

export default router;

