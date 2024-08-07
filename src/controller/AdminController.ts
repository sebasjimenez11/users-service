// src/controller/AdminController.ts
import { Request, Response } from 'express';
import AdminService from '../service/adminService';
import AdminUpdateDTO from '../dto/admin/AdminUpdate';

const adminService = new AdminService();

export const getAdminByIdController = async (req: Request, res: Response) => {
    try {
        const result = await adminService.getAdminById(req.body.ID);
        
        res.status(200).json({
            message : result.message,
            admin : result.admin
        })
    } catch (error) {
        res.status(500).json({message : 'Error retrieving admin'})
    }
};

export const updateProfileAdminController = async (req: Request, res: Response) => {
    try {
        const { ID, documento, nombre, apellido, email } = req.body;
        const updateProfile = await adminService.updateProfileAdmin(new AdminUpdateDTO(ID, documento, nombre, apellido, email));
        
        res.status(202).json({message : updateProfile.message})
    } catch (error) {
        res.status(505).json({ message : 'Internal Server Error' })
    }
}


