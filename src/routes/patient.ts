import { Router } from "express"; 
import PatientContorller from "../controller/PatientController";

const router = Router();

router.post('/', PatientContorller);
router.get('/');
router.patch('/');
router.put('/');

export default router;

