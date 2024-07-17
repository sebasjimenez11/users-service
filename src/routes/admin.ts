import { Router } from "express";
import { getByEmailAdminContoller } from "../controller/AdminController";
import validateToken from "../middleware/verifyToken";
import {isAdmin} from "../middleware/hasRole";

const router = Router();

router.get('/profile', validateToken, isAdmin, getByEmailAdminContoller);

export default router;  
