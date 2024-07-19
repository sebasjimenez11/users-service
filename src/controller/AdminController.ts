import { Request, Response } from "express";
import AdminService from "../service/adminservice";
import AdminUpdateDTO from "../dto/admin/AdminUpdate";

const service:AdminService = new AdminService();

export const getByEmailAdminContoller = async (req:Request,res:Response)=> {
    try {
        const email = req.body.tokenEmail;
        const admin = await service.getByEmailAdmin(email);
        res.status(202).json({ admin: admin.admin });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}

export const updateProfileadminController = async (req:Request,res:Response)=>{
    try {
        const { tokenEmail, documento, nombre, apellido, email } = req.body;
        const updateProfile = await service.updateProfileAdmin(new AdminUpdateDTO(tokenEmail,documento, nombre, apellido, email));
        if (updateProfile.update) {
            return res.status(202).json({ message: updateProfile.message });
        } res.status(401).json({ message: updateProfile.message });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}

