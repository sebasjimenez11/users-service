import { Router } from "express";
import specialtyController from "../controller/SpecialtyController";
import isAdmin from "../middleware/isAdmin";
import validateToken from "../middleware/verifyToken";

const router = Router();

router.post('/', validateToken,isAdmin, specialtyController);
router.get('/');
router.patch('/');
router.put('/');

export default router;