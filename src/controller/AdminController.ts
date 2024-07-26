// src/controller/AdminController.ts
import { Request, Response } from 'express';
import AdminService from '../service/adminService';
import responseHandler from '../helpers/responseHandler';
import AdminUpdateDTO from '../dto/admin/AdminUpdate';
import StatusCodes from '../common/constants/statusCode';

const adminService = new AdminService();

export const getByEmailAdminController = async (req: Request, res: Response) => {
    try {
        const email = req.body.tokenEmail;
        const result = await adminService.getByEmailAdmin(email);

        if (result.admin) {
            responseHandler(res, 200, result.message, result.admin);
        } else {
            responseHandler(res, 404, 'Admin not found', null);
        }
    } catch (error) {
        responseHandler(res, 500, 'Error retrieving admin', null);
    }
};

export const updateProfileAdminController = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, documento, nombre, apellido, email } = req.body;
        const updateProfile = await adminService.updateProfileAdmin(new AdminUpdateDTO(tokenEmail, documento, nombre, apellido, email));
        if (updateProfile.update) {
            responseHandler(res, StatusCodes.ACCEPTED, updateProfile.message);
        } else {
            responseHandler(res, StatusCodes.UNAUTHORIZED, updateProfile.message);
        }
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}
