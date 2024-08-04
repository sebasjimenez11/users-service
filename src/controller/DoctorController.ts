import { Request, Response } from "express";
import doctorDto from "../dto/doctor/Doctor";
import doctorService from "../service/doctorService";
import DoctorUpdateDto from "../dto/doctor/DoctorUpdate";
import responseHandler from "../helpers/responseHandler";
import StatusCodes from "../config/common/constants/statusCode";

const service = new doctorService();

export const registerDoctorController = async (req: Request, res: Response) => {
    try {
        const { tarjetaProf, documento, nombre, apellido, rol, email, foto, password, valorCita, codigoEspc } = req.body;
        const registerService = await service.registerDoctor(new doctorDto(tarjetaProf, documento, nombre, apellido, rol, email, foto, password, valorCita, codigoEspc));
        
        if (registerService.register) {
            responseHandler(res, StatusCodes.ACCEPTED, registerService.status);
        } else {
            responseHandler(res, StatusCodes.NOT_FOUND, registerService.status);
        }
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, "Error interno en el servidor");
    }
}

export const getAllDoctorsController = async (req: Request, res: Response) => {
    try {
        const getAllDoctors = await service.getAllDoctors();
        responseHandler(res, StatusCodes.ACCEPTED, getAllDoctors.message, getAllDoctors.data);
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}

export const getDoctorByEmailController = async (req: Request, res: Response) => {
    try {
        const emailDoctor = req.body.tokenEmail;
        const getByIdDoctor = await service.getDoctorByEmail(emailDoctor);
        responseHandler(res, StatusCodes.ACCEPTED, getByIdDoctor.message, getByIdDoctor.doctor);
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}

export const getDoctorCatalogController = async (req: Request, res: Response) => {
    try {
        const getDoctorCatalog = await service.getDoctorCatalog();
        responseHandler(res, StatusCodes.ACCEPTED, getDoctorCatalog.message, getDoctorCatalog.data);
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}

export const updateProfileDoctorContoller = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, tarjetaProf, documento, nombre, apellido, email, valorCita } = req.body;
        const updateProfile = await service.updateProfileDoctor(new DoctorUpdateDto(tokenEmail, tarjetaProf, documento, nombre, apellido, email, valorCita));
        
        if (updateProfile.update) {
            responseHandler(res, StatusCodes.ACCEPTED, updateProfile.status);
        } else {
            responseHandler(res, StatusCodes.UNAUTHORIZED, updateProfile.status);
        }
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}
