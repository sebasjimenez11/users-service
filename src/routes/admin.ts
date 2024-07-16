import { Router } from "express";
import { getAdminContoller } from "../controller/AdminController";
import validateToken from "../middleware/verifyToken";
import {isAdmin} from "../middleware/hasRole";

const router = Router();

router.get('/profile', validateToken, isAdmin, getAdminContoller);

export default router;